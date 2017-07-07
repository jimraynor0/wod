function wod_orders_init( url,
                          fig_type,
                          fig_id,
                          is_popup,
                          world,
                          session_hero_id,
                          php_session_name,
                          php_session_id ) {

    if (typeof window['WOD_CFG'] == 'undefined') {
        WOD_CFG = new WodConfig()
    }
    WOD_CFG.ui_orders = new WodUiOrders(fig_type, fig_id, url, WOD_CFG, world, session_hero_id, is_popup, php_session_name, php_session_id )

    var element = document.getElementById('orders')
    var element_to_hide = document.getElementById('noscript')

    element.appendChild( WOD_CFG.ui_orders.element )
    element_to_hide.style['display']='none'
}
