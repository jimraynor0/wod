function WodUiDropdown() {

    WodUiWidget.call(this, 'select')
    this.element.size = 1

    this.options = new Array()

}

WodUiDropdown.clone(WodUiWidget)

WodUiDropdown.prototype.addOption = function(userObject, name) {

    var option = new WodUiWidget('option')

    option.appendChild(new WodUiText(name))
    option.userObject = userObject

    this.options.push(option)
    this.appendChild(option)

    this.origOpts = this.options
    this.hiddenOpts = new Array()
}

WodUiDropdown.prototype.removeAllOptions = function() {

    this.options = new Array()
    this.removeAllChildren()

}

WodUiDropdown.prototype.enableOption = function(userObject, enable) {

    this.hiddenOpts[ userObject ] = enable

    this.options = new Array()
    this.removeAllChildren()

    for (var i=0; i<this.origOpts.length; i+=1) {
        var option = this.origOpts[i]

        if (typeof this.hiddenOpts[ option.userObject ] == 'undefined'
            || this.hiddenOpts[ option.userObject ] == false) {
            this.options.push(option)
            this.appendChild(option)
        }

    }
}


WodUiDropdown.prototype.getSelectedOption = function() {

    return this.options[this.element.selectedIndex].userObject

}

WodUiDropdown.prototype.setSelectedOption = function(userObject) {

    if (! userObject) {
        this.element.selectedIndex = 0
        return true
    }

    for (var i=0; i<this.options.length; i+=1) {
        var option = this.options[i]
        if (option.userObject == userObject) {
            this.element.selectedIndex = i
            this.setClass(option.getClass())
            return true
        }
    }
    return false

}

WodUiDropdown.prototype.setSelectionChangeListener = function(listener, data) {
    this.element.onchange = function() {
        listener(data)
    }

}
