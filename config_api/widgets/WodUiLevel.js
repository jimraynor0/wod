function WodUiLevel() {

    WodUiWidget.call(this, 'div')

    var _this = this

    this.overwriteCheckbox = new WodUiCheckbox()
    this.overwriteCheckbox.setClickListener(function() {
        var checked = _this.overwriteCheckbox.isChecked()

        _this.overwriteCheckbox.setChecked( checked )

        _this.cfg.overwriteStandard = checked
        _this.setWrapperVisible(checked)

        if (checked)
             _this.copy()
    })
    this.appendChild(this.overwriteCheckbox)

    this.overwriteLabel = new WodUiLabel(WOD_STR.Level.overwriteStandard)
    this.overwriteLabel.setClickListener(function() {
        var checked = !_this.overwriteCheckbox.isChecked()

        _this.overwriteCheckbox.setChecked( checked )

        _this.cfg.overwriteStandard = checked
        _this.setWrapperVisible(checked)

        if (checked)
            _this.copy()
    })
    this.appendChild(this.overwriteLabel)



    this.wrapper = new WodUiWidget('div')
    this.appendChild(this.wrapper)

    this.wrapper.setStyleProperty('display', 'none')
    this.copyButton = new WodUiButton(WOD_STR.Level.copyStandard)
    this.copyButton.setClickListener(function() {
        _this.copy()
    })
    this.wrapper.appendChild(this.copyButton)

    this.clearButton = new WodUiButton(WOD_STR.Level.clear)
    this.clearButton.setClickListener(function() {
        _this.clear(true)
    })
    this.wrapper.appendChild(this.clearButton)

    // Copy/Paste-Buttons
    this.copyAnyButton = new WodUiButton(WOD_STR.Level.copyLevel)
    this.copyAnyButton.setClickListener(function() {
        _this.copyany()
    })
    this.wrapper.appendChild(this.copyAnyButton)

    this.pasteAnyButton = new WodUiButton(WOD_STR.Level.pasteLevel)
    this.pasteAnyButton.setClickListener(function() {
        _this.pasteany()
    })
    this.wrapper.appendChild(this.pasteAnyButton)


    this.positionHeading = new WodUiHeading(3, WOD_STR.Level.position)
    this.wrapper.appendChild(this.positionHeading)

    this.positionDropdown = new WodUiPositionDropdown(wod_createPositions(false, false))
    this.positionDropdown.setSelectionChangeListener(function() {
        _this.cfg.positionId = _this.positionDropdown.getSelectedPositionId()
    })
    this.wrapper.appendChild(this.positionDropdown)

    this.wrapper.appendChild(new WodUiHeading(3, WOD_STR.Level.initiative))

    if ( THE_ENV.initiativeSkills.length == 0) {
        label = new WodUiLabel( WOD_STR.Wod.skill.none )
        label.setClass('inactive')
        this.wrapper.appendChild(label)
    } else {
        this.initiativeDropdown = new WodUiSkillItemDropdown(THE_ENV.initiativeSkills)
        this.wrapper.appendChild(this.initiativeDropdown)
    }

    this.wrapper.appendChild(new WodUiHeading(3, WOD_STR.Level.preround))

    this.preroundActionList = new WodUiActionList(THE_ENV.preroundSkills)
    this.wrapper.appendChild(this.preroundActionList)

    if (READONLY==false){

        but = new WodUiButton(WOD_STR.Orders.save)
        but.setClickListener(function() {
            profileSave( THE_ORDERS )
        })

        this.wrapper.appendChild(new WodUiWidget('p', but))
    }

    this.wrapper.appendChild(new WodUiHeading(3, WOD_STR.Level.round))

    this.roundActionList = new WodUiActionList(THE_ENV.roundSkills)
    this.wrapper.appendChild(this.roundActionList)

    if (READONLY==false){

        but = new WodUiButton(WOD_STR.Orders.save)
        but.setClickListener(function() {
            profileSave( THE_ORDERS )
        })

        this.wrapper.appendChild(new WodUiWidget('p', but))
    }

    this.wrapper.appendChild(new WodUiHeading(3, WOD_STR.Level.heal.heading))

    this.wrapper.appendChild(new WodUiText(WOD_STR.Level.heal.when))
    this.healConditionDropdown = new WodUiDropdown()
    this.healConditionDropdown.addOption(WOD_MATE_CONDITION_GOOD, WOD_STR.Level.heal.condition.good)
    this.healConditionDropdown.addOption(WOD_MATE_CONDITION_MEDIUM, WOD_STR.Level.heal.condition.medium)
    this.healConditionDropdown.addOption(WOD_MATE_CONDITION_BAD, WOD_STR.Level.heal.condition.bad)
    this.healConditionDropdown.addOption(WOD_MATE_CONDITION_DEAD, WOD_STR.Level.heal.condition.dead)
    this.healConditionDropdown.setSelectionChangeListener(function() {
        _this.cfg.heal.condition = _this.healConditionDropdown.getSelectedOption()
    })


    this.have_healing = THE_ENV.healSkills.length > 0

    this.wrapper.appendChild(this.healConditionDropdown)

    this.healGoodDropdowns   = this.createHealingDropwdowns( WOD_STR.Level.heal.good )
    this.healMediumDropdowns = this.createHealingDropwdowns( WOD_STR.Level.heal.medium )
    this.healBadDropdowns    = this.createHealingDropwdowns( WOD_STR.Level.heal.bad )

    if (READONLY==false){

        but = new WodUiButton(WOD_STR.Orders.save)
        but.setClickListener(function() {
            profileSave( THE_ORDERS )
        })

        this.wrapper.appendChild(new WodUiWidget('p', but))
    }
}

