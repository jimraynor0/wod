function WodUiActionList(skills, actions) {

    WodUiWidget.call(this, 'div')

    this.setStyleProperty('width', '950px')

    this.actions = actions

    var _this = this

    this.modBox = new WodUiWidget('div')
    this.modBox.setStyleProperty('width', '300px')
    this.modBox.setStyleProperty('paddingBottom', '10px')
    this.modBox.setStyleProperty('float', 'right')
    this.appendChild(this.modBox)

    this.list = new WodUiList()
    this.list.table.setStyleProperty('width', '640px')
    this.list.table.setStyleProperty('height', '400px')
    this.list.setSelectionChangeListener(function() {
        _this.actionSelectionChanged()
    })
    this.appendChild(this.list)

    this.list.addButton(
    new WodUiImage('button-up.png', 24, 24, WOD_STR.ActionList.buttons.up),
    function(event) {
        _this.list.moveUp()
        _this.rebuildModel()
    }
    )

    this.list.addButton(
    new WodUiImage('button-toggle.png', 24, 24, WOD_STR.ActionList.buttons.toggle),
    function() {
        var item = _this.list.getSelectedItem()
        if (item) {
            item.toggleEnabled()
        }
    }
    )

    this.list.addButton(
    new WodUiImage('button-down.png', 24, 24, WOD_STR.ActionList.buttons.down),
    function() {
        _this.list.moveDown()
        _this.rebuildModel()
    }
    )

    this.list.addButton(
    new WodUiImage('button-add.png', 24, 24, WOD_STR.ActionList.buttons.add),
    function() {
        _this.addAction(new WodAction())
        _this.rebuildModel()
    }
    )

    this.list.addButton(
    new WodUiImage('button-del.png', 24, 24, WOD_STR.ActionList.buttons.remove),
    function() {
        _this.list.removeItem()

        if (_this.list.getItemCount()==0){
            _this.addAction(new WodAction())
        }

        _this.rebuildModel()
    }
    )

    this.list.addButton(
    new WodUiImage('button-copy.png', 24, 24, WOD_STR.ActionList.buttons.copy),
    function() {


        var src = _this.getSelectedAction()

        if (typeof src != 'undefined') {
            var dst = new WodAction()

            dst.copyFrom(src)
            _this.addAction(dst)
            _this.rebuildModel()
            _this.list.setSelectedIndex( _this.list.getItemCount()-1 )
        }
    }
    )



    //
    // Fertigkeit (Dropdown)
    //

    this.skillHeading = new WodUiHeading(4, WOD_STR.ActionList.skill)
    this.modBox.appendChild(this.skillHeading)

    this.skillDropdown = new WodUiSkillDropdown(skills)
    this.skillDropdown.setStyleProperty('width', '100%')
    this.skillDropdown.setSelectionChangeListener(function() {
        _this.skillSelectionChanged()
    })
    this.modBox.appendChild(this.skillDropdown)

    //
    // Gegenstände (Dropdown(s))
    //

    this.itemHeading = new WodUiHeading(4, WOD_STR.ActionList.item)
    this.modBox.appendChild(this.itemHeading)

    this.itemDropdown = new WodUiItemDropdown()
    this.itemDropdown.setStyleProperty('width', '100%')
    this.itemDropdown.setSelectionChangeListener(function() {
        _this.itemSelectionChanged()
    })
    this.modBox.appendChild(this.itemDropdown)

    var itemGemLabel = new WodUiHeading(4, WOD_STR.Wod.item.socket + ' ')
    this.modBox.appendChild( itemGemLabel )

    var isInline = false
    this.itemGemSelect = new WoDUiGemDropDown( itemGemLabel, isInline )
    this.itemGemSelect.setSelectionChangeListener(function() {
      _this.itemSelectionChanged()
    })

    this.modBox.appendChild( this.itemGemSelect )

    this.ammoHeading = new WodUiHeading(4, WOD_STR.ActionList.ammo)
    this.modBox.appendChild(this.ammoHeading)


    this.ammoDropdowns =  new Object()
    this.ammoGemSelects = new Object()

    for (var itemClassId in THE_ENV.ammoClasses) {

        var dropdown = new WodUiItemDropdown(THE_ENV.ammoClasses[itemClassId], false)
        dropdown.setStyleProperty('width', '100%')
        dropdown.setSelectionChangeListener(function(itemClassId) {
            _this.ammoSelectionChanged(itemClassId)
        }, itemClassId)
        this.ammoDropdowns[itemClassId] = dropdown
        this.modBox.appendChild(dropdown)

        var itemGemLabel = false
        var isInline     = false

        var itemGemSelect = new WoDUiGemDropDown( itemGemLabel, isInline )
        itemGemSelect.setSelectionChangeListener(function( aItemClassId ) {
             _this.ammoSelectionChanged( aItemClassId )
        }, itemClassId )

        this.modBox.appendChild(itemGemSelect)
        this.ammoGemSelects[itemClassId] = itemGemSelect
        this.modBox.appendChild(itemGemSelect)
    }

    //
    // Positionen (Dropdown und Liste)
    //

    this.positionHeading = new WodUiHeading(4, WOD_STR.ActionList.position)
    this.modBox.appendChild(this.positionHeading)

    this.positionDropdown = new WodUiPositionDropdown(wod_createPositions(true, true))
    this.positionDropdown.setStyleProperty('width', '100%')
    this.positionDropdown.setSelectionChangeListener(function() {
        _this.positionSelectionChanged()
    })
    this.modBox.appendChild(this.positionDropdown)

    this.positionsHeading = new WodUiHeading(4, WOD_STR.ActionList.positions)
    this.modBox.appendChild(this.positionsHeading)

    this.customPositionsDropdown = new WodUiDropdown()
    this.customPositionsDropdown.addOption(WOD_POSOPTS_DEFAULT, WOD_STR.ActionList.customPositions.no)
    this.customPositionsDropdown.addOption(WOD_POSOPTS_CUSTOM,  WOD_STR.ActionList.customPositions.yes)
    this.customPositionsDropdown.addOption(WOD_POSOPTS_RAND,    WOD_STR.ActionList.customPositions.rand)


    this.customPositionsDropdown.setStyleProperty('width', '100%')
    this.customPositionsDropdown.setSelectionChangeListener(function() {
        _this.customPositionsSelectionChanged()
    })
    this.modBox.appendChild(this.customPositionsDropdown)

    this.positionList = new WodUiPositionList(wod_createPositions(true))
    this.positionList.setStyleProperty('width', '100%')
    this.positionList.setPositionsChangeListener(function() {
        _this.positionsChanged()
    })
    this.modBox.appendChild(this.positionList)



    this.repeatHeading = new WodUiHeading(4, WOD_STR.ActionList.repeat_hl)
    this.modBox.appendChild(this.repeatHeading)


    this.repeatDropdown = new WodUiDropdown()
    this.repeatDropdown.addOption(WOD_EXEC_DEFAULT,   WOD_STR.ActionList.defaction)
    this.repeatDropdown.addOption(WOD_EXEC_REPEAT,    WOD_STR.ActionList.repeat)
    this.repeatDropdown.addOption(WOD_EXEC_ONCEONLY,  WOD_STR.ActionList.onceonly)
    this.repeatDropdown.addOption(WOD_EXEC_RANDOM,    WOD_STR.ActionList.random)

    this.repeatDropdown.setStyleProperty('width', '100%')
    this.repeatDropdown.setSelectionChangeListener(function() {
        _this.getSelectedAction().repeat = _this.repeatDropdown.getSelectedOption()
        _this.list.getSelectedItem().refresh()
    })
    this.modBox.appendChild(this.repeatDropdown)




    this.refreshModVisibility()

}

