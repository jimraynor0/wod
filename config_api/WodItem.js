function WodItem(id, name, classes, ammoClassIds, equipped, equipped_sockets, unequipped_sockets) {

    if (WodItem.arguments.length == 1) {

        if (THE_ENV.items[id]) {
            return THE_ENV.items[id]

        } else {
            this.id = id
            this.name = WOD_STR.Wod.item.unknown
            this.equipped = false
            this.classes  = classes
            this.ammoClassIds = ammoClassIds
            this.equipped_sockets = false
        }
    } else {
        this.id           = id
        this.name         = (equipped?'' : '!! ') + name
        this.classes      = classes
        this.ammoClassIds = ammoClassIds
        this.equipped     = equipped
        this.equipped_sockets  = equipped_sockets
        this.unequipped_sockets  = unequipped_sockets
    }

    /* Initiated in WodEnvironment, maps classId to a list of items in that class */
    item.ammoClasses[itemClassId] = itemClassList
}

WodItem.prototype.isOfClass = function( itemClassId )  {

    for (var i in this.classes)
        if (this.classes[i] == itemClassId)
            return true
    return false
}

WodItem.prototype.haveSockets = function()  {

    if (typeof this.equipped_sockets != 'undefined')
        if (this.equipped_sockets.length)
            return true

    if (typeof this.unequipped_sockets != 'undefined')
        if (this.unequipped_sockets.length)
            return true

    return false
}

WodItem.prototype.serialize = function(xs) {

    if (typeof this.ignore != 'undefined'
        && this.ignore) {
        return
    }

    xs.startElement('item')
    switch (this) {
        case WOD_ITEM_AUTO:
        xs.attribute('auto', 'true')
        break
        case WOD_ITEM_NONE:
        xs.attribute('none', 'true')
        break
        default:
        xs.attribute('template_id', this.id)
        break
    }

    xs.endElement('item')

}
