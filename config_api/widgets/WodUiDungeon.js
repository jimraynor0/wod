function WodUiDungeon(dungeon) {

    WodUiWidget.call(this, 'div')

    this.cfg = dungeon

    // this.appendChild(new WodUiHeading(2, WOD_STR.Dungeon.heading))

    this.tabContainer = new WodUiWidget('ul')
    this.tabContainer.setClass('wod-tabs')
    this.appendChild(this.tabContainer)

    this.level = new WodUiLevel(true)
    this.appendChild(this.level)

    this.tabs = new Array()

    var _this = this

    for (var i=0; i<DUNGEON_LEVEL_COUNT+1; i+=1) {

        var tab = new WodUiWidget('li')
        tab.setClass('wod-level-tab')

        if (i == 0) {
            tab.appendChild(new WodUiText(WOD_STR.Dungeon.standard))
        } else {
            tab.appendChild(new WodUiText('' + i))
        }
        tab.setClickListener(function(level) {
            _this.setSelectedLevel(level)
        }, i)
        this.tabContainer.appendChild(tab)
        this.tabs.push(tab)


        if (i == 0 && DUNGEON_LEVEL_COUNT>1) {
            this.tabContainer.appendChild(new WodUiText( WOD_STR.Level.lvl_hl))
        }

    }

    if (typeof SELECTED_LVL == 'string' && SELECTED_LVL!=''){
        this.setSelectedLevel(parseInt(SELECTED_LVL))
    } else {
        this.setSelectedLevel(0)
    }
}

WodUiDungeon.clone(WodUiWidget)

WodUiDungeon.prototype.setSelectedLevel = function(level) {

    for (var i=0; i<DUNGEON_LEVEL_COUNT+1; i++) {
        if (i == level) {
            this.tabs[i].setClass('selected')
        } else {
            this.tabs[i].setClass(null)
        }
    }

    if (level > 0 && level<=DUNGEON_LEVEL_COUNT) {
        this.level.setConfig(this.cfg.levels[level-1])
        this.level.setPositionDropdownVisible(false)
        this.level.setCopyButtonVisible(true)
        this.level.setCopyAnyButtonVisible(true)
        this.level.setPasteAnyButtonVisible()
    } else {
        this.level.setConfig(this.cfg.standard)
        this.level.setPositionDropdownVisible(true)
        this.level.setCopyButtonVisible(false)
        this.level.setCopyAnyButtonVisible(false)
        this.level.setPasteAnyButtonVisible()
        level=0
    }

    SELECTED_LVL=level
}
