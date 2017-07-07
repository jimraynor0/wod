/* base class of list select widget */
function WodUiList() {

    WodUiWidget.call(this, 'div')

    this.setClass('wod-list')

    this.table = new WodUiWidget('table')
    this.table.setClass('wod-list-table')
    this.table.setStyleProperty('width', '100%')
    this.appendChild(this.table)

    this.tbody = new WodUiWidget('tbody')
    this.table.appendChild(this.tbody)

    this.tr = new WodUiWidget('tr')
    this.tbody.appendChild(this.tr)

    this.listTd = new WodUiWidget('td')
    this.listTd.setClass('wod-list-items')
    this.tr.appendChild(this.listTd)

    this.buttonTd = new WodUiWidget('td')
    this.buttonTd.setClass('wod-list-buttons')
    this.tr.appendChild(this.buttonTd)

    this.items = new Array()
    this.selectedIndex = -1

}

WodUiList.clone(WodUiWidget)

/**
*
*/
WodUiList.prototype.appendItem = function(item) {
    this.insertItem(item)
}

/**
*
*/
WodUiList.prototype.prependItem = function(item) {
    this.insertItem(item, 0)
}

/**
*
*/
WodUiList.prototype.insertItem = function(item, index) {
    if (typeof index == 'undefined') {
        this.items.push(item)
        this.listTd.appendChild(item)
        item.setList(this)
    } else if (typeof index == 'number') {

        assert( Math.round(index) == index,
        'WodUiList.insertItem(widget,index), IllegalArgumentException: Non integer value for index')

        if (index < 0) {
            this.listTd.insertItem(item, 0)
        } else if (index >= this.items.length) {
            this.insertItem(item)
        } else {
            this.listTd.insertChild(item, this.items[index])
            this.items.splice(index, 0, item)
            item.setList(this)
        }
    } else {
        assert(false, 'WodUiList.insertItem(widget,index), IllegalArgumentException: Non integer value for index')
    }
}

/**
*
*/
WodUiList.prototype.removeItem = function(index) {
    if (index) {
        assert(index >= 0,'WodUiList.removeItem(index), IndexOutOfBoundsException: index < 0')
        assert(index < this.items.length,'WodUiList.removeItem(index), IndexOutOfBoundsException: index >= itemCount')
    } else {
        index = this.selectedIndex
    }

    if (index >= 0) {

        // Element im DOM entfernen.
        var item = this.items[index]
        this.listTd.removeChild(item)
        this.items.splice(index, 1)

        if (this.items.length == 0) {

            this.selectedIndex = -1
            this.fireSelectionChanged()

        } else {

            if (this.selectedIndex >= index) {
                if (this.selectedIndex == this.items.length) {
                    this.selectedIndex = -1
                    this.setSelectedIndex(this.items.length-1)
                } else {
                    var tmpIndex = this.selectedIndex
                    this.selectedIndex = -1
                    this.setSelectedIndex(tmpIndex);
                }
            }

        }

    }
}

/**
*
*/
WodUiList.prototype.moveUp = function(index) {

    if (index) {
        assert(index >= 0, 'WodUiList.moveUp(index), IndexOutOfBoundsException: index < 0')
        assert(index < this.items.length,'WodUiList.moveUp(index), IndexOutOfBoundsException: index >= itemCount')
    } else {
        index = this.selectedIndex
    }

    if (index > 0 && this.items.length > 1) {

        // Elemente im DOM tauschen.
        var aboveItem = this.items[this.selectedIndex-1]
        var selectedItem = this.items[this.selectedIndex]
        this.listTd.removeChild(selectedItem)
        this.listTd.insertChild(selectedItem, aboveItem)

        // Elemente im Items Array tauschen.
        this.items.splice(
        this.selectedIndex-1, 2,
        this.items[this.selectedIndex],
        this.items[this.selectedIndex-1]
        );

        this.setSelectedIndex(this.selectedIndex-1)

    }

}

/**
*
*/
WodUiList.prototype.removeAllItems = function() {
    this.listTd.removeAllChildren()
    for (var i in this.items) {
        var item = this.items[i]
        item.setSelected(false)
    }
    this.items = new Array()
    this.selectedIndex = -1
}

/**
*
*/
WodUiList.prototype.moveDown = function(index) {

    if (index) {
        assert(index >= 0, 'WodUiList.moveDown(index), IndexOutOfBoundsException: index < 0')
        assert(index < this.items.length, 'WodUiList.moveDown(index), IndexOutOfBoundsException: index >= itemCount')
    } else {
        index = this.selectedIndex
    }

    if (index >= 0 && index < this.items.length-1 && this.items.length > 1) {

        // Elemente im DOM tauschen.
        var selectedItem = this.items[this.selectedIndex]
        var belowItem = this.items[this.selectedIndex+1]
        this.listTd.removeChild(belowItem)
        this.listTd.insertChild(belowItem, selectedItem)

        // Elemente im Items Array tauschen.
        this.items.splice(
        this.selectedIndex, 2,
        this.items[this.selectedIndex+1],
        this.items[this.selectedIndex]
        )

        this.setSelectedIndex(this.selectedIndex+1)

    }

}

WodUiList.prototype.setSelectedIndex = function(index) {
    assert(index >= 0,' WodUiList.setSelectedIndex(index), IndexOutOfBoundsException: index < 0')
    assert(index < this.items.length, 'WodUiList.setSelectedIndex(index), IndexOutOfBoundsException: index >= itemCount')

    if (this.selectedIndex != -1) {
        this.items[this.selectedIndex].setSelected(false)
    }
    this.selectedIndex = index
    if (this.selectedIndex != -1) {
        this.items[this.selectedIndex].setSelected(true)
    }
    this.fireSelectionChanged();
}

WodUiList.prototype.clearSelection = function(index) {
    if (this.selectedIndex != -1) {
        this.items[this.selectedIndex].setSelected(false)
    }
    this.selectedIndex = -1
}

WodUiList.prototype.getSelectedIndex = function() {
    return this.selectedIndex
}

WodUiList.prototype.getItemCount = function() {
    return this.items.length
}

WodUiList.prototype.getItemIndex = function(item) {
    var i
    for (var i=0; i<this.items.length; i++) {
        if (this.items[i] == item) {
            return i
        }
    }
    return -1
}

WodUiList.prototype.setSelectedItem = function(item) {
    index = this.getItemIndex(item)
    if (index != -1) {
        this.setSelectedIndex(index)
    }
}

WodUiList.prototype.getSelectedItem = function() {
    if (this.selectedIndex == -1) {
        return null
    } else {
        return this.items[this.selectedIndex]
    }
}

WodUiList.prototype.getItem = function(index) {
    assert(index >= 0, 'WodUiList.getItem(index), IndexOutOfBoundsException: index < 0')
    assert(index < this.items.length, 'WodUiList.getItem(index), IndexOutOfBoundsException: index >= itemCount')

    return this.items[index]
}

WodUiList.prototype.setSelectionChangeListener = function(listener) {
    this.selectionChangeListener = listener
}

WodUiList.prototype.fireSelectionChanged = function() {
    if (this.selectionChangeListener) {
        this.selectionChangeListener()
    }
}

WodUiList.prototype.addButton = function(buttonWidget, clickListener) {
    this.buttonTd.appendChild(buttonWidget)
    buttonWidget.setClickListener(clickListener)
}

WodUiList.prototype.getDefaultDisplay = function() {
    return 'block'
}


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
