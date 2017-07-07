function WodUiSkillItemDropdown(skills, action) {

    WodUiWidget.call(this, 'span')

    this.setClass('orders_top_row')

    var _this = this

    this.skillDropdown = new WodUiSkillDropdown(skills)
    this.skillDropdown.setSelectionChangeListener(function() {
        _this.skillSelectionChanged()
    })
    this.appendChild(this.skillDropdown)

    this.itemDropdown = new WodUiItemDropdown()
    this.itemDropdown.setSelectionChangeListener(function() {
        _this.itemSelectionChanged()
    })
    this.appendChild(this.itemDropdown)
    this.itemDropdown.setVisible(false)

    var itemGemLabel = false // new WodUiLabel( ' ' + WOD_STR.Wod.item.socket + ' ')
    // this.appendChild( itemGemLabel )

    var isInline = true
    this.itemGemSelect = new WoDUiGemDropDown( itemGemLabel, isInline )
    this.itemGemSelect.setSelectionChangeListener(function() {
         _this.itemSelectionChanged()
    })

    this.appendChild( this.itemGemSelect )

    this.ammoDropdowns  = new Object()
    this.ammoGemSelects = new Object()

    for (var itemClassId in THE_ENV.ammoClasses) {

        var dropdown = new WodUiItemDropdown(THE_ENV.ammoClasses[itemClassId], false)

        dropdown.setSelectionChangeListener(function(itemClassId) {
            _this.ammoSelectionChanged( itemClassId )
        }, itemClassId)
        dropdown.setVisible(false)
        this.ammoDropdowns[itemClassId] = dropdown
        this.appendChild(dropdown)

        var itemGemLabel = false // new WodUiLabel( ' ' + WOD_STR.Wod.item.socket + ' ')
        var isInline     = true

        var itemGemSelect = new WoDUiGemDropDown( itemGemLabel, isInline )
        itemGemSelect.setSelectionChangeListener(function() {
             _this.ammoSelectionChanged( itemClassId )
        })
        this.ammoGemSelects[itemClassId] = itemGemSelect

        // this.appendChild( itemGemLabel )
        this.appendChild(itemGemSelect)
    }

    if (action) {
        this.setAction(action)
    }
}

WodUiSkillItemDropdown.clone(WodUiWidget)

WodUiSkillItemDropdown.prototype.setAction = function(action) {
    this.action = action
    if (action) {
        this.refresh()
    }
    this.refreshAmmo()
}

WodUiSkillItemDropdown.prototype.ammoSelectionChanged = function (itemClassId) {

    if (this.action) {

        var item = this.ammoDropdowns[itemClassId].getSelectedItem()
        var gems = this.ammoGemSelects[itemClassId].getSelectedOption()

        this.action.ammo[itemClassId]     = item
        this.action.ammoGem[itemClassId]  = gems

        this.ammoGemSelects[itemClassId].updateGemSelect( item, this.action.skill.itemClassId, gems )

    } else {
        this.ammoDropdowns[itemClassId].setVisible( false )
        this.ammoGemSelects[itemClassId].setVisible( false )
    }
}

WodUiSkillItemDropdown.prototype.refresh = function() {
    this.skillDropdown.setSelectedSkill(this.action.skill)
    var skill = this.action.skill

    if (skill) {
        if (skill.items) {
            this.itemDropdown.setItems(skill.items, this.action.item)
            this.itemDropdown.setSelectedItem(this.action.item)
            this.itemDropdown.setVisible(true)

            this.itemGemSelect.updateGemSelect( this.action.item, this.action.skill.itemClassId, this.action.socket )

            this.refreshAmmo()
            return
        }
    }
    this.itemDropdown.setVisible(false)
    this.itemDropdown.setSelectedItem(WOD_ITEM_AUTO)

    this.itemGemSelect.setVisible(false)

    this.refreshAmmo()
}

WodUiSkillItemDropdown.prototype.skillSelectionChanged = function() {
    this.action.setSkill(this.skillDropdown.getSelectedSkill())
    this.refresh()
}

WodUiSkillItemDropdown.prototype.refreshAmmo = function() {

    for (var itemClassId in THE_ENV.ammoClasses) {
        if (typeof this.ammoDropdowns[itemClassId] != 'undefined')
            this.ammoDropdowns[itemClassId].setVisible(false)
        if (typeof this.ammoGemSelects[itemClassId] != 'undefined')
            this.ammoGemSelects[itemClassId].setVisible(false)
    }

    if (this.action
        && this.action.skill
        && this.action.item
        && this.action.item.ammoClasses) {

        for (var itemClassId in THE_ENV.ammoClasses) {

            for (var ammoClassId in this.action.item.ammoClasses) {

                if (ammoClassId==itemClassId) {

                    this.ammoDropdowns[itemClassId].setVisible(true)

                    var ammoItem = this.action.ammo[itemClassId]
                    var ammoItemOk = typeof ammoItem != 'undefined' && ammoItem != null

                    if (!ammoItemOk) {

                        ammoItem   = this.ammoDropdowns[itemClassId].getSelectedItem()
                        ammoItemOk = ammoItem.isOfClass( itemClassId )
                    }

                    if (ammoItemOk) {
                        this.ammoDropdowns[itemClassId].setSelectedItem( ammoItem )
                        this.ammoGemSelects[itemClassId].updateGemSelect( ammoItem, ammoClassId, this.action.ammoGem[itemClassId])
                    } else {
                        this.ammoDropdowns[itemClassId].setSelectedItem( WOD_ITEM_AUTO )
                        this.ammoGemSelects[itemClassId].updateGemSelect( WOD_ITEM_AUTO, false, WOD_SOCKET_AUTO )
                    }
                }
            }
        }
    }
}

WodUiSkillItemDropdown.prototype.itemSelectionChanged = function() {

    this.action.setItem(this.itemDropdown.getSelectedItem(), this.itemGemSelect.getSelectedOption())
    this.refreshAmmo()

    this.itemGemSelect.updateGemSelect( this.action.item, this.action.skill.itemClassId, this.action.socket )
}
