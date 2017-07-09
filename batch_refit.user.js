//-----------------------------------------------------------------------------
// [WoD] Batch refit
// Copyright (c) Jim Zhai
//-----------------------------------------------------------------------------
// ==UserScript==
// @name          Wod batch refit
// @author        Jim Zhai
// @namespace     org.toj
// @version       0.1.1
// @description   Allow player to change actions in batch in config page
// @updateURL		  https://github.com/jimraynor0/wod/raw/master/batch_refit.user.js
// @downloadURL		https://github.com/jimraynor0/wod/raw/master/batch_refit.user.js
// @include       http*://*.world-of-dungeons.*/wod/spiel/hero/skillconf*
// ==/UserScript==

// TODO:
// display action appearance levels
// delete action?
// batch replace item/ammo with another of the same type

WodAction.prototype.signature = function() {
  var signitureComponents = [];
  signitureComponents.push(this.skill == null ? "" : this.skill.id);
  signitureComponents.push(this.item == null ? "" : this.item.id);
  signitureComponents.push(this.socket);
  signitureComponents.push(this.ammo == null ? "" : this.ammo.id);
  signitureComponents.push(this.ammoGem);
  signitureComponents.push(this.positionId);
  signitureComponents.push(this.positions);
  return signitureComponents.toString();
};

WodHeal.prototype.copyFrom = function(heal) {
  this.condition = heal.condition;

  for (var i = 0; i < HEAL_ACTION_COUNT; i++){
      this.good[i].copyFrom(heal.good[i]);
      this.medium[i].copyFrom(heal.medium[i]);
      this.bad[i].copyFrom(heal.bad[i]);
  }
};

function RefitConfig() {
  this.initiative = new WodAction();
  this.initiative.copyFrom(WOD_CFG.dungeon.standard.initiative);
  this.heal       = new WodHeal();
  this.heal.copyFrom(WOD_CFG.dungeon.standard.heal);

  this.aggregatedPreround = this.aggregateActions("preround");
  this.aggregatedRound = this.aggregateActions("round");

  this.preround   = this.aggregatedPreround.actions;
  this.round      = this.aggregatedRound.actions; // array of WodAction
}

RefitConfig.prototype.aggregateActions = function (type) {
  var actionRefs = {};
  var aggregated = [];

  aggregate(WOD_CFG.dungeon.standard[type], "默认");
  WOD_CFG.dungeon.levels.forEach(function(level, index) {
    aggregate(level[type], "第" + (index + 1) + "层");
  });

  return {
    actions: aggregated,
    actionRefs: actionRefs
  };

  function aggregate(actions, level) {
    actions.forEach(function (action) {
      var originalSignature = action.signature();
      if (!isset(actionRefs, originalSignature)) {
        var copy = new WodAction();
        copy.copyFrom(action);
        copy.originalSignature = originalSignature;
        aggregated.push(copy);
        actionRefs[originalSignature] = {
          levels: [level],
          refs: [action]
        };
      } else {
        actionRefs[originalSignature].refs.push(action);
        if (!is_in_array(level, actionRefs[originalSignature].levels)) {
          actionRefs[originalSignature].levels.push(level);
        }
      }
    });
  }
};

RefitConfig.prototype.applyInitiatives = function () {
  var init = this.initiative;
  WOD_CFG.dungeon.standard.initiative.copyFrom(init);
  WOD_CFG.dungeon.levels.forEach(function(level) {
    if (level.overwriteStandard) {
      level.initiative.copyFrom(init);
    }
  });
  THE_ORDERS.dungeon.setSelectedLevel(SELECTED_LVL);
};

RefitConfig.prototype.applyHeals = function () {
  var heal = this.heal;
  WOD_CFG.dungeon.standard.heal.copyFrom(heal);
  WOD_CFG.dungeon.levels.forEach(function(level) {
    if (level.overwriteStandard) {
      level.heal.copyFrom(heal);
    }
  });
  THE_ORDERS.dungeon.setSelectedLevel(SELECTED_LVL);
};

RefitConfig.prototype.applyActions = function () {
  var _this = this;
  this.preround.forEach(function(action) {
    _this.aggregatedPreround.actionRefs[action.originalSignature].refs.forEach(function(actionRef) {
      actionRef.copyFrom(action);
    });
  });

  this.round.forEach(function(action) {
    _this.aggregatedRound.actionRefs[action.originalSignature].refs.forEach(function(actionRef) {
      actionRef.copyFrom(action);
    });
  });
  THE_ORDERS.dungeon.setSelectedLevel(SELECTED_LVL);
};

