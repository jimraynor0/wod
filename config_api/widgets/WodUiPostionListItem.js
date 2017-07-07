
function WodUiPositionListItem(positionList, position) {

    WodUiListItem.call(this)

    this.positionList = positionList

    this.icon = new WodUiImage(position.id + ".png", 24, 24, position.getName())
    this.appendChild(this.icon)

    this.label = new WodUiWidget('span')
    this.appendChild(this.label)

    this.label.appendChild(new WodUiText(position.getName()))

    this.setEnabled(true)

    var _this = this
    this.setDoubleClickListener(function() {
        _this.toggleEnabled()
        _this.positionList.firePositionsChangeEvent()
    })

}

WodUiPositionListItem.clone(WodUiListItem)

WodUiPositionListItem.prototype.setPosition = function(position) {
    this.position = position
    this.refresh()
}

WodUiPositionListItem.prototype.getPosition = function() {
    return this.position
}

WodUiPositionListItem.prototype.setEnabled = function(enabled) {
    if (! this.position) {
        return
    }
    if (this.position.enabled != enabled) {
        this.position.enabled = enabled
        this.refresh()
    }
}

WodUiPositionListItem.prototype.refresh = function() {
    if (this.position.enabled) {
        this.label.setClass('')
    } else {
        this.label.setClass('disabled')
    }
}

WodUiPositionListItem.prototype.isEnabled = function() {
    if (! this.position) {
        return false
    }
    return this.position.enabled
}

WodUiPositionListItem.prototype.toggleEnabled = function() {
    if (! this.position) {
        return
    }
    this.setEnabled(! this.isEnabled())
}