WodUiActionList.clone(WodUiWidget)

WodUiActionList.prototype.setActions = function(actions) {
    this.actions = actions
    this.refresh()
}

WodUiActionList.prototype.rebuildModel = function() {
    while (this.actions.length > 0) {
        this.actions.pop()
    }
    var count = this.list.getItemCount()
    for (var i=0; i<count; i++) {
        this.actions.push(this.list.getItem(i).action)
    }
}

/**
* Neue Action der Liste hinzufügen.
* @param action Die Action welche hinzugefügt werden soll. Wenn keine Action
* übergeben wird, dann wird eine neue Action erzeugt.
*/
WodUiActionList.prototype.addAction = function(action) {

    this.list.appendItem(new WodUiActionListItem(action))

}

/**
* Gibt die aktuell angewählt Action zurück.
*/
WodUiActionList.prototype.getSelectedAction = function() {
    var item = this.list.getSelectedItem()
    if (item) {
        return item.action
    } else {
        return null
    }
}

/**
* Diese Methode wird immer aufgerufen, wenn sich die aktuelle Auswahl der
* Liste geändert hat.
*/
WodUiActionList.prototype.actionSelectionChanged = function() {

    this.refreshModVisibility()
}

/**
* Diese Methode wird immer aufgerufen, wenn sich die Auswahl der Fertigkeit
* geändert hat.
*/
WodUiActionList.prototype.skillSelectionChanged = function() {

    var action = this.getSelectedAction()

    if (action.setSkill(this.skillDropdown.getSelectedSkill())) {
        this.refreshModVisibility()
        this.list.getSelectedItem().refresh()

        skill=this.skillDropdown.getSelectedSkill();

        if (typeof skill != 'undefined' && skill.id>0){

            skill.item=null

            var needEmptyAction=true

            for (var i=0; i<this.list.items.length; i++){
                if (typeof this.list.items[i].action == 'undefined'
                    || typeof this.list.items[i].action.skill == 'undefined'){
                    needEmptyAction=false

                    if (typeof this.list.items[i].action !='undefined') {
                       this.list.items[i].action.defaultAmmoIds=null
                       this.list.items[i].action.defaultAmmoGems=null
                    }
                }
            }

            if (needEmptyAction){
                this.addAction(new WodAction())
                this.rebuildModel()
            }
        }

    }

}

