/* creates a position list input widget */

function WodUiPositionList(positions) {

    WodUiList.call(this)

    this.setPositions(positions)

    var _this = this

    this.addButton(
    new WodUiImage('button-up.png', 24, 24, WOD_STR.PositionList.up),
    function() {
        var item = _this.getSelectedItem()
        if (item) {
            _this.moveUp()
            _this.rebuildPositions()
            _this.firePositionsChangeEvent()
        }
    }
    )

    this.addButton(
    new WodUiImage('button-toggle.png', 24, 24, WOD_STR.PositionList.toggle),
    function() {
        var item = _this.getSelectedItem()
        if (item) {
            _this.rebuildPositions()
            item.toggleEnabled()

            have_enabled=false;
            for (var i=0; i<_this.getItemCount() && !have_enabled; i++){
                pos=_this.getItem(i)
                if (pos.isEnabled())
                have_enabled=true
            }

            if (!have_enabled){
                if (_this.getSelectedIndex()>0)
                pos=_this.getItem( _this.getSelectedIndex() - 1)
                else
                pos=_this.getItem( 1 )
                pos.setEnabled(true)
            }

            _this.firePositionsChangeEvent()
        }
    }
    )

    this.addButton(
    new WodUiImage('button-down.png', 24, 24, WOD_STR.PositionList.down),
    function() {
        var item = _this.getSelectedItem()
        if (item) {
            _this.moveDown()
            _this.rebuildPositions()
            _this.firePositionsChangeEvent()
        }
    }
    )

}

WodUiPositionList.clone(WodUiList)

WodUiPositionList.prototype.firePositionsChangeEvent = function() {
    if (this.positionsChangeListener) {
        this.positionsChangeListener()
    }
}

WodUiPositionList.prototype.setPositionsChangeListener = function(listener) {
    this.positionsChangeListener = listener
}

WodUiPositionList.prototype.setPositions = function(positions) {
    this.positionMap = new Object()

    for (var i in positions) {
        var position = positions[i]
        if (isValidPosition(position.id))
        this.positionMap[position.id] = new WodUiPositionListItem(this, position)
    }
    this.positions = positions
    this.refresh()
}

WodUiPositionList.prototype.refresh = function() {
    this.removeAllItems()
    if (! this.positions) {
        return
    }
    for (var i in this.positions) {
        var position = this.positions[i]

        if (isValidPosition(position.id)) {
            var item = this.positionMap[position.id]
            item.setPosition(position)
            this.appendItem(item)
        }
    }
}

WodUiPositionList.prototype.rebuildPositions = function() {
    var count = this.getItemCount()
    for (var i=0; i<count; i+=1) {
        var item = this.getItem(i)
        this.positions[i] = item.position
    }
}
