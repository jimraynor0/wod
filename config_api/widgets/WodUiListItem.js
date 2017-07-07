
function WodUiListItem() {

    WodUiWidget.call(this, 'div')

    this.setSelected(false)

}

WodUiListItem.clone(WodUiWidget)

WodUiListItem.prototype.setList = function(list) {
    this.list = list
    var _this = this
    this.setClickListener(function() {
        _this.list.setSelectedItem(_this)
    })
}

WodUiListItem.prototype.setSelected = function(selected) {
    this.selected = selected
    if (selected) {
        this.setClass('wod-list-item-selected')
    } else {
        this.setClass('wod-list-item')
    }
}

WodUiListItem.prototype.isSelected = function() {
    return this.selected
}
