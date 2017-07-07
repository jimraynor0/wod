function WodAction(skill, item, socket, ammo, ammoGem, positionId, positions, repeat, enabled) {

    this.setSkill(skill)
    this.setItem(item, socket)

    this.setAmmo( ammo, ammoGem )
    this.setPositionId(positionId)
    this.setPositions(positions)
    this.enabled   = (typeof enabled != 'undefined') ? enabled   : true

    if (typeof PLAINCONFIG != 'undefined'){
        this.repeat    = (typeof repeat != 'undefined')  ? repeat    : (PLAINCONFIG ? WOD_EXEC_RANDOM : WOD_EXEC_DEFAULT)
    } else {
        this.repeat    = (typeof repeat != 'undefined')  ? repeat    : WOD_EXEC_DEFAULT
    }
}


WodAction.prototype.serialize = function(xs) {

    xs.startElement('action')
    if (this.enabled == false) {
        xs.attribute('enabled', 'false')
    }


    switch (this.repeat){
        case WOD_EXEC_ONCEONLY: xs.attribute('exec', 'once'); break;
        case WOD_EXEC_REPEAT:   xs.attribute('exec', 'repeat'); break;
        case WOD_EXEC_RANDOM:   xs.attribute('exec', 'random'); break;
    }

    if (this.skill
        && this.item
        && this.item.haveSockets()
        && typeof this.socket != 'undefined'
        && this.socket != 'false'
        && this.socket != null
        && this.socket!= WOD_SOCKET_AUTO)
            xs.attribute('socket', this.socket );

    var ammo_serialized = 0

    if (this.skill) {
        this.skill.serialize(xs)
        if (this.item) {

            if (typeof this.item.ignore != 'undefined'
                && this.item.ignore) {
                ammo_serialized = 1

            } else {
                this.item.serialize(xs)

                if (this.item.ammoClasses) {
                    for (var itemClassId in this.item.ammoClasses) {

                        if (isset(this.ammo,itemClassId)) {
                            var ammoItem = this.ammo[itemClassId]
                            var gems     = this.ammoGem[itemClassId]

                            if (ammoItem && ammoItem != WOD_ITEM_AUTO) {
                                xs.startElement('ammo')
                                xs.attribute('item_class_id', itemClassId)
                                xs.attribute('item_template_id', ammoItem.id)
                                xs.attribute('socket', gems)
                                xs.endElement('ammo')
                                ammo_serialized = 1
                            }
                        }
                    }
                }
            }
        }

        if (ammo_serialized==0) {

            for (var itemClassId in this.defaultAmmoIds) {

                var ammoItemId = this.defaultAmmoIds[itemClassId]
                var ammoGem    = this.defaultAmmoGems[itemClassId]

                if (ammoItemId != WOD_ITEM_AUTO) {

                    var gem = this.defaultAmmoGems[itemClassId]

                    xs.startElement('ammo')
                    xs.attribute('item_class_id',    itemClassId)
                    xs.attribute('item_template_id', ammoItemId)
                    xs.attribute('socket',           gem)
                    xs.endElement('ammo')
                }
            }
        }

        switch (this.skill.positions){

            // case WOD_POSITIONS_FIXED: break;
            case WOD_POSITIONS_ONE:
            if (this.positionId) {
                xs.startElement('position')
                xs.attribute('id', this.positionId)
                xs.endElement('position')
            }
            break;
            case WOD_POSITIONS_MANY:
            if (typeof this.positions == 'string'){
                xs.startElement('positions')
                xs.attribute(this.positions, 'true')
                xs.endElement('positions')
            } else if (this.positions) {
                xs.startElement('positions')
                wod_serializePositions(this.positions, xs)
                xs.endElement('positions')
            }
            break;
        }
    }
    xs.endElement('action')
}

