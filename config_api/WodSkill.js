function WodSkill(id, name, type, positions, itemClassId, itemMandatory, not_in_back, friend ) {

    if (WodSkill.arguments.length == 1) {

        if (THE_ENV.skills[id]) {
            return THE_ENV.skills[id]
        } else {
            this.id = id
            this.name = WOD_STR.Wod.skill.unknown
            this.not_in_back   = false
        }

    } else {

        this.id            = id
        this.name          = name
        this.type          = type
        this.positions     = positions
        this.not_in_back   = not_in_back // certain skills cannot be used behind enemy line
        this.friend        = friend

        if (itemClassId) {
            this.itemClassId = itemClassId
            if (typeof itemMandatory != 'undefined') {
                this.itemMandatory = itemMandatory
            } else {
                this.itemMandatory = true
            }
        } else {
            this.itemClassId = null
            this.itemMandatory = false
        }
    }

    /* Initialized in WodEnvironment, adds list of items that can be used with the skill */
    if (skill.itemClassId) {

        skill.items = new Array()
        if (! skill.itemMandatory) {
            skill.items.push(WOD_ITEM_NONE)
        }
        var tmpitems = this.itemClasses[skill.itemClassId]
        for (var i in tmpitems) {
            skill.items.push(tmpitems[i])
        }

    } else {
        skill.items = null
    }
}

WodSkill.prototype.serialize = function(xs) {
    xs.startElement('skill')
    xs.attribute('id', this.id)
    xs.endElement('skill')
}
