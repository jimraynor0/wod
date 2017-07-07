function WodUiActionListItem(action) {

    WodUiListItem.call(this)

    this.label = new WodUiWidget('div')
    this.appendChild(this.label)

    this.labelSkill = new WodUiWidget('div')
    this.labelSkill.setClass('wod-list-item-label-skill')
    this.label.appendChild(this.labelSkill)

    this.labelItem = new WodUiWidget('div')
    this.labelItem.setClass('wod-list-item-label-item')
    this.label.appendChild(this.labelItem)

    this.labelAmmo = new WodUiWidget('div')
    this.labelAmmo.setClass('wod-list-item-label-ammo')
    this.label.appendChild(this.labelAmmo)

    this.labelPositions = new WodUiWidget('div')
    this.labelPositions.setClass('wod-list-item-label-positions')
    this.label.appendChild(this.labelPositions)

    this.setAction(action)
    this.setSelected(false)

    var _this = this
    this.setDoubleClickListener(function() {
        _this.toggleEnabled()
        _this.refresh()
    })

}

WodUiActionListItem.clone(WodUiListItem)

WodUiActionListItem.prototype.setAction = function(action) {
    this.action = action
    this.refresh()
}

WodUiActionListItem.prototype.refresh = function() {

    this.labelSkill.removeAllChildren()
    this.labelItem.removeAllChildren()
    this.labelAmmo.removeAllChildren()
    this.labelPositions.removeAllChildren()

    if (this.action.enabled) {
        this.label.setClass('')
    } else {
        this.label.setClass('disabled')
    }

    var skill = this.action.skill;

    if (skill) {

        var labelSkillString = skill.name

        switch (this.action.repeat) {
            case WOD_EXEC_ONCEONLY: labelSkillString+=' ' + WOD_STR.ActionListItem.onceonly; break;
            case WOD_EXEC_REPEAT:   labelSkillString+=' ' + WOD_STR.ActionListItem.repeat; break;
            case WOD_EXEC_RANDOM:   labelSkillString+=' ' + WOD_STR.ActionListItem.random; break;
        }

        this.labelSkill.appendChild(new WodUiText(labelSkillString))

        var item = this.action.item;
        if (item) {
            if (item != WOD_ITEM_AUTO) {
                itemobj=new WodUiSpan(item.name + ' ')
                if (!item.equipped) {
                    itemobj.setClass('warn')
                }
                this.labelItem.appendChild(itemobj)


                socket = this.action.socket
                socket_equipped = is_in_array( socket, item.equipped_sockets )

                if (typeof socket != 'undefined'
                    && socket != ''
                    && socket != WOD_SOCKET_AUTO) {

                    if (!socket_equipped) {
                        itemobj.setClass('warn')
                        obj = new WodUiLabel('!!')
                        obj.setClass('warn')
                        this.labelItem.appendChild(obj)
                    }

                    this.labelItem.appendChild( new WodUiGemImage(socket) )

                    if (!socket_equipped) {
                        itemobj.setClass('warn')
                        obj = new WodUiLabel('!!')
                        obj.setClass('warn')
                        this.labelItem.appendChild(obj)
                    }

                }
            }
        }

        var ammo = this.action.ammo;
        if (ammo) {
            var c = 0
            for (var i in ammo) {
                var ammoItem = ammo[i]
                var socket   = this.action.ammoGem[i]

                if (ammoItem != WOD_ITEM_AUTO) {
                    c += 1
                    if (c > 1) {
                        this.labelAmmo.appendChild(new WodUiText(', '))
                    }
                    var itemObj = new WodUiSpan(ammoItem.name)
                    if (!ammoItem.equipped) {
                        itemObj.setClass('warn')
                    }
                    this.labelAmmo.appendChild(itemObj)


                    socket_equipped = is_in_array( socket, ammoItem.equipped_sockets )

                    if (typeof socket != 'undefined'
                        && socket != ''
                        && socket != WOD_SOCKET_AUTO) {

                       var obj = new WodUiSpan(' ')
                       this.labelAmmo.appendChild(obj)

                        if (!socket_equipped) {
                            itemObj.setClass('warn')
                            var obj = new WodUiLabel('!!')
                            obj.setClass('warn')
                            this.labelAmmo.appendChild(obj)
                        }

                        this.labelAmmo.appendChild( new WodUiGemImage(socket) )

                        if (!socket_equipped) {
                           var obj = new WodUiLabel('!!')
                            obj.setClass('warn')
                            this.labelAmmo.appendChild(obj)
                        }

                    }


                }
            }
        }

        switch (skill.positions) {

            case WOD_POSITIONS_FIXED:
            break

            case WOD_POSITIONS_ONE:
            if ( (typeof this.action.positionId != 'undefined') && this.action.positionId != WOD_POSITION_AUTO) {
                this.labelPositions.appendChild(new WodUiText(WOD_STR.position[this.action.positionId]))
            }
            break;

            case WOD_POSITIONS_MANY:
            var positions = this.action.positions
            if (typeof positions == 'string'){
                this.labelPositions.appendChild(new WodUiText('('
                + WOD_STR.ActionList.customPositions[positions] + ')'))
            } else if (positions) {
                var posCount = 0
                for (var i in positions) {
                    var position = positions[i]
                    if (isValidPosition(position.id) && position.enabled) {
                        posCount += 1
                        if (posCount > 1) {
                            this.labelPositions.appendChild(new WodUiText(', '))
                        }
                        this.labelPositions.appendChild(new WodUiText(position.getName()))
                    }
                }
            }
            break

        } // switch (skill.positions)

    } else {
        this.labelSkill.appendChild(new WodUiText(WOD_STR.ActionListItem.unconfigured))
    }

}

WodUiActionListItem.prototype.setEnabled = function(enabled) {
    if (this.action.enabled != enabled) {
        this.action.enabled = enabled
        this.refresh()
    }
}

WodUiActionListItem.prototype.isEnabled = function() {
    return this.action.enabled
}

WodUiActionListItem.prototype.toggleEnabled = function() {
    this.setEnabled(! this.isEnabled())
}
