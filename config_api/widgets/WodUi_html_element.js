
WodUiLabel.clone(WodUiWidget)
function WodUiLabel(label) {

    WodUiWidget.call(this, 'span')

    this.label = new WodUiWidget('label')
    this.appendChild(this.label)
    this.label.appendChild( new WodUiText(label) )
}

WodUiCheckbox.clone(WodUiWidget)
function WodUiCheckbox( checked) {

    WodUiWidget.call(this, 'span')

    this.input = new WodUiWidget('input')
    this.input.setAttribute('type', 'checkbox')
    this.appendChild(this.input)

    if (typeof checked != 'undefined') {
        this.setChecked(checked)
    }

}


/* ---------------------------- checkbox ---------------------------- */

WodUiCheckbox.clone(WodUiWidget)

WodUiCheckbox.prototype.setChecked = function(checked) {

    this.input.element.checked = checked

}

WodUiCheckbox.prototype.isChecked = function() {

    return this.input.element.checked

}

WodUiCheckbox.prototype.setChangeListener = function(listener) {

    this.element.onchange = listener
    this.element.onclick = listener

}

function WodUiHeading(level, text) {

    WodUiWidget.call(this, "h" + level)
    this.appendChild(new WodUiText(text))

}

WodUiHeading.clone(WodUiWidget)

WodUiHeading.prototype.getDefaultDisplay = function() {
    return 'block'
}


function WodUiText(text) {

    this.element = document.createTextNode(text)
}



/**
* Wrapper für eine SpanNode.
* @author Christian Neise
*/
function WodUiSpan(text) {
    WodUiWidget.call(this, "span")
    this.appendChild(new WodUiText(text))
}
WodUiSpan.clone(WodUiWidget)


function WodUiLink(label, url) {

    WodUiWidget.call(this)

    this.element = document.createElement('a')
    this.element.setAttribute('href',url);
    this.element.setAttribute('target','_blank');
    this.element.appendChild(document.createTextNode(label));
}

WodUiLink.clone(WodUiWidget)


/**
* Erzeugt ein neues Image Objekt.
* @param url Die URL unter welcher die Grafik f?r das Image zu erreichen ist.
* @param width Die Breite der Image Grafik
* @param height Die H?he der Image Grafik
* @param tooltipText Ein kurzer Beschreibungstext des Images welcher in Form eines
*        Tooltips angezeigt wird.
* @param type Untervzerzeichnis unterhalb '.../icons/': 'orders' oder 'gems'
*/
function WodUiImage(file, width, height, tooltipText, type) {

    assert(PFAD_BILDER!='', 'Settings not initialized')

    WodUiWidget.call(this)

    this.element = document.createElement('img')

    if (type == 'gems')
        url = LAYOUTCSS + 'icons/' + GAMETYPE + '/gems/' + file
    else if (type)
        url = PFAD_BILDER + 'images/icons/' + type + '/' + file
    else
        url = PFAD_BILDER + 'images/icons/orders/' + file

    this.setAttribute('src', url)
    this.setAttribute('width', width)
    this.setAttribute('height', height)

    if (typeof tooltipText!='undefined'
        && tooltipText!='') {
        this.setAttribute('title', tooltipText)
        this.setAttribute('alt', tooltipText)
    }
}
WodUiImage.clone(WodUiWidget)


function WodUiGemImage( gems ) {

    WodUiWidget.call(this)
    this.element = document.createElement('span')

    for (var j = 0; j < gems.length; j++)
    {
        var gemchar = gems.charAt(j)
        var gemicon = new WodUiImage('gem_' + gemchar + '.png' ,17,17,'','gems');

        gemicon.element.title = gemName['gem_' + gemchar];
        this.appendChild(gemicon);
    }

    // this.element = document.createElement('img')
    // url = PFAD_AJAX + gemicon.php?gems=' + gems
    // this.setAttribute('src', url)
}
WodUiGemImage.clone(WodUiWidget)


function WodUiInput(type, value) {

    WodUiWidget.call(this, 'input')

    if (typeof type != 'undefined') {
        this.setAttribute('type', type)
    }

    if (typeof value != 'undefined') {
        this.setValue(value)
    }

}

WodUiInput.clone(WodUiWidget)

WodUiInput.prototype.setValue = function(value) {
    this.setAttribute('value', value)
}

WodUiInput.prototype.getValue = function(value) {
    return this.getAttribute('value')
}

WodUiInput.prototype.setName = function(name) {
    this.setAttribute('name', name)
}

WodUiInput.prototype.setChangeListener = function(listener) {
    this.element.onchange = listener
}

function WodUiButton(caption) {

    WodUiInput.call(this, 'button', caption)

}

WodUiButton.clone(WodUiInput)



function WodUiNumericInput(value) {

    WodUiInput.call(this, 'text', value)

    this.setClass('numeric')

    this.element.onkeypress=checkNumericKey
}



WodUiNumericInput.clone(WodUiInput)
