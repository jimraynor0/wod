
function WodUiItemDropdown(items) {

    WodUiDropdown.call(this)

    if (!items) {
        items = new Array()
    }

    this.setItems(items)
    this.setVisible(true)
}

WodUiItemDropdown.clone(WodUiDropdown)

WodUiItemDropdown.prototype.removeAllItems = function() {

    this.removeAllOptions()
    this.addItem(WOD_ITEM_AUTO)
}

WodUiItemDropdown.prototype.addItem = function(item) {
    this.addOption(item, item.name )
}

WodUiItemDropdown.prototype.setItems = function(items, neededItem) {

    this.removeAllItems()

    if (neededItem && neededItem.id > 0)
        for (var i in items) {
            var item = items[i]

            if (neededItem && item.id == neededItem.id)
                neededItem = false
        }

    if (neededItem && neededItem.id > 0)
        this.addItem(neededItem)

    for (var i in items) {
        var item = items[i]
        this.addItem(item)
    }
}

WodUiItemDropdown.prototype.getSelectedItem = function() {
    return this.getSelectedOption()
}

WodUiItemDropdown.prototype.setSelectedItem = function(item) {
    this.setSelectedOption(item)
}
