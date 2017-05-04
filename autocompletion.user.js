//-----------------------------------------------------------------------------
// [WoD] Item type / skill bonus auto completion
// Copyright (c) Jim Zhai
//-----------------------------------------------------------------------------
// ==UserScript==
// @name			Wod auto completion
// @namespace		org.toj
// @version			0.1
// @description		Add auto completion text field for item type and skill bonus selector
// @include     	http*://*.world-of-dungeons.*/wod/spiel/hero/items.php*
// @include     	http*://*.world-of-dungeons.*/wod/spiel/trade/trade.php*
// @require			https://raw.githubusercontent.com/LeaVerou/awesomplete/gh-pages/awesomplete.min.js
// @resource    	https://raw.githubusercontent.com/LeaVerou/awesomplete/gh-pages/awesomplete.css
// ==/UserScript==
(function() {
  var fieldPattern = [/^item_\d+item_class$/i, /^item_\d+any_skill$/i, /^item_\d+any_skillclass$/i, /^item_\d+skill$/i];
  var selects = document.getElementsByTagName("select");
  for (var i = 0; i < selects.length; i++) {
    select = selects[i];
    var name = select.getAttribute("name");
    var needsAutoCompletion = false;
    fieldPattern.forEach(function(pattern) {
      if (name.search(pattern) != -1) {
        needsAutoCompletion = true;
      }
    });
    if (!needsAutoCompletion) {
      continue;
    }
    var itemAutoCompletion = document.createElement("input");
    itemAutoCompletion.id = name + "-auto-completion";
    itemAutoCompletion.setAttribute("for", name);
    select.parentElement.appendChild(itemAutoCompletion);

    var itemList = [];
    var options = select.children;
    for (var j = 0; j < options.length; j++) {
      itemList[j] = {label: options[j].text, value: options[j].getAttribute("value")};
    }
    new Awesomplete(itemAutoCompletion, {minChars: 1, maxItems: 255, list: itemList});
  }

  addEventListener("awesomplete-select", function(e) {
    var select = document.getElementsByName(e.srcElement.getAttribute("for"))[0];
    select.value = e.text.value;
  }, false);

  addEventListener("awesomplete-selectcomplete", function(e){
    e.srcElement.value = e.text.label;
  }, false);
})();