WodUiLevel.clone(WodUiWidget)

WodUiLevel.prototype.createHealingDropwdowns = function( headline ) {

    var dropdownList = new Array()

    this.wrapper.appendChild(new WodUiHeading(4, headline))

    if ( !this.have_healing ) {
        label = new WodUiLabel( WOD_STR.Wod.skill.none )
        label.setClass('inactive')
        this.wrapper.appendChild(label)

    } else {
        for (var i=0; i<HEAL_ACTION_COUNT; i++){

            if (i>0)
                this.wrapper.appendChild(new WodUiLinebreak())

            this.wrapper.appendChild(new WodUiText( (i+1) + '. '))

            var dropdown = new WodUiSkillItemDropdown(THE_ENV.healSkills);
            dropdownList.push( dropdown )
            this.wrapper.appendChild( dropdown )
        }
    }

    return dropdownList
}

WodUiLevel.prototype.setConfig = function(cfg) {
    this.cfg = cfg

    if (typeof this.initiativeDropdown != 'undefined') {
        this.initiativeDropdown.setAction(cfg.initiative)
    }

    this.preroundActionList.setActions(cfg.preround)
    this.roundActionList.setActions(cfg.round)

    if (this.have_healing) {

        for (var i=0; i<HEAL_ACTION_COUNT; i++){
            this.healGoodDropdowns[i].setAction(cfg.heal.good[i]);
            this.healMediumDropdowns[i].setAction(cfg.heal.medium[i]);
            this.healBadDropdowns[i].setAction(cfg.heal.bad[i]);
        }
    }

    this.refresh()
}

WodUiLevel.prototype.copy = function() {
    this.clear()
    this.cfg.initiative.copyFrom(WOD_CFG.dungeon.standard.initiative)
    for (var i in WOD_CFG.dungeon.standard.preround) {
        var action = new WodAction()
        action.copyFrom(WOD_CFG.dungeon.standard.preround[i])
        this.cfg.preround.push(action)
    }
    for (var i in WOD_CFG.dungeon.standard.round) {
        var action = new WodAction()
        action.copyFrom(WOD_CFG.dungeon.standard.round[i])
        this.cfg.round.push(action)
    }
    this.cfg.heal.condition = WOD_CFG.dungeon.standard.heal.condition

    for (var i=0; i<HEAL_ACTION_COUNT; i++){
        this.cfg.heal.good[i].copyFrom(WOD_CFG.dungeon.standard.heal.good[i])
        this.cfg.heal.medium[i].copyFrom(WOD_CFG.dungeon.standard.heal.medium[i])
        this.cfg.heal.bad[i].copyFrom(WOD_CFG.dungeon.standard.heal.bad[i])
    }

    if (typeof this.cfg.positionId != 'undefined'){
        this.cfg.positionId = WOD_CFG.dungeon.standard.positionId
    }

    this.refresh()
}