// the refit tab will look very much like a level tab
function WodUiRefit() {

    WodUiWidget.call(this, 'div');

    var _this = this;

    this.wrapper = new WodUiWidget('div');
    this.appendChild(this.wrapper);

    this.wrapper.appendChild(new WodUiHeading(3, WOD_STR.Level.initiative));

    if ( THE_ENV.initiativeSkills.length == 0) {
        label = new WodUiLabel( WOD_STR.Wod.skill.none );
        label.setClass('inactive');
        this.wrapper.appendChild(label);
    } else {
        this.initiativeDropdown = new WodUiSkillItemDropdown(THE_ENV.initiativeSkills);
        this.wrapper.appendChild(this.initiativeDropdown);
        var buttons = new WodUiWidget("p");
        but = new WodUiButton("应用先攻技能改动");
        but.setClickListener(function() {
            if (_this.cfg) {
              _this.cfg.applyInitiatives();
            }
        });
        buttons.appendChild(but);
        but = new WodUiButton("应用所有改动");
        but.setClickListener(function() {
          _this.applyChanges();
        });
        buttons.appendChild(but);
        this.wrapper.appendChild(buttons);
    }

    this.wrapper.appendChild(new WodUiHeading(3, WOD_STR.Level.preround));

    this.preroundActionList = new WodUiActionList(THE_ENV.preroundSkills);
    this.wrapper.appendChild(this.preroundActionList);

    if (READONLY==false){
        but = new WodUiButton("应用动作改动");
        but.setClickListener(function() {
            if (_this.cfg) {
              _this.cfg.applyActions();
            }
        });
        this.wrapper.appendChild(new WodUiWidget('p', but));
    }

    this.wrapper.appendChild(new WodUiHeading(3, WOD_STR.Level.round));

    this.roundActionList = new WodUiActionList(THE_ENV.roundSkills);
    this.wrapper.appendChild(this.roundActionList);

    if (READONLY==false){;
        but = new WodUiButton("应用动作改动");
        but.setClickListener(function() {
          if (_this.cfg) {
            _this.cfg.applyActions();
          }
        });
        this.wrapper.appendChild(new WodUiWidget('p', but));
    }

    this.wrapper.appendChild(new WodUiHeading(3, WOD_STR.Level.heal.heading));

    this.wrapper.appendChild(new WodUiText(WOD_STR.Level.heal.when));
    this.healConditionDropdown = new WodUiDropdown();
    this.healConditionDropdown.addOption(WOD_MATE_CONDITION_GOOD, WOD_STR.Level.heal.condition.good);
    this.healConditionDropdown.addOption(WOD_MATE_CONDITION_MEDIUM, WOD_STR.Level.heal.condition.medium);
    this.healConditionDropdown.addOption(WOD_MATE_CONDITION_BAD, WOD_STR.Level.heal.condition.bad);
    this.healConditionDropdown.addOption(WOD_MATE_CONDITION_DEAD, WOD_STR.Level.heal.condition.dead);
    this.healConditionDropdown.setSelectionChangeListener(function() {
        _this.cfg.heal.condition = _this.healConditionDropdown.getSelectedOption();
    });


    this.have_healing = THE_ENV.healSkills.length > 0;

    this.wrapper.appendChild(this.healConditionDropdown);

    this.healGoodDropdowns   = this.createHealingDropwdowns( WOD_STR.Level.heal.good );
    this.healMediumDropdowns = this.createHealingDropwdowns( WOD_STR.Level.heal.medium );
    this.healBadDropdowns    = this.createHealingDropwdowns( WOD_STR.Level.heal.bad );

    if (READONLY==false){
      var buttons = new WodUiWidget("p");
      but = new WodUiButton("应用治疗技能改动");
      but.setClickListener(function() {
        if (_this.cfg) {
          _this.cfg.applyHeals();
        }
      });
      buttons.appendChild(but);
      but = new WodUiButton("应用所有改动");
      but.setClickListener(function() {
        _this.applyChanges();
      });
      buttons.appendChild(but);
      this.wrapper.appendChild(buttons);
    }
}

WodUiRefit.clone(WodUiLevel);

WodUiRefit.prototype.refresh = function() {
    if (typeof this.initiativeDropdown != 'undefined') {
        this.initiativeDropdown.refresh();
    }

    this.preroundActionList.refresh();
    this.roundActionList.refresh();
    this.healConditionDropdown.setSelectedOption(this.cfg.heal.condition);

    if (this.have_healing) {
        for (var i = 0; i < HEAL_ACTION_COUNT; i++) {

            this.healGoodDropdowns[i].refresh();
            this.healMediumDropdowns[i].refresh();
            this.healBadDropdowns[i].refresh();
        }
    }
};

WodUiRefit.prototype.applyChanges = function() {
  this.cfg.applyInitiatives();
  this.cfg.applyHeals();
  this.cfg.applyActions();
};

// overwrite WodUiOrders.setSelectedTab so that it includes refit tab
WodUiOrders.prototype.setSelectedTab = function(tab, child) {

    this.tabGeneral.setClass(null);
    this.tabDungeon.setClass(null);
    this.tabNotes.setClass(null);
    this.tabRefit.setClass(null);

    if (PLAINCONFIG==false){
        this.tabDuel.setClass(null);
    }

    tab.setClass('selected');

    this.general.setStyleProperty('display', 'none');
    this.dungeon.setStyleProperty('display', 'none');
    this.notes.setStyleProperty('display', 'none');
    this.refit.setStyleProperty('display', 'none');

    if (PLAINCONFIG==false){
        this.duel.setStyleProperty('display', 'none');
    }

    if (child.level != undefined)
        child.level.setPasteAnyButtonVisible();

    child.setStyleProperty('display', 'block');

    SELECTED_TAB=tab.getId();
};

function refreshRefit() {
  var AGGREGATED_CFG = new RefitConfig();
  THE_ORDERS.refit.setConfig(AGGREGATED_CFG);
}

THE_ORDERS.tabRefit = new WodUiWidget('li');
THE_ORDERS.tabRefit.setId('wod-orders-tab-batch-refit');
THE_ORDERS.tabRefit.appendChild(new WodUiText("换装"));

THE_ORDERS.refit = new WodUiRefit();
THE_ORDERS.appendChild(THE_ORDERS.refit);

THE_ORDERS.tabRefit.setClickListener(function() {
    THE_ORDERS.setSelectedTab(THE_ORDERS.tabRefit, THE_ORDERS.refit);
    refreshRefit();
});
THE_ORDERS.tabs.appendChild(THE_ORDERS.tabRefit);

refreshRefit();

if (SELECTED_TAB != THE_ORDERS.tabRefit.getId()) {
  THE_ORDERS.tabRefit.setClass(null);
  THE_ORDERS.refit.setStyleProperty('display', 'none');
} else {
  THE_ORDERS.setSelectedTab(SELECTED_TAB, THE_ORDERS.refit);
}
