
function WodUiPositionDropdown(positions, selectedPosition) {

    WodUiDropdown.call(this)
    for (var i in positions) {
        var position = positions[i]
        if (isValidPosition(position.id))
        this.addOption(position.id, position.getName())
    }

    if (selectedPosition) {
        this.setSelectedPositionId(selectedPosition)
    }

    this.setVisible(true)

}

WodUiPositionDropdown.clone(WodUiDropdown)

WodUiPositionDropdown.prototype.getSelectedPositionId = function() {
    return this.getSelectedOption()
}

WodUiPositionDropdown.prototype.setSelectedPositionId = function(position) {
    this.setSelectedOption(position)
}
