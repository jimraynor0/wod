function WodPosition(id, enabled) {
    this.id = id
    this.enabled = (typeof enabled != 'undefined') ? enabled : true
}

WodPosition.prototype.getName = function() {
    return WOD_STR.position[this.id]
}

/* creates a list of positions */
function wod_createPositions(includeAuto, includeBack) {
    var positions = new Array()
    if (includeAuto == true) {
        positions.push(new WodPosition(WOD_POSITION_AUTO))
    }

    var posAvail = (FeatureHaveAllPositions()?WOD_POSITION_FULL:WOD_POSITION_RESTRICTED)

    for (var i=0; i<posAvail.length; i++) {
        if (posAvail[i]!=WOD_POSITION_BACK
        || typeof includeBack == 'undefined'
        || includeBack == true) {
            positions.push(new WodPosition(posAvail[i]))
        }
    }

    if (includeAuto == true) {
        positions.push(new WodPosition(WOD_POSITION_RAND))
    }
    return positions
}