/**
* Diese Methode wird aufgerufen, wenn sich die Auswahl des Gegenstandes
* geändert hat.
*/
WodUiActionList.prototype.itemSelectionChanged = function() {

    var action = this.getSelectedAction()
    if (action.setItem(this.itemDropdown.getSelectedItem(), this.itemGemSelect.getSelectedOption())) {
        this.refreshModVisibility()
        this.list.getSelectedItem().refresh()
    }
}

WodUiActionList.prototype.ammoSelectionChanged = function(itemClassId) {

    var action = this.getSelectedAction()

    if ( (action.defaultAmmoIds)
        && (typeof action.defaultAmmoIds[itemClassId] != 'undefined')) {
        action.defaultAmmoIds[itemClassId]=WOD_ITEM_AUTO
        action.defaultAmmoGems[itemClassId]=''
    }

    var newAmmoItem = this.ammoDropdowns[itemClassId].getSelectedItem()

    var ammoItemChanged = newAmmoItem != action.ammo[itemClassId]

    action.ammo[itemClassId]    = newAmmoItem
    action.ammoGem[itemClassId] = ammoItemChanged
                                ? WOD_SOCKET_AUTO
                                : this.ammoGemSelects[itemClassId].getSelectedOption()


    this.refreshModVisibility()
    this.list.getSelectedItem().refresh()
}

/**
* Diese Methode wird immer aufgerufen, wenn sich die Auswahl der Positionen
* geändert hat.
*/
WodUiActionList.prototype.positionSelectionChanged = function() {

    var action = this.getSelectedAction()

    if (action.setPositionId(this.positionDropdown.getSelectedPositionId())) {
        this.list.getSelectedItem().refresh()
    }

}

/**
*
*/
WodUiActionList.prototype.customPositionsSelectionChanged = function() {

    var action = this.getSelectedAction()

    var custom = this.customPositionsDropdown.getSelectedOption()
    if (custom == WOD_POSOPTS_CUSTOM) {

        action.positions = wod_createPositions()

        if ( action.skill.friend ) {
            for (var friendPosId in WOD_CFG.general.friendPositions) {
                for (var friendPosInner in WOD_CFG.general.friendPositions[friendPosId]) {
                    action.positions[friendPosId][friendPosInner] = WOD_CFG.general.friendPositions[friendPosId][friendPosInner]
                }
            }
        } else {
            for (var enemyPosId in WOD_CFG.general.enemyPositions) {
                for (var enemyPosInner in WOD_CFG.general.enemyPositions[enemyPosId]) {
                    action.positions[enemyPosId][enemyPosInner] = WOD_CFG.general.enemyPositions[enemyPosId][enemyPosInner]
                }
            }
        }
    } else if (custom == WOD_POSOPTS_RAND) {
        action.positions = 'rand'
    } else {
        action.positions=null
    }

    this.refreshModVisibility()
    this.list.getSelectedItem().refresh()

}

/**
* Diese Methode wird aufgerufen, wenn sich die Auswahl der Positionen
* geändert hat.
*/
WodUiActionList.prototype.positionsChanged = function() {

    this.list.getSelectedItem().refresh()

}

