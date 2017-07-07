
function WodUiWidget( tagName, child ) {
    if (tagName) {
        this.element = document.createElement(tagName)
    }
    if (child) {
        this.appendChild(child)
    }
}

WodUiWidget.prototype.getDefaultDisplay = function() {
    return 'inline'
}

WodUiWidget.prototype.setVisible = function(visible) {

    if (visible) {
        this.setStyleProperty('display', this.getDefaultDisplay() )
    } else {
        this.setStyleProperty('display', 'none')
    }
}


/**
*
*/
WodUiWidget.prototype.setClass = function(className) {
    this.element.className = className
}

WodUiWidget.prototype.getClass = function(className) {
    return this.element.className
}

WodUiWidget.prototype.setId = function(id) {
    this.element.id = id
}

WodUiWidget.prototype.getId = function() {
    return this.element.id
}

WodUiWidget.prototype.setStyleProperty = function(name, value) {
    this.element.style[name] = value
    switch (name) {
        case 'float':
        this.element.style['cssFloat'] = value
        this.element.style['styleFloat'] = value
        break
    }
}

WodUiWidget.prototype.getStyleProperty = function(name) {
    return this.element.style[name]
}

WodUiWidget.prototype.setAttribute = function(name, value) {
    this.element[name] = value
    switch (name) {
        case 'type':
        this.element.setAttribute('type', value)
        break
    }
}

WodUiWidget.prototype.getAttribute = function(name) {
    return this.element[name]
}

WodUiWidget.prototype.appendChild = function(childWidget) {
    this.element.appendChild(childWidget.element)
}

WodUiWidget.prototype.removeChild = function(childWidget) {
    this.element.removeChild(childWidget.element)
}

WodUiWidget.prototype.replaceChild = function(childWidgetOld, childWidgetNew) {
    this.element.replaceChild(childWidgetOld.element,childWidgetNew.element)
}

WodUiWidget.prototype.insertChild = function(childWidget, childWidget2) {
    this.element.insertBefore(childWidget.element, childWidget2.element)
}

WodUiWidget.prototype.removeAllChildren = function() {
    while (this.element.childNodes.length>0)
        this.element.removeChild(this.element.childNodes[this.element.childNodes.length-1])
}

WodUiWidget.prototype.setClickListener = function(listener, data) {
    this.element.onclick = function(event) {
        listener(data)
    }
}

WodUiWidget.prototype.setDoubleClickListener = function(listener, data) {
    this.element.ondblclick = function(event) {
        listener(data)
    }
}

WodUiWidget.prototype.setTooltip = function(text) {
    wodToolTip( this.element, text )
}
