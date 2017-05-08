//-----------------------------------------------------------------------------
// [WoD] Item type / skill bonus auto completion
// Copyright (c) Jim Zhai
//-----------------------------------------------------------------------------
// ==UserScript==
// @name          Wod auto completion
// @author        Jim Zhai
// @namespace     org.toj
// @version       0.4
// @description   Add auto completion text field for item type and skill bonus selector
// @include       http*://*.world-of-dungeons.*/wod/spiel/hero/items.php*
// @include       http*://*.world-of-dungeons.*/wod/spiel/trade/trade.php*
// @require       https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.3/js/select2.min.js
// @resource      select2-css https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.3/css/select2.min.css
// @grant         GM_addStyle
// @grant         GM_getResourceText
// ==/UserScript==

GM_addStyle(GM_getResourceText("select2-css"));
GM_addStyle('.select2-results__option {padding: 2px}');
GM_addStyle('.select2-container--default .select2-results>.select2-results__options {max-height: 60vh}');

var minOptionCount = 12;
var ignoreFields = [/^EquipItem\[\d+\]$/i, /^sndgrp\d*\[\d+\]$/i];

if(typeof unsafeWindow.jQuery !== "undefined") {
  var $ = unsafeWindow.jQuery;

  var height, backgroundColor, fontColor, border, fontSize, borderRadius;

  $("select").each(function() {
    $this = $(this);
    if (minOptionCount > 0 && $this.find("option").length > minOptionCount && doNotIgnore($this.prop("name"))) {
      if (height == null) {
        height = $this.css("height");
        backgroundColor = $this.css("background-color");
        fontColor = $this.css("color");
        border = $this.css("border");
        fontSize = $this.css("font-size");
        borderRadius = $this.css("border-radius");
      }
      $this.select2();
    }
  });

  GM_addStyle(".select2-container .select2-selection--single, .select2-container--default .select2-selection--single, .select2-container--default .select2-selection--single .select2-selection__rendered {" +
    "height: " + height + ";" +
    "font-size: " + fontSize + ";" +
    "color: " + fontColor + ";" +
    "border: " + border + ";" +
    "border-radius: " + borderRadius + ";" +
    "line-height: 1;" +
    "background-color: " + backgroundColor + ";" +
    "}");
  GM_addStyle(".select2-container--default .select2-selection--single .select2-selection__arrow {height: " + height + "; top: " + height / 2 + ";}");
  GM_addStyle(".select2-container--default .select2-selection--single {background-color: " + backgroundColor + "; font-size: " + fontSize + "; color: " + fontColor + "; border: " + border + ";}");
  GM_addStyle(".select2-dropdown {background-color: " + backgroundColor + "; font-size: " + fontSize + "; color: " + fontColor + "; border: " + border + ";}");
  GM_addStyle(".select2-selection {background-color: " + backgroundColor + "; font-size: " + fontSize + ";}");

  function doNotIgnore(field) {
    if (ignoreFields.length <= 0) {
      return true;
    }

    var flag = true;
    $.each(ignoreFields, function(index, pattern) {
      if (field.search(pattern) != -1) {
        flag = false;
      }
    });
    return flag;
  }
}
