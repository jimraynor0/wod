//-----------------------------------------------------------------------------
// [WoD] Bookmarks
// Copyright (c) Jim Zhai
//-----------------------------------------------------------------------------
// ==UserScript==
// @name          Wod bookmarks
// @author        Jim Zhai
// @namespace     org.toj
// @version       0.3
// @description   Provide shortcuts to frequently used pages
// @updateURL		  https://github.com/jimraynor0/wod/raw/master/bookmarks.user.js
// @downloadURL		https://github.com/jimraynor0/wod/raw/master/bookmarks.user.js
// @include       http*://*.world-of-dungeons.*/*
// ==/UserScript==

var links = {
    // 在这里列出你喜欢的链接，格式是：
    // 名字: "链接",
    // 注意这里的逗号、引号和冒号必须是半角(英文输入法下打出来的)，最后一行不需要逗号，其他行必须以逗号结尾
    属性和防御公式: "/wod/spiel/forum/viewtopic.php?pid=15725876&board=kein",
    套装速查: "/wod/spiel/forum/viewtopic.php?id=1431872&board=kein",
    镶嵌手册: "/wod/spiel/forum/viewtopic.php?id=1424754&board=kein",
    符文镶嵌公式: "/wod/spiel/forum/viewtopic.php?pid=15931483&board=kein",
    异化参数表: "/wod/spiel/forum/viewtopic.php?pid=15901972&board=kein",
    金字特效解读: "/wod/spiel/forum/viewtopic.php?pid=15868997&board=kein",
    地城特产掉落表: "/wod/spiel/forum/viewtopic.php?pid=15875563&board=kein",
    任务特产掉落表: "/wod/spiel/forum/viewtopic.php?pid=15874911&board=kein",
    隐藏关卡资料: "/wod/spiel/forum/viewtopic.php?pid=15725897&board=kein",
    挑战触发掉落表: "/wod/spiel/forum/viewtopic.php?pid=15883556&board=kein",
    论坛代码应用: "/wod/spiel/forum/viewtopic.php?pid=15830676&board=kein",
    WOD各类速查资料指引: "/wod/spiel/forum/viewtopic.php?pid=15934557&board=kein",
    记录者小屋: "/wod/spiel/forum/viewforum.php?id=1650686&board=kein"
};

var menuItems = $('<div class="menu-1-body"></div>');
$.each(links, function(label, link) {
    menuItems.append('<a href="' + link + '" class="menu-2-caption" style="user-select: auto;">' + label + '</a>');
});

$('.menu-vertical').append('<div class="menu-between"></div>');
$('.menu-vertical').append($('<div class="menu-1" id="bookmarks"/>')
                           .append('<a href="/wod/spiel/dungeon/dungeon.php?path=.8" class="menu-1-caption" onclick="return menuOnClick(this,\'\',\'library\',\'\');">快速链接<span class="menu-1-arrow closed"></span></a>')
                           .append(menuItems));
