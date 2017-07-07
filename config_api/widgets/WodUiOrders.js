function WodUiOrders(fig_type, fig_id, url, cfg, world, session_hero_id, is_popup, php_session_name, php_session_id) {

    THE_ORDERS=this

    if (typeof PLAINCONFIG == 'undefined'){
        PLAINCONFIG=false;
    }

    WodUiWidget.call(this, 'div')
    var _this = this

    this.form = new WodUiWidget('form')
    this.form.setAttribute('action', url)
    this.form.setAttribute('method', 'post')
    this.appendChild(this.form)

    this.profile = new WodUiWidget('input')
    this.profile.setAttribute('type', 'hidden')
    this.profile.setAttribute('name', 'profile')
    this.form.appendChild(this.profile)

    this.wodpostid = new WodUiWidget('input')
    this.wodpostid.setAttribute('type', 'hidden')
    this.wodpostid.setAttribute('name', 'wod_post_id')
    this.wodpostid.setAttribute('value', WOD_POST_ID)
    this.form.appendChild(this.wodpostid)

    this.session_hero_id = new WodUiWidget('input')
    this.session_hero_id.setAttribute('type', 'hidden')
    this.session_hero_id.setAttribute('name', 'session_hero_id')
    this.session_hero_id.setAttribute('value', session_hero_id)
    this.form.appendChild(this.session_hero_id)


    this.orig_profile = new WodUiWidget('input')
    this.orig_profile.setAttribute('type', 'hidden')
    this.orig_profile.setAttribute('name', 'orig_profile')
    this.orig_profile.setAttribute('value', WOD_PROFILE_DISPLAYED)
    this.form.appendChild(this.orig_profile)

    this.save_tab = new WodUiWidget('input')
    this.save_tab.setAttribute('type', 'hidden')
    this.save_tab.setAttribute('name', 'SELECTED_TAB')
    this.form.appendChild(this.save_tab)

    this.save_lvl = new WodUiWidget('input')
    this.save_lvl.setAttribute('type', 'hidden')
    this.save_lvl.setAttribute('name', 'SELECTED_LVL')
    this.form.appendChild(this.save_lvl)

    this.save_duel = new WodUiWidget('input')
    this.save_duel.setAttribute('type', 'hidden')
    this.save_duel.setAttribute('name', 'SELECTED_DUEL')
    this.form.appendChild(this.save_duel)

    this.data = new WodUiWidget('input')
    this.data.setAttribute('type', 'hidden')
    this.data.setAttribute('name', 'data')
    this.form.appendChild(this.data)

    this.fig_type = new WodUiWidget('input')
    this.fig_type.setAttribute('type', 'hidden')
    this.fig_type.setAttribute('name', 'fig_type')
    this.fig_type.setAttribute('value', fig_type)
    this.form.appendChild(this.fig_type)

    this.is_popup = new WodUiWidget('input')
    this.is_popup.setAttribute('type', 'hidden')
    this.is_popup.setAttribute('name', 'is_popup')
    this.is_popup.setAttribute('value', is_popup)
    this.form.appendChild(this.is_popup)

    this.fig_id = new WodUiWidget('input')
    this.fig_id.setAttribute('type', 'hidden')
    this.fig_id.setAttribute('name', 'fig_id')
    this.fig_id.setAttribute('value', fig_id)
    this.form.appendChild(this.fig_id)

    this.action = new WodUiWidget('input')
    this.action.setAttribute('type', 'hidden')
    this.action.setAttribute('name', 'action')
    this.form.appendChild(this.action)

    this.world = new WodUiWidget('input')
    this.world.setAttribute('type', 'hidden')
    this.world.setAttribute('name', 'world')
    this.world.setAttribute('value', world)
    this.form.appendChild(this.world)

    if (php_session_name != '') {
        this.session = new WodUiWidget('input')
        this.session.setAttribute('type', 'hidden')
        this.session.setAttribute('name', php_session_name )
        this.session.setAttribute('value', php_session_id )
        this.form.appendChild(this.session)

        GET_SESSION_PARAM = '&' + php_session_name + '=' + php_session_id
    } else {
        GET_SESSION_PARAM = ''
    }


    if (typeof is_popup != 'undefined' && is_popup===true) {
        this.isPopupHidden = new WodUiWidget('input')
        this.isPopupHidden.setAttribute('type', 'hidden')
        this.isPopupHidden.setAttribute('name', 'is_popup')
        this.isPopupHidden.setAttribute('value', 1)
        this.form.appendChild(this.isPopupHidden)
    }

    if (PLAINCONFIG){
        // DUNGEON_LEVEL_COUNT=0;

        this.plainconfig = new WodUiWidget('input')
        this.plainconfig.setAttribute('type', 'hidden')
        this.plainconfig.setAttribute('name', 'plainconfig')
        this.plainconfig.setAttribute('value', 1)
        this.form.appendChild(this.plainconfig)
    }

    if (READONLY){
        this.readonly = new WodUiWidget('input')
        this.readonly.setAttribute('type', 'hidden')
        this.readonly.setAttribute('name', 'readonly')
        this.readonly.setAttribute('value', 1)
        this.form.appendChild(this.readonly)
    }


    this.setId('wod-orders')


    if (typeof PAGE_TITLE != 'undefined'
    && PAGE_TITLE!=''){
        this.appendChild(new WodUiHeading(1, PAGE_TITLE))

        this.pagetitle = new WodUiWidget('input')
        this.pagetitle.setAttribute('type', 'hidden')
        this.pagetitle.setAttribute('name', 'pagetitle')
        this.pagetitle.setAttribute('value', PAGE_TITLE)
        this.form.appendChild(this.pagetitle)
    }

    this.profileDropdown = new WodUiProfileDropdown(WOD_PROFILES)
    //  this.skillDropdown.setStyleProperty('width', '100%')
    //this.skillDropdown.setSelectionChangeListener(function() {
    //	_this.skillSelectionChanged()
    //})
    this.appendChild(this.profileDropdown)

    if (READONLY==false){

        wodToolTip_ShowDelay=1000

        this.label=new WodUiText(' ' + WOD_STR.Orders.prf_use)
        this.appendChild(this.label)

        this.saveButton = new WodUiButton(WOD_STR.Orders.prf_active)
        this.saveButton.setClickListener(function() {
            profileSetDefault( _this, CFG_ACTIVE )
        })
        this.saveButton.setTooltip(WOD_STR.Orders.prf_active_hint);
        this.appendChild(this.saveButton)

        if (PLAINCONFIG==false) {

            if (THE_ENV.have_no_dungeon_configs) {
                this.nextButton = new WodUiButton(WOD_STR.Orders.prf_next)
                this.nextButton.setClickListener(function() {
                    profileSetDefault( _this, CFG_NEXT_DUNGEON )
                })
                this.nextButton.setTooltip(WOD_STR.Orders.prf_next_hint);
                this.appendChild(this.nextButton)
            }

            this.duelButton = new WodUiButton(WOD_STR.Orders.prf_duels)
            this.duelButton.setClickListener(function() {
                profileSetDefault( _this, CFG_DUELS )
            })
            this.duelButton.setTooltip(WOD_STR.Orders.prf_duels_hint);
            this.appendChild(this.duelButton)

            this.appendChild(new WodUiLinebreak())
            this.appendChild(new WodUiLinebreak())
        }

        this.submitButton = new WodUiButton(WOD_STR.Orders.save)
        this.submitButton.setClickListener(function() {
            profileSave( _this )
        })
        this.appendChild(this.submitButton)
    }


    this.loadButton = new WodUiButton(WOD_STR.Orders.load)
    this.loadButton.setClickListener(function() {
        profileLoad(_this)
    })
    this.appendChild(this.loadButton)

    if (READONLY==false){
        this.removeButton = new WodUiButton(WOD_STR.Orders.remove)
        this.removeButton.setClickListener(function() {
            profileRemove(_this)
        })
        this.appendChild(this.removeButton)
    }

    if (CLOSEBUTTON){
        this.closeButton = new WodUiButton(WOD_STR.Orders.close)
        this.closeButton.setClickListener(function() {
            window.close()
        })
        this.appendChild(this.closeButton)

        this.hasCloseBut = new WodUiWidget('input')
        this.hasCloseBut.setAttribute('type', 'hidden')
        this.hasCloseBut.setAttribute('name', 'hasCloseBut')
        this.hasCloseBut.setAttribute('value', 1)
        this.form.appendChild(this.hasCloseBut)
    }

    if (PLAINCONFIG==false){

        this.appendChild(new WodUiText('  '))
        this.viewDropdown = new WodUiDropdown()
        this.viewDropdown.setAttribute("name", "setview")
        this.viewDropdown.addOption("novice", WOD_STR.Orders.noviceView)
        this.viewDropdown.addOption("expert", WOD_STR.Orders.expertView)
        this.viewDropdown.addOption("expert_nojs", WOD_STR.Orders.expertView_NoJs)
        this.viewDropdown.setSelectedOption("expert")
        this.viewDropdown.setSelectionChangeListener(function() {
            js_goto_url(PFAD_WOD+'/hero/skillconf_nojs.php?setview=' +  _this.viewDropdown.getSelectedOption() + GET_SESSION_PARAM );
        })
        this.appendChild(this.viewDropdown)
    }

    this.appendChild(new WodUiWidget('hr'))


    this.appendChild(new WodUiHeading(1, WOD_CURRENT_PROFILE))

    this.tabs = new WodUiWidget('ul')
    this.tabs.setClass('wod-tabs')
    this.appendChild(this.tabs)

    this.tabGeneral = new WodUiWidget('li')
    this.tabGeneral.setId('wod-orders-tab-general')
    this.tabGeneral.appendChild(new WodUiText(WOD_STR.Orders.general))
    this.tabGeneral.setClickListener(function() {
        _this.setSelectedTab(_this.tabGeneral, _this.general)
    })
    this.tabs.appendChild(this.tabGeneral)

    this.general = new WodUiGeneral(cfg.general)
    this.appendChild(this.general)

    this.tabDungeon = new WodUiWidget('li')
    this.tabDungeon.setId('wod-orders-tab-dungeon')
    this.tabDungeon.appendChild(new WodUiText(WOD_STR.Orders.dungeon))
    this.tabDungeon.setClickListener(function() {
        _this.setSelectedTab(_this.tabDungeon, _this.dungeon)
    })
    this.tabs.appendChild(this.tabDungeon)

    this.dungeon = new WodUiDungeon(cfg.dungeon)
    this.appendChild(this.dungeon)

    if (PLAINCONFIG==false){

        this.tabDuel = new WodUiWidget('li')
        this.tabDuel.setId('wod-orders-tab-duel')
        this.tabDuel.appendChild(new WodUiText(WOD_STR.Orders.duel))
        this.tabDuel.setClickListener(function() {
            _this.setSelectedTab(_this.tabDuel, _this.duel)
        })
        this.tabs.appendChild(this.tabDuel)

        this.duel = new WodUiDuel(cfg.duel)
        this.appendChild(this.duel)
    }

    this.tabNotes = new WodUiWidget('li')
    this.tabNotes.setId('wod-orders-tab-notes')
    this.tabNotes.appendChild(new WodUiText(WOD_STR.Orders.notes))
    this.tabNotes.setClickListener(function() {
        _this.setSelectedTab(_this.tabNotes, _this.notes)
    })
    this.tabs.appendChild(this.tabNotes)
    this.notes = new WodUiNotes(cfg.notes)
    this.appendChild(this.notes)

    if (typeof SELECTED_TAB != 'undefined'){
        switch (SELECTED_TAB){
            case 'dungeon':
            case 'wod-orders-tab-dungeon':
            this.setSelectedTab(this.tabDungeon, this.dungeon)
            break;
            case 'duel':
            case 'wod-orders-tab-duel':
            this.setSelectedTab(this.tabDuel, this.duel)
            break;
            case 'general':
            case 'wod-orders-tab-general':
            this.setSelectedTab(this.tabGeneral, this.general)
            break;
            case 'notes':
            case 'wod-orders-tab-notes':
            this.setSelectedTab(this.tabNotes, this.notes)
            break;
            default:
            this.setSelectedTab(this.tabDungeon, this.dungeon)
        }
    } else {
        this.setSelectedTab(this.tabDungeon, this.dungeon)
    }
}

WodUiOrders.clone(WodUiWidget)

WodUiOrders.prototype.setSelectedTab = function(tab, child) {

    this.tabGeneral.setClass(null)
    this.tabDungeon.setClass(null)
    this.tabNotes.setClass(null)

    if (PLAINCONFIG==false){
        this.tabDuel.setClass(null)
    }

    tab.setClass('selected')

    this.general.setStyleProperty('display', 'none')
    this.dungeon.setStyleProperty('display', 'none')
    this.notes.setStyleProperty('display', 'none')

    if (PLAINCONFIG==false){
        this.duel.setStyleProperty('display', 'none')
    }

    if (child.level != undefined)
        child.level.setPasteAnyButtonVisible()

    child.setStyleProperty('display', 'block')

    SELECTED_TAB=tab.getId()
}
