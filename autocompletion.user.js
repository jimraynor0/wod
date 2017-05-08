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
GM_addStyle('.select2-results {max-height: 70vh; !important}');
GM_addStyle('.select2-container--default .select2-results>.select2-results__options {max-height: 70vh; !important}');

var minOptionCount = 12;
var ignoreFields = [/^EquipItem\[\d+\]$/i, /^sndgrp\d*\[\d+\]$/i];

if(typeof unsafeWindow.jQuery !== "undefined") {
  var $ = unsafeWindow.jQuery;

  var height;
  var backgroundColor;
  var fontColor;
  var borderColor;
  var fontSize;

  $("select").each(function() {
    $this = $(this);
    if (minOptionCount > 0 && $this.find("option").length > minOptionCount && doNotIgnore($this.prop("name"))) {
      $this.select2();
      height = $this.css("height");
      backgroundColor = $this.css("background-color");
      fontColor = $this.css("color");
      borderColor = $this.css("border-color");
      fontSize = $this.css("font-size");
    }
  });

  $(".select2-selection--single, .select2-selection__rendered").css("height", height);
  $(".select2-selection--single, .select2-selection__rendered").css("font-size", fontSize);

  $(".select2-container--default .select2-selection--single .select2-selection__arrow").css("height", height);
  $(".select2-container--default .select2-selection--single .select2-selection__arrow").css("top", height / 2);

  $(".select2-dropdown").css("background-color", backgroundColor);
  $(".select2-dropdown").css("color", fontColor);
  $(".select2-dropdown").css("border-color", borderColor);
  $(".select2-dropdown").css("font-size", fontSize);

  $(".select2-container--default .select2-selection--single").css("background-color", backgroundColor);
  $(".select2-container--default .select2-selection--single").css("color", fontColor);
  $(".select2-container--default .select2-selection--single").css("border-color", borderColor);
  $(".select2-container--default .select2-selection--single").css("line-height", 1);
  $(".select2-container--default .select2-selection--single").css("font-size", fontSize);

  $(".select2-container--default .select2-selection--single .select2-selection__rendered").css("background-color", backgroundColor);
  $(".select2-container--default .select2-selection--single .select2-selection__rendered").css("color", fontColor);
  $(".select2-container--default .select2-selection--single .select2-selection__rendered").css("border-color", borderColor);
  $(".select2-container--default .select2-selection--single .select2-selection__rendered").css("line-height", 1);
  $(".select2-container--default .select2-selection--single .select2-selection__rendered").css("font-size", fontSize);

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
