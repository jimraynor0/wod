//-----------------------------------------------------------------------------
// [WoD] Item type / skill bonus auto completion
// Copyright (c) Jim Zhai
//-----------------------------------------------------------------------------
// ==UserScript==
// @name          Wod auto completion
// @namespace     org.toj
// @version       0.2
// @description   Add auto completion text field for item type and skill bonus selector
// @include       http*://*.world-of-dungeons.*/wod/spiel/hero/items.php*
// @include       http*://*.world-of-dungeons.*/wod/spiel/trade/trade.php*
// @require       https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.3/js/select2.min.js
// @resource      select2-css https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.3/css/select2.min.css
// @grant         GM_addStyle
// @grant         GM_getResourceText
// ==/UserScript==

GM_addStyle(GM_getResourceText("select2-css"));
GM_addStyle('.select2-dropdown {color: #FFFFFF !important; background-color: #665B47 !important; border-color: #816E36 !important;}');
GM_addStyle('.select2-container--default .select2-selection--single {color: #FFFFFF !important; background-color: #665B47 !important; border-color: #816E36 !important;}');
GM_addStyle('.select2-container--default .select2-selection--single .select2-selection__rendered {color: #FFFFFF !important; background-color: #665B47 !important; border-color: #816E36 !important;}');

(function ($, undefined) {
  $(function () {
    $("select").select2({
        minimumResultsForSearch: 7
    });
  });
})(window.jQuery.noConflict(true));