/**
* Überprüft die Sichtbarkeit der Dropdowns und Listen und setzt die Auswahl
* von diesen abhängig von der aktuell ausgewählten Aktion. Diese Methode
* wird immer aufgerufen, wenn sich irgend etwas an der aktuell ausgewählten
* Aktion ändert oder eine andere Aktion gewählt wird.
*/
WodUiActionList.prototype.refreshModVisibility = function() {

    var action = this.getSelectedAction()
    if (action) {
        this.repeatDropdown.setVisible(true)
        this.repeatDropdown.setSelectedOption(action.repeat)
        this.repeatHeading.setVisible(true)
        this.skillHeading.setVisible(true)
        this.skillDropdown.setVisible(true)
        var skill = action.skill
        if (skill) {
            this.skillDropdown.setSelectedSkill(skill)
            // item dropdown
            if (skill.items) {
                this.itemHeading.setVisible(true)
                this.itemDropdown.setItems(skill.items)
                this.itemDropdown.setVisible(true)
                this.itemDropdown.setSelectedItem(action.item)
            } else {
                this.itemHeading.setVisible(false)
                this.itemDropdown.setVisible(false)
                this.itemGemSelect.setVisible(false)
            }
            // ammo
            this.refreshAmmo()

            // position list
            this.positionDropdown.setSelectedPositionId(action.positionId)

            var showPositionList;

            if (typeof action.positions == 'string' && action.positions == 'rand'){
                this.customPositionsDropdown.setSelectedOption(WOD_POSOPTS_RAND)
                showPositionList=false
            } else if (action.positions != null) {
                this.customPositionsDropdown.setSelectedOption(WOD_POSOPTS_CUSTOM)
                showPositionList=true
            } else {
                this.customPositionsDropdown.setSelectedOption(WOD_POSOPTS_DEFAULT)
                showPositionList=false
            }

            if  (showPositionList){
                this.positionList.setPositions(action.positions)
            }

            switch (skill.positions) {
                case WOD_POSITIONS_FIXED:
                this.positionHeading.setVisible(false)
                this.positionDropdown.setVisible(false)
                this.positionsHeading.setVisible(false)
                this.customPositionsDropdown.setVisible(false)
                this.positionList.setVisible(false)
                break
                case WOD_POSITIONS_ONE:
                this.positionHeading.setVisible(true)
                this.positionDropdown.setVisible(true)
                this.positionDropdown.enableOption(WOD_POSITION_BACK, skill.not_in_back)


                this.positionsHeading.setVisible(false)
                this.customPositionsDropdown.setVisible(false)
                this.positionList.setVisible(false)
                break
                case WOD_POSITIONS_MANY:
                this.positionHeading.setVisible(false)
                this.positionDropdown.setVisible(false)
                this.positionsHeading.setVisible(true)
                this.customPositionsDropdown.setVisible(true)
                this.positionList.setVisible(showPositionList)
                break
            }
        } else {
            this.skillDropdown.setSelectedSkill(null)
            this.itemHeading.setVisible(false)
            this.itemDropdown.setVisible(false)
            this.itemGemSelect.setVisible(false)
            this.refreshAmmo()
            this.positionHeading.setVisible(false)
            this.positionDropdown.setVisible(false)
            this.positionsHeading.setVisible(false)
            this.customPositionsDropdown.setVisible(false)
            this.positionList.setVisible(false)
        }
    } else {
        this.repeatDropdown.setVisible(false)
        this.repeatHeading.setVisible(false)
        this.skillHeading.setVisible(false)
        this.skillDropdown.setVisible(false)
        this.itemHeading.setVisible(false)
        this.itemDropdown.setVisible(false)
        this.itemGemSelect.setVisible(false)
        this.refreshAmmo();
        this.positionHeading.setVisible(false)
        this.positionDropdown.setVisible(false)
        this.positionsHeading.setVisible(false)
        this.customPositionsDropdown.setVisible(false)
        this.positionList.setVisible(false)
    }

    // Dies sollte "theoretisch" dafür sorgen, dass der browser die seite
    // neu layouted. Klappt nicht 100%, aber mit gefloateten modbox gibt es
    // scheinbar bei keinem browser mehr probleme.
    this.setStyleProperty('display', 'block')

}

WodUiActionList.prototype.refreshAmmo = function() {

    var action = this.getSelectedAction()

    if (action) {

        if (action.skill
            && action.item) {

            this.itemGemSelect.updateGemSelect( action.item, action.skill.itemClassId, action.socket )

            if (action.item.ammoClassIds
                && action.item.ammoClassIds.length) {

                this.ammoHeading.setVisible(true)

                for (var itemClassId in this.ammoDropdowns) {

                    var dropdown      = this.ammoDropdowns[itemClassId]
                    var itemgemselect = this.ammoGemSelects[itemClassId]

                    if (action.item.ammoClasses[itemClassId]) {
                        dropdown.setVisible(true)
                        dropdown.setSelectedItem(action.ammo[itemClassId])
                        itemgemselect.updateGemSelect( action.ammo[itemClassId], itemClassId, action.ammoGem[itemClassId] )

                    } else {
                        dropdown.setVisible(false)
                        dropdown.setSelectedItem(null)
                        itemgemselect.setVisible( false )
                    }
                }

                return

            } // if (action.item.ammo)

        } else { // if (action.skill && action.item)
            this.itemGemSelect.setVisible(false)
        }

    } else { // if (action)
        this.itemGemSelect.setVisible(false)
    }

    this.ammoHeading.setVisible(false)


    for (var itemClassId in this.ammoDropdowns) {
        var dropdown = this.ammoDropdowns[itemClassId]
        var itemgemselect = this.ammoGemSelects[itemClassId]

        dropdown.setVisible(false)
        dropdown.setSelectedItem(null)
        itemgemselect.setVisible( false )
    }
}

WodUiActionList.prototype.refresh = function() {
    this.list.removeAllItems()
    for (var i in this.actions) {
        this.addAction(this.actions[i])
    }
    this.refreshModVisibility()
}