WodAction.prototype.copyFrom = function(anotherAction) {

    this.skill  = anotherAction.skill
    this.item   = anotherAction.item
    this.socket = anotherAction.socket

    if (anotherAction.ammo) {
        this.ammo = new Object()
        for (var itemClassId in anotherAction.ammo) {
            this.ammo[itemClassId] = anotherAction.ammo[itemClassId]
        }
    } else {
        this.ammo = null
    }

    if (anotherAction.ammoGem) {
        this.ammoGem = new Object()
        for (var itemClassId in anotherAction.ammoGem) {
            this.ammoGem[itemClassId] = anotherAction.ammoGem[itemClassId]
        }
    } else {
        this.ammoGem = null
    }


    if (anotherAction.defaultAmmoIds) {
        this.defaultAmmoIds = new Object()
        for (var itemClassId in anotherAction.defaultAmmoIds) {
            this.defaultAmmoIds[itemClassId] = anotherAction.defaultAmmoIds[itemClassId]
        }
    } else {
        this.defaultAmmoIds = null
    }


    if (anotherAction.defaultAmmoGems) {
        this.defaultAmmoGems = new Object()
        for (var itemClassId in anotherAction.defaultAmmoGems) {
            this.defaultAmmoGems[itemClassId] = anotherAction.defaultAmmoGems[itemClassId]
        }
    } else {
        this.defaultAmmoGems = null
    }


    this.positionId = anotherAction.positionId

    if( anotherAction.positions == null ) {
        this.positions = null
    } else if (typeof anotherAction.positions == 'string') {
        this.positions = anotherAction.positions
    } else if (typeof anotherAction.positions != 'undefined') {
        this.positions = new Array()
        for (var i in anotherAction.positions) {
            var pos = anotherAction.positions[i]
            this.positions.push(new WodPosition(pos.id, pos.enabled))
        }
    } else {
        this.positions = null
    }
    this.repeat = anotherAction.repeat
    this.enabled = anotherAction.enabled
}

/**
* @return true wenn sich die Fertigkeit geändert hat.
*/
WodAction.prototype.setSkill = function(skill) {
    if (this.skill != skill) {
        this.skill = skill
        if (this.skill) {
            if (this.skill.itemClass) {
                this.setItem(WOD_SKILL_AUTO)
            } else {
                this.setItem(null)
            }
            if (this.skill.positions == WOD_POSITIONS_ONE) {
                this.positionId = WOD_POSITION_AUTO
            } else {
                this.positionId = null
            }
            this.positions = null
        }
        return true
    } else {
        return false
    }
}

WodAction.prototype.setItem = function(item, socket)
{
    var item_changed   = this.item != item
    var socket_changed = (this.socket != socket || typeof this.socket != typeof socket)

    if (item_changed || socket_changed) {

        this.socket = socket;
        this.item = item

        if (this.item) {

            // Prüfe, ob das Item zum Skill passt
            if (this.item.id) {
                var item_class_ok = this.item.isOfClass( this.skill.itemClassId )

                if (! item_class_ok) {
                    this.item = null
                    this.ammo = null
                    this.ammoGem = null

                    return true
                }
            }

            if (this.item.ammoClassIds
                && this.item.ammoClassIds.length) {

                var have_ammo = typeof this.ammo != 'undefined'

                if (item_changed || !have_ammo) {

                    this.ammo = new Object()
                    this.ammoGem = new Object()

                    for (var ammoClass in this.item.ammoClassIds) {
                        this.ammo[ammoClass] = WOD_ITEM_AUTO
                        this.ammoGem[ammoClass] = ''
                    }
                }
            } else {
                this.ammo = null
                this.ammoGem = null
            }
        } else {
            this.ammo = null
            this.ammoGem = null
        }
        return true

    } else {
        return false
    }
}

WodAction.prototype.setAmmo = function( ammo, ammoGem ) {

    if (ammo) {
        this.defaultAmmoIds = new Object()
        for (var itemClassId in ammo) {
            this.defaultAmmoIds[itemClassId] = ammo[itemClassId]
        }
    } else {
        this.defaultAmmoIds = null
    }

    if (ammoGem) {
        this.defaultAmmoGems = new Object()
        for (var itemClassId in ammoGem) {
            this.defaultAmmoGems[itemClassId] = ammoGem[itemClassId]
        }
    } else {
        this.defaultAmmoGems = null
    }


    if (! this.item) {
        this.ammo = null
        this.ammoGem = null
        return
    }
    if (! this.item.ammoClasses) {
        this.ammo = null
        this.ammoGem = null
        return
    }
    if (! ammo) {
        return
    }

    this.ammo = new Object()
    this.ammoGem = new Object()

    // translate <int,int> map to <int,item> map
    for (var itemClassId in this.item.ammoClasses) {

        if (isset(ammo, itemClassId)) {

            var item = ammo[itemClassId]
            if (typeof item == 'undefined') {
                this.ammo[itemClassId] = WOD_ITEM_AUTO
            }
            else if (typeof item == 'number') {
                this.ammo[itemClassId] = new WodItem(item)
            }

            var socket = ammoGem[ itemClassId ]
            this.ammoGem[itemClassId] = socket
        }
    }
}





WodAction.prototype.setPositionId = function(positionId) {

    if (this.positionId != positionId) {
        this.positionId = (typeof positionId=='undefined' || positionId==null? WOD_POSITION_AUTO : positionId)
        return true
    } else {
        return false
    }
}

WodAction.prototype.setPositions = function(positions) {
    this.positions = positions
}