WodUiLevel.prototype.copyany = function() {

    TMP_CONFIG = (new WodConfig()).dungeon.standard
    TMP_CONFIG.initiative.copyFrom(this.cfg.initiative)
    for (var i in this.cfg.preround) {
        var action = new WodAction()
        action.copyFrom(this.cfg.preround[i])
        TMP_CONFIG.preround.push(action)
    }
    for (var i in this.cfg.round) {
        var action = new WodAction()
        action.copyFrom(this.cfg.round[i])
        TMP_CONFIG.round.push(action)
    }
    TMP_CONFIG.heal.condition = this.cfg.heal.condition

    for (var i=0; i<HEAL_ACTION_COUNT; i++){
        TMP_CONFIG.heal.good[i].copyFrom(this.cfg.heal.good[i])
        TMP_CONFIG.heal.medium[i].copyFrom(this.cfg.heal.medium[i])
        TMP_CONFIG.heal.bad[i].copyFrom(this.cfg.heal.bad[i])
    }

    if (typeof TMP_CONFIG.positionId != 'undefined'){
        TMP_CONFIG.positionId = this.cfg.positionId
    }
}

WodUiLevel.prototype.pasteany = function() {
    if (TMP_CONFIG == null)
        return

    this.clear()
    this.cfg.initiative.copyFrom(TMP_CONFIG.initiative)
    for (var i in TMP_CONFIG.preround) {
        var action = new WodAction()
        action.copyFrom(TMP_CONFIG.preround[i])
        this.cfg.preround.push(action)
    }
    for (var i in TMP_CONFIG.round) {
        var action = new WodAction()
        action.copyFrom(TMP_CONFIG.round[i])
        this.cfg.round.push(action)
    }
    this.cfg.heal.condition = TMP_CONFIG.heal.condition

    for (var i=0; i<HEAL_ACTION_COUNT; i++){
        this.cfg.heal.good[i].copyFrom(TMP_CONFIG.heal.good[i])
        this.cfg.heal.medium[i].copyFrom(TMP_CONFIG.heal.medium[i])
        this.cfg.heal.bad[i].copyFrom(TMP_CONFIG.heal.bad[i])
    }

    if (typeof this.cfg.positionId != 'undefined'){
        this.cfg.positionId = TMP_CONFIG.positionId
    }

    this.refresh()
}

WodUiLevel.prototype.clear = function(defaultEntries) {
    this.cfg.initiative.setSkill(null)
    while (this.cfg.preround.length > 0) {
        this.cfg.preround.pop()
    }
    while (this.cfg.round.length > 0) {
        this.cfg.round.pop()
    }

    if (defaultEntries){
        this.cfg.preround.push(new WodAction())
        this.cfg.round.push(new WodAction())
    }


    this.cfg.heal.condition = WOD_MATE_CONDITION_MEDIUM

    for (var i=0; i<HEAL_ACTION_COUNT; i++){
        this.cfg.heal.good[i].setSkill(null)
        this.cfg.heal.medium[i].setSkill(null)
        this.cfg.heal.bad[i].setSkill(null)
    }

    this.refresh()
}

WodUiLevel.prototype.refresh = function() {
    if (typeof this.cfg.overwriteStandard != 'undefined') {
        this.overwriteCheckbox.setVisible(true)
        this.overwriteLabel.setVisible(true)
        this.overwriteCheckbox.setChecked(this.cfg.overwriteStandard)
        this.setWrapperVisible(this.cfg.overwriteStandard)
    } else {
        this.overwriteCheckbox.setVisible(false)
        this.overwriteLabel.setVisible(false)
        this.setWrapperVisible(true)
    }
    this.positionDropdown.setSelectedPositionId(this.cfg.positionId)

    if (typeof this.initiativeDropdown != 'undefined') {
        this.initiativeDropdown.refresh()
    }

    this.preroundActionList.refresh()
    this.roundActionList.refresh()
    this.healConditionDropdown.setSelectedOption(this.cfg.heal.condition)

    if (this.have_healing) {
        for (var i=0; i<HEAL_ACTION_COUNT; i++){

            this.healGoodDropdowns[i].refresh()
            this.healMediumDropdowns[i].refresh()
            this.healBadDropdowns[i].refresh()
        }
    }
}

WodUiLevel.prototype.setWrapperVisible = function(visible) {
    if (visible) {
        this.wrapper.setStyleProperty('display', 'block')
    } else {
        this.wrapper.setStyleProperty('display', 'none')
    }
}

WodUiLevel.prototype.setCopyButtonVisible = function(visible) {
    this.copyButton.setVisible(visible)
}

WodUiLevel.prototype.setCopyAnyButtonVisible = function(visible) {
    this.copyAnyButton.setVisible(visible)
}

WodUiLevel.prototype.setPasteAnyButtonVisible = function() {
    this.pasteAnyButton.setVisible( TMP_CONFIG != null )
}

WodUiLevel.prototype.setPositionDropdownVisible = function(visible) {
    this.positionHeading.setVisible(visible)
    this.positionDropdown.setVisible(visible)
}
