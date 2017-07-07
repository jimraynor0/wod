/* profile "遗失的书籍" / hero "Scarlett Raynor" */

function wod_orders_preinit(){

WodSetConfig(83, 10, 5, "/wod/css//skins/skin-4/", false, false, "wod-orders-tab-dungeon", "", "hero", "", false, "WOD","ive0uos3kbs8mg4yfmbatphjg92hdbr4",false, true,false);

WodSetEnv( new WodEnvironment(
	[
new WodItem(31856, "+3力量之戒", [73], [], true, [""],[]),
new WodItem(118013, "《两湖水中倒映的月亮》 (仓库)", [110,68], [17], false, [],["00"]),
new WodItem(113247, "七月玉树的透果", [87,432], [], true, [""],[]),
new WodItem(111119, "乐谱原稿：专注之歌 (仓库)", [66,110], [17], false, [],["0"]),
new WodItem(111118, "乐谱原稿：侮辱之歌 (仓库)", [66,110], [17], false, [],["0"]),
new WodItem(61081, "乐谱原稿：勇气之歌", [68,110], [17], true, ["0"],[]),
new WodItem(92887, "乐谱原稿：回复之歌", [68,110], [17], true, ["0"],[]),
new WodItem(80199, "乐谱原稿：失信之歌 (仓库)", [66,110], [17], false, [],["0"]),
new WodItem(61085, "乐谱原稿：敏捷之歌", [68,110], [17], true, ["0"],[]),
new WodItem(92891, "乐谱原稿：查桑之合唱曲 (仓库)", [68,110], [17], false, [],["0"]),
new WodItem(92889, "乐谱原稿：治愈能量之歌", [67,110], [17], true, ["0"],[]),
new WodItem(111120, "乐谱原稿：滑蛇之歌 (仓库)", [66,110], [17], false, [],["0"]),
new WodItem(114242, "乐谱原稿：精湛射手之歌 (仓库)", [68,110], [17], false, [],["0"]),
new WodItem(80202, "乐谱原稿：精神混乱之歌 (仓库)", [66,110], [17], false, [],["0"]),
new WodItem(61087, "乐谱原稿：绝对神圣之合唱曲", [68,110], [17], true, ["0"],[]),
new WodItem(111117, "乐谱原稿：绝望之歌 (仓库)", [66,110], [17], false, [],["0"]),
new WodItem(111121, "乐谱原稿：负担之歌 (仓库)", [66,110], [17], false, [],["0"]),
new WodItem(61088, "乐谱原稿：躲闪飞弹之歌 (仓库)", [68,110], [17], false, [],["0"]),
new WodItem(80203, "乐谱原稿：雷电之歌 (仓库)", [66,110], [17], false, [],["0"]),
new WodItem(80201, "乐谱原稿：饥饿阴影之歌 (仓库)", [66,110], [17], false, [],["0"]),
new WodItem(61082, "乐谱原稿：魔法防御之歌", [68,110], [17], true, ["0"],[]),
new WodItem(51060, "乐谱：专注之歌 (仓库)", [66], [17], false, [],[]),
new WodItem(69954, "乐谱：完全治愈之歌 (仓库)", [67], [17], false, [],[]),
new WodItem(70237, "乐谱：敏捷之歌 (仓库)", [68], [17], false, [],[]),
new WodItem(69947, "乐谱：治愈能量之歌", [67], [17], true, [""],[]),
new WodItem(114244, "乐谱：精湛射手之歌 (仓库)", [68], [17], false, [],[]),
new WodItem(51058, "乐谱：绝望之歌 (仓库)", [66], [17], false, [],[]),
new WodItem(70220, "乐谱：迅速之歌 (仓库)", [68], [17], false, [],[]),
new WodItem(84640, "亡者面罩", [10,111], [], true, ["0"],[]),
new WodItem(113461, "伊赞的附地靴", [131,18,112], [], true, ["00"],[]),
new WodItem(56864, "关特琳奶酪饼干屑 (仓库)", [87,432], [], false, [],[]),
new WodItem(53911, "冰球破片", [48], [], true, [""],[]),
new WodItem(113490, "冰舞女的丝裙", [454,18,113], [], true, ["0"],[]),
new WodItem(60778, "半身人生存守则卷一", [10,110], [], true, ["0"],[]),
new WodItem(111129, "咏叹之泽米拉", [17,86,108], [], true, ["000"],[]),
new WodItem(111284, "夏语", [10,111], [], true, ["000"],[]),
new WodItem(50980, "大袋食物", [87,432], [], true, [""],[]),
new WodItem(85578, "完美决斗剑手臂章", [111,83], [], true, ["0"],[]),
new WodItem(83074, "巨魔煮锅", [93], [432], true, [""],[]),
new WodItem(112784, "帕沙雷敏捷之戒", [78], [], true, [""],[]),
new WodItem(81953, "怪声纸", [10], [], true, [""],[]),
new WodItem(103550, "敏捷企鹅皮披肩", [14,112], [], true, [""],[]),
new WodItem(119446, "春雷", [10,111], [], true, ["000"],[]),
new WodItem(113756, "暗精灵剑舞手套", [454,14,112], [], true, ["00"],[]),
new WodItem(63344, "暗精灵锁子甲", [14,114], [], true, ["000"],[]),
new WodItem(113346, "暗羽舞翼", [376,21,135,122,212,151], [], true, ["000"],[]),
new WodItem(523, "格雷泰的馅饼 (仓库)", [87,432], [], false, [],[]),
new WodItem(113242, "梅雅的生命呼声", [17,143,111], [], true, ["00"],[]),
new WodItem(92893, "歌集原稿：回复之歌", [68,110], [17], true, ["0"],[]),
new WodItem(80205, "歌集原稿：狂风之歌 (仓库)", [66,110], [17], false, [],["0"]),
new WodItem(61098, "歌集原稿：胜利之歌 (仓库)", [68,110], [17], false, [],["0"]),
new WodItem(61092, "歌集原稿：躲闪之歌 (仓库)", [68,110], [17], false, [],["0"]),
new WodItem(61097, "歌集原稿：躲闪飞弹之歌", [68,110], [17], true, ["0"],[]),
new WodItem(61093, "歌集原稿：顽强之歌 (仓库)", [68,110], [17], false, [],["0"]),
new WodItem(61091, "歌集原稿：魔法防御之歌", [68,110], [17], true, ["0"],[]),
new WodItem(51065, "歌集：侮辱之歌 (仓库)", [66], [17], false, [],[]),
new WodItem(70266, "歌集：勇气之歌 (仓库)", [68], [17], false, [],[]),
new WodItem(70260, "歌集：回复之歌 (仓库)", [68], [17], false, [],[]),
new WodItem(64330, "歌集：失信之歌 (仓库)", [66], [17], false, [],[]),
new WodItem(70283, "歌集：敏捷之歌 (仓库)", [68], [17], false, [],[]),
new WodItem(70298, "歌集：查桑之合唱曲 (仓库)", [68], [17], false, [],[]),
new WodItem(69959, "歌集：治愈能量之歌 (仓库)", [67], [17], false, [],[]),
new WodItem(64333, "歌集：滑蛇之歌 (仓库)", [66], [17], false, [],[]),
new WodItem(64331, "歌集：狂风之歌 (仓库)", [66], [17], false, [],[]),
new WodItem(114245, "歌集：精湛射手之歌 (仓库)", [68], [17], false, [],[]),
new WodItem(64334, "歌集：精神混乱之歌 (仓库)", [66], [17], false, [],[]),
new WodItem(70284, "歌集：绝对神圣之合唱曲 (仓库)", [68], [17], false, [],[]),
new WodItem(51064, "歌集：绝望之歌 (仓库)", [66], [17], false, [],[]),
new WodItem(70295, "歌集：胜利之歌 (仓库)", [68], [17], false, [],[]),
new WodItem(80198, "歌集：负担之歌 (仓库)", [66], [17], false, [],[]),
new WodItem(70277, "歌集：躲闪之歌 (仓库)", [68], [17], false, [],[]),
new WodItem(70289, "歌集：躲闪飞弹之歌 (仓库)", [68], [17], false, [],[]),
new WodItem(64335, "歌集：雷电之歌 (仓库)", [66], [17], false, [],[]),
new WodItem(70278, "歌集：顽强之歌 (仓库)", [68], [17], false, [],[]),
new WodItem(64332, "歌集：饥饿阴影之歌 (仓库)", [66], [17], false, [],[]),
new WodItem(70267, "歌集：魔法防御之歌 (仓库)", [68], [17], false, [],[]),
new WodItem(61127, "止咳药片 (仓库)", [87], [], false, [],[]),
new WodItem(62513, "汉娜奶奶的蔬菜汤 (仓库)", [87,432], [], false, [],[]),
new WodItem(56617, "汉娜奶奶的饼干配方", [10], [], true, [""],[]),
new WodItem(113443, "渡鸦堡的团队冠军勋章", [10], [], true, [""],[]),
new WodItem(62516, "火腿三明治 (仓库)", [87,432], [], false, [],[]),
new WodItem(52046, "焖豆 (仓库)", [87,432], [], false, [],[]),
new WodItem(62514, "煮熟的甜菜 (仓库)", [87,432], [], false, [],[]),
new WodItem(473, "特里安魔力耳环", [10,111], [], true, ["0"],[]),
new WodItem(111423, "破旧的军鼓", [17,109], [], true, ["00"],[]),
new WodItem(83495, "粘上绵羊毛的木碎片 (仓库)", [123,109], [], false, [],[]),
new WodItem(100499, "精致的背包", [153], [], true, [""],[]),
new WodItem(63327, "绿色菠菜 (仓库)", [87,432], [], false, [],[]),
new WodItem(62515, "肉排 (仓库)", [87,432], [], false, [],[]),
new WodItem(57030, "荣誉的勇气调音笛 (仓库)", [57,83], [], false, [],[]),
new WodItem(57031, "荣誉的嘲弄调音笛 (仓库)", [57,83], [], false, [],[]),
new WodItem(57028, "荣誉的治愈调音笛 (仓库)", [57,83], [], false, [],[]),
new WodItem(113188, "赤眼之冠", [213,10], [], true, [""],[]),
new WodItem(62895, "金色小妖精", [129,10], [], true, [""],[]),
new WodItem(56871, "金质烟嘴烟斗", [97,109], [88], true, ["0"],[]),
new WodItem(111128, "魔音之梅莉卡", [86,108], [66], true, ["000"],[])
	],
	// function WodItem(id, name, classes, ammoClassIds, equipped, equipped_sockets, unequipped_sockets) {
	// function WodSkill(id, name, type, positions, itemClassId, itemMandatory, not_in_back, friend ) {
	[
		new WodSkill(858,'嘲弄：嘲弄之歌', 4, 1, 66, true, false, false),
		new WodSkill(861,'嘲弄：嘲弄颂歌', 4, 2, 66, true, false, false),
		new WodSkill(228,'嘲弄：嘲讽', 4, 1, 66, true, false, false),
		new WodSkill(376,'基础：击剑', 12, 0, 86, true, false, false),
		new WodSkill(14,'基础：钝器攻击', 12, 0, 12, true, false, false),
		new WodSkill(875,'强化：坚定不移', 6, 0, 272, false, false, true),
		new WodSkill(825,'强化：疾风之速', 6, 0, 265, false, false, true),
		new WodSkill(872,'强化：非凡魅力', 6, 0, 123, false, false, true),
		new WodSkill(56,'战斗：抗魔', 64, 1, 266, false, false, false),
		new WodSkill(25,'战斗：近程闪避', 8, 0, 264, false, false, false),
		new WodSkill(53,'战斗：远程回避', 16, 1, 257, false, false, false),
		new WodSkill(857,'战歌：勇气之歌', 6, 1, 68, true, false, true),
		new WodSkill(860,'战歌：勇气颂歌', 4, 2, 68, true, false, true),
		new WodSkill(862,'战歌：迅捷小调', 6, 0, 0, true, false, true),
		new WodSkill(2,'技巧：佯攻', 6, 0, 0, true, false, true),
		new WodSkill(805,'技艺：变戏法', 2, 0, 126, false, false, true),
		new WodSkill(859,'治愈：治愈颂歌', 128, 2, 67, true, false, true),
		new WodSkill(4065,'派生：引诱攻击', 4, 0, 86, true, false, false),
		new WodSkill(379,'生活：午饭时间', 4, 2, 93, true, false, true),
		new WodSkill(378,'生活：大吃一顿', 2, 0, 87, true, false, true),
		new WodSkill(380,'生活：抽烟', 4, 0, 97, true, false, true),
		new WodSkill(398,'生活：讲故事', 2, 1, 415, false, false, true),
		new WodSkill(265,'精神：无知无觉', 32, 1, 45, false, false, false),
		new WodSkill(3667,'行动：优雅步伐', 1, 0, 0, true, false, true),
		new WodSkill(-1,WOD_STR.ActionList.wait, WOD_SKILL_TYPE_PREROUND|WOD_SKILL_TYPE_ROUND, WOD_POSITIONS_FIXED, false)
	],
	[
		164,240,242,243,279,327,418
	],
		0
));


WodSetProfiles(
	[

		new WodProfile( 1, '默认', 1 ),
		new WodProfile( 69, '父债子还', 0 ),
		new WodProfile( 73, '小，却高', 0 ),
		new WodProfile( 74, '绿野仙踪', 0 ),
		new WodProfile( 76, '阴影之心', 0 ),
		new WodProfile( 77, '图书馆的一夜', 0 ),
		new WodProfile( 80, '决斗', 4 ),
		new WodProfile( 81, '劳累一天后的夜晚', 0 ),
		new WodProfile( 83, '遗失的书籍', 0 ),
		new WodProfile( 84, '神圣礼堂', 0 ),
		new WodProfile( 85, '护送', 0 ),
		new WodProfile( 86, '时间、星光和佛罗特旺的猎人', 0 ),
		new WodProfile( 87, '决斗 - 骂人', 0 )

	]
);

WOD_CFG = new WodConfig(
		new WodGeneral(
			new WodFlee('', '', '', '50', false),
			new WodRecover('', ''),
			new WodMisc(false, 3),
			new WodDefense(new WodAction(new WodSkill(25), null, null, null, '', null, null, WOD_EXEC_DEFAULT, true), new WodAction(new WodSkill(53), null, null, null, '', 'auto', null, WOD_EXEC_DEFAULT, true), new WodAction(new WodSkill(265), null, null, null, '', 'auto', null, WOD_EXEC_DEFAULT, true), new WodAction(new WodSkill(56), null, null, null, '', 'auto', null, WOD_EXEC_DEFAULT, true), new WodAction()),
			[ new WodPosition('kp_vorne', true), new WodPosition('kp_links', true), new WodPosition('kp_rechts', true), new WodPosition('kp_zentrum', true), new WodPosition('kp_hinten', true), new WodPosition('kp_ruecken', true) ],
			[ new WodPosition('kp_vorne', true), new WodPosition('kp_links', true), new WodPosition('kp_rechts', true), new WodPosition('kp_zentrum', true), new WodPosition('kp_hinten', true), new WodPosition('kp_ruecken', true) ]
		),
		new WodDungeon(
			new WodLevel(
				'kp_hinten',
				new WodAction(new WodSkill(3667), null, null, null, '', null, null, WOD_EXEC_DEFAULT, true),
				[ new WodAction(new WodSkill(857), new WodItem(92887), false, { 17:111423 }, { 17:'-' }, 'kp_zentrum', null, WOD_EXEC_DEFAULT, true), new WodAction(new WodSkill(857), new WodItem(92893), false, { 17:111423 }, { 17:'-' }, 'kp_zentrum', null, WOD_EXEC_DEFAULT, true), new WodAction(new WodSkill(862), null, null, null, '', null, null, WOD_EXEC_DEFAULT, true), new WodAction(new WodSkill(2), null, null, null, '', null, null, WOD_EXEC_DEFAULT, true), new WodAction() ],
				[ new WodAction(new WodSkill(379), new WodItem(83074), false, { 432:50980 }, { 432:'-' }, null, null, WOD_EXEC_REPEAT, true), new WodAction(new WodSkill(862), null, null, null, '', null, null, WOD_EXEC_DEFAULT, true), new WodAction(new WodSkill(376), null, null, null, '', null, null, WOD_EXEC_DEFAULT, true), new WodAction() ],
				new WodHeal('fv_mittel', [ new WodAction(new WodSkill(859), WOD_ITEM_AUTO, '', null, null, null, null, WOD_EXEC_REPEAT, true) ],
				[ new WodAction(new WodSkill(859), WOD_ITEM_AUTO, '', null, null, null, null, WOD_EXEC_REPEAT, true) ],
				[ new WodAction(new WodSkill(859), WOD_ITEM_AUTO, '', null, null, null, null, WOD_EXEC_REPEAT, true) ])

			),
			[ new WodLevel(
				'kp_zentrum',
				new WodAction(new WodSkill(3667), null, null, null, '', null, null, WOD_EXEC_DEFAULT, true),
				[ new WodAction(new WodSkill(857), new WodItem(61085), false, { 17:111423 }, { 17:'-' }, 'kp_zentrum', null, WOD_EXEC_DEFAULT, true), new WodAction() ],
				[ new WodAction(new WodSkill(860), new WodItem(61085), false, { 17:111423 }, { 17:'-' }, null, [ new WodPosition('kp_vorne', true), new WodPosition('kp_links', false), new WodPosition('kp_rechts', false), new WodPosition('kp_zentrum', true), new WodPosition('kp_hinten', false), new WodPosition('kp_ruecken', false) ], WOD_EXEC_DEFAULT, true), new WodAction(new WodSkill(379), new WodItem(83074), false, { 432:113247 }, { 432:'-' }, null, [ new WodPosition('kp_vorne', false), new WodPosition('kp_links', false), new WodPosition('kp_rechts', false), new WodPosition('kp_zentrum', true), new WodPosition('kp_hinten', false), new WodPosition('kp_ruecken', false) ], WOD_EXEC_DEFAULT, true), new WodAction(new WodSkill(379), new WodItem(83074), false, { 432:50980 }, { 432:'-' }, null, null, WOD_EXEC_REPEAT, true), new WodAction(new WodSkill(376), null, null, null, '', null, null, WOD_EXEC_DEFAULT, true), new WodAction() ],
				new WodHeal('fv_mittel', [ new WodAction(new WodSkill(859), WOD_ITEM_AUTO, '', { 17:111129 }, { 17:'false' }, null, null, WOD_EXEC_REPEAT, true) ],
				[ new WodAction(new WodSkill(859), WOD_ITEM_AUTO, '', { 17:111129 }, { 17:'false' }, null, null, WOD_EXEC_REPEAT, true) ],
				[ new WodAction(new WodSkill(859), WOD_ITEM_AUTO, '', { 17:111129 }, { 17:'false' }, null, null, WOD_EXEC_REPEAT, true) ])
				,
				true
			), new WodLevel(
				'kp_hinten',
				new WodAction(new WodSkill(3667), null, null, null, '', null, null, WOD_EXEC_DEFAULT, true),
				[ new WodAction(new WodSkill(857), new WodItem(61091), false, { 17:111423 }, { 17:'-' }, 'kp_hinten', null, WOD_EXEC_REPEAT, true), new WodAction(new WodSkill(857), new WodItem(92887), false, { 17:111423 }, { 17:'-' }, 'kp_zentrum', null, WOD_EXEC_DEFAULT, true), new WodAction(new WodSkill(857), new WodItem(92893), false, { 17:111423 }, { 17:'-' }, 'kp_zentrum', null, WOD_EXEC_DEFAULT, true), new WodAction() ],
				[ new WodAction(new WodSkill(857), new WodItem(61091), false, { 17:111423 }, { 17:'-' }, 'kp_hinten', null, WOD_EXEC_REPEAT, true), new WodAction(new WodSkill(379), new WodItem(83074), false, { 432:50980 }, { 432:'-' }, null, null, WOD_EXEC_REPEAT, true), new WodAction() ],
				new WodHeal('fv_mittel', [ new WodAction(new WodSkill(859), WOD_ITEM_AUTO, '', null, null, null, null, WOD_EXEC_REPEAT, true) ],
				[ new WodAction(new WodSkill(859), WOD_ITEM_AUTO, '', null, null, null, null, WOD_EXEC_REPEAT, true) ],
				[ new WodAction(new WodSkill(859), WOD_ITEM_AUTO, '', null, null, null, null, WOD_EXEC_REPEAT, true) ])
				,
				true
			), new WodLevel(
				'kp_zentrum',
				new WodAction(),
				[ new WodAction()  ],
				[ new WodAction()  ],
				new WodHeal('good', [], [], [])
			), new WodLevel(
				'kp_zentrum',
				new WodAction(new WodSkill(3667), null, null, null, '', null, null, WOD_EXEC_DEFAULT, true),
				[ new WodAction(new WodSkill(857), new WodItem(61091), false, { 17:111423 }, { 17:'-' }, 'kp_hinten', null, WOD_EXEC_REPEAT, true), new WodAction(new WodSkill(857), new WodItem(92887), false, { 17:111423 }, { 17:'-' }, 'kp_zentrum', null, WOD_EXEC_DEFAULT, true), new WodAction(new WodSkill(857), new WodItem(92893), false, { 17:111423 }, { 17:'-' }, 'kp_zentrum', null, WOD_EXEC_DEFAULT, true), new WodAction(new WodSkill(862), null, null, null, '', null, null, WOD_EXEC_DEFAULT, true), new WodAction(new WodSkill(2), null, null, null, '', null, null, WOD_EXEC_DEFAULT, true), new WodAction() ],
				[ new WodAction(new WodSkill(857), new WodItem(61091), false, { 17:111423 }, { 17:'-' }, 'kp_hinten', null, WOD_EXEC_REPEAT, true), new WodAction(new WodSkill(862), null, null, null, '', null, null, WOD_EXEC_DEFAULT, true), new WodAction(new WodSkill(376), null, null, null, '', null, null, WOD_EXEC_DEFAULT, true), new WodAction() ],
				new WodHeal('fv_mittel', [ new WodAction(new WodSkill(859), WOD_ITEM_AUTO, '', { 17:111129 }, { 17:'false' }, null, null, WOD_EXEC_REPEAT, true) ],
				[ new WodAction(new WodSkill(859), WOD_ITEM_AUTO, '', { 17:111129 }, { 17:'false' }, null, null, WOD_EXEC_REPEAT, true) ],
				[ new WodAction(new WodSkill(859), WOD_ITEM_AUTO, '', { 17:111129 }, { 17:'false' }, null, null, WOD_EXEC_REPEAT, true) ])
				,
				true
			), new WodLevel(
				'kp_zentrum',
				new WodAction(new WodSkill(3667), null, null, null, '', null, null, WOD_EXEC_DEFAULT, true),
				[ new WodAction(new WodSkill(857), new WodItem(61097), false, { 17:111423 }, { 17:'-' }, 'kp_hinten', null, WOD_EXEC_REPEAT, true), new WodAction(new WodSkill(857), new WodItem(92887), false, { 17:111423 }, { 17:'-' }, 'kp_zentrum', null, WOD_EXEC_DEFAULT, true), new WodAction(new WodSkill(857), new WodItem(92893), false, { 17:111423 }, { 17:'-' }, 'kp_zentrum', null, WOD_EXEC_DEFAULT, true), new WodAction(new WodSkill(862), null, null, null, '', null, null, WOD_EXEC_DEFAULT, true), new WodAction(new WodSkill(2), null, null, null, '', null, null, WOD_EXEC_DEFAULT, true), new WodAction() ],
				[ new WodAction(new WodSkill(857), new WodItem(61097), false, { 17:111423 }, { 17:'-' }, 'kp_hinten', null, WOD_EXEC_REPEAT, true), new WodAction(new WodSkill(860), new WodItem(61081), false, { 17:111423 }, { 17:'-' }, null, [ new WodPosition('kp_hinten', true), new WodPosition('kp_vorne', true), new WodPosition('kp_links', true), new WodPosition('kp_rechts', true), new WodPosition('kp_zentrum', true), new WodPosition('kp_ruecken', true) ], WOD_EXEC_REPEAT, true), new WodAction(new WodSkill(862), null, null, null, '', null, null, WOD_EXEC_DEFAULT, true), new WodAction(new WodSkill(376), null, null, null, '', null, null, WOD_EXEC_DEFAULT, true), new WodAction() ],
				new WodHeal('fv_mittel', [ new WodAction(new WodSkill(859), WOD_ITEM_AUTO, '', null, null, null, null, WOD_EXEC_REPEAT, true) ],
				[ new WodAction(new WodSkill(859), WOD_ITEM_AUTO, '', null, null, null, null, WOD_EXEC_REPEAT, true) ],
				[ new WodAction(new WodSkill(859), WOD_ITEM_AUTO, '', null, null, null, null, WOD_EXEC_REPEAT, true) ])
				,
				true
			), new WodLevel(
				'kp_zentrum',
				new WodAction(new WodSkill(3667), null, null, null, '', null, null, WOD_EXEC_DEFAULT, true),
				[ new WodAction(new WodSkill(857), new WodItem(92887), false, { 17:111423 }, { 17:'-' }, 'kp_zentrum', null, WOD_EXEC_DEFAULT, true), new WodAction(new WodSkill(857), new WodItem(92893), false, { 17:111423 }, { 17:'-' }, 'kp_zentrum', null, WOD_EXEC_DEFAULT, true), new WodAction(new WodSkill(862), null, null, null, '', null, null, WOD_EXEC_DEFAULT, true), new WodAction(new WodSkill(2), null, null, null, '', null, null, WOD_EXEC_DEFAULT, true), new WodAction() ],
				[ new WodAction(new WodSkill(379), null, null, null, '', null, null, WOD_EXEC_REPEAT, true), new WodAction(new WodSkill(862), null, null, null, '', null, null, WOD_EXEC_DEFAULT, true), new WodAction(new WodSkill(376), null, null, null, '', null, null, WOD_EXEC_DEFAULT, true), new WodAction() ],
				new WodHeal('fv_mittel', [ new WodAction(new WodSkill(859), WOD_ITEM_AUTO, '', null, null, null, null, WOD_EXEC_REPEAT, true) ],
				[ new WodAction(new WodSkill(859), WOD_ITEM_AUTO, '', null, null, null, null, WOD_EXEC_REPEAT, true) ],
				[ new WodAction(new WodSkill(859), WOD_ITEM_AUTO, '', null, null, null, null, WOD_EXEC_REPEAT, true) ])
				,
				true
			), new WodLevel(
				'kp_zentrum',
				new WodAction(new WodSkill(3667), null, null, null, '', null, null, WOD_EXEC_DEFAULT, true),
				[ new WodAction(new WodSkill(857), new WodItem(61087), false, { 17:111423 }, { 17:'-' }, 'kp_hinten', null, WOD_EXEC_REPEAT, true), new WodAction(new WodSkill(857), new WodItem(92887), false, { 17:111423 }, { 17:'-' }, 'kp_zentrum', null, WOD_EXEC_DEFAULT, true), new WodAction(new WodSkill(857), new WodItem(92893), false, { 17:111423 }, { 17:'-' }, 'kp_zentrum', null, WOD_EXEC_DEFAULT, true), new WodAction(new WodSkill(862), null, null, null, '', null, null, WOD_EXEC_DEFAULT, true), new WodAction(new WodSkill(2), null, null, null, '', null, null, WOD_EXEC_DEFAULT, true), new WodAction() ],
				[ new WodAction(new WodSkill(857), new WodItem(61087), false, { 17:111423 }, { 17:'-' }, 'kp_hinten', null, WOD_EXEC_REPEAT, true), new WodAction(new WodSkill(862), null, null, null, '', null, null, WOD_EXEC_DEFAULT, true), new WodAction(new WodSkill(376), null, null, null, '', null, null, WOD_EXEC_DEFAULT, true), new WodAction() ],
				new WodHeal('fv_mittel', [ new WodAction(new WodSkill(859), WOD_ITEM_AUTO, '', { 17:111129 }, { 17:'false' }, null, null, WOD_EXEC_REPEAT, true) ],
				[ new WodAction(new WodSkill(859), WOD_ITEM_AUTO, '', { 17:111129 }, { 17:'false' }, null, null, WOD_EXEC_REPEAT, true) ],
				[ new WodAction(new WodSkill(859), WOD_ITEM_AUTO, '', { 17:111129 }, { 17:'false' }, null, null, WOD_EXEC_REPEAT, true) ])
				,
				true
			), new WodLevel(
				null,
				new WodAction(),
				[ new WodAction()  ],
				[ new WodAction()  ],
				new WodHeal('good', [], [], [])
			), new WodLevel(
				null,
				new WodAction(),
				[ new WodAction()  ],
				[ new WodAction()  ],
				new WodHeal('good', [], [], [])
			), new WodLevel(
				null,
				new WodAction(),
				[ new WodAction()  ],
				[ new WodAction()  ],
				new WodHeal('good', [], [], [])
			)]
		),
		new WodDuel(
			new WodLevel(
				'kp_vorne',
				new WodAction(),
				[ new WodAction()  ],
				[ new WodAction()  ],
				new WodHeal('good', [], [], [])
			),
			new WodLevel(
				'kp_vorne',
				new WodAction(),
				[ new WodAction()  ],
				[ new WodAction()  ],
				new WodHeal('good', [], [], [])
			),
			new WodLevel(
				'kp_vorne',
				new WodAction(),
				[ new WodAction()  ],
				[ new WodAction()  ],
				new WodHeal('good', [], [], [])
			),
			null
		),
		new WodNotes('','')
)
}


/* ---------------------------- orders.js ---------------------------- */


/**
 * Prüft, ob in einem assioziativen Array ar zum Schüssel key
 * ein Wert vorhanden ist.
 */
function isset( ar, key ) {

    for (var i in ar){
        if (i == key) {
            return true
        }
    }
    return false
}

function indexOf( haystack, needle ) {

    for (var i=0; i<haystack.length; i++) {
        if (haystack[i]==needle) {
            return i
        }
    }

    return -1
}

function is_in_array( element, list ) {

    if (typeof list != 'object')
        return false

    for (var i in list) {
        if (list[i] == element)
            return true
    }
    return false
}

/**
* Diese Funktion kopiert Felder aus einem prototypen in einen anderen
* prototypen. Optional können weitere argumente angegeben werden, welche
* die namen der Felder angeben. Auf diese Art und Weise kann man auch nur
* teile von einem prototypen clonen.
*/
Function.prototype.clone = function (parent) {
    if (arguments.length > 1) {
        for (var i=1; i<arguments.length; i+=1) {
            var name = arguments[i]
            this.prototype[name] = parent.prototype[name]
        }
    } else {
        for (var name in parent.prototype) {
            this.prototype[name] = parent.prototype[name]
        }
    }
}
/**
* Serializer für XML code. Weitestgehend an der API von XMLPull orientiert.
*/
function XmlSerializer() {
    this.data = ''
    this.level = 0
    this.tagIncomplete = false
}

XmlSerializer.prototype.startDocument = function() {
    this.data += '<?xml version="1.0"?>'
}
XmlSerializer.prototype.endDocument = function() {
    if (this.tagIncomplete) {
        this.data += '/>'
    }
}

XmlSerializer.prototype.indent = function() {
    for (var i=0; i<this.level; i+=1) {
        this.data += '    '
    }
}

XmlSerializer.prototype.startElement = function(name) {

    if (this.tagIncomplete) {
        this.data += '>'
    }

    this.data += '\n'
    this.indent()
    this.level += 1

    this.data += ('<' + name)
    this.tagIncomplete = true
}

XmlSerializer.prototype.attribute = function(name, value) {

    assert(this.tagIncomplete, 'XmlSerializer::attribute(name,value) must be called after a startElement() call.')

    this.data += (' ' + name + '="' + value + '"')
}

XmlSerializer.prototype.attributeInt = function(name, value) {

    assert(this.tagIncomplete, 'XmlSerializer::attribute(name,value) must be called after a startElement() call.')

    if (value!='')
        value=parseInt(value)


    if (isNaN(value))
        value=""

    this.data += (' ' + name + '="' + value + '"')
}

XmlSerializer.prototype.endElement = function(name) {
    if (this.tagIncomplete) {
        this.data += '/>'
        this.tagIncomplete = false
        this.level -= 1

    } else {
        this.data += '\n'
        this.level -= 1
        this.indent()

        this.data += ('</' + name + '>')
    }
}

XmlSerializer.prototype.text = function(text) {
    this.data += text
}

WOD_POSITION_AUTO               = 'auto'
WOD_POSITION_RAND               = 'kp_rand'
WOD_POSITION_FRONT              = 'kp_vorne'
WOD_POSITION_LEFT               = 'kp_links'
WOD_POSITION_RIGHT              = 'kp_rechts'
WOD_POSITION_CENTER             = 'kp_zentrum'
WOD_POSITION_BEHIND             = 'kp_hinten'
WOD_POSITION_BACK               = 'kp_ruecken'

WOD_POSITION_RESTRICTED = [WOD_POSITION_FRONT, WOD_POSITION_CENTER, WOD_POSITION_BEHIND]
WOD_POSITION_FULL       = [WOD_POSITION_FRONT, WOD_POSITION_LEFT, WOD_POSITION_RIGHT, WOD_POSITION_CENTER, WOD_POSITION_BEHIND, WOD_POSITION_BACK]

WOD_POSITIONS_FIXED             = 0
WOD_POSITIONS_ONE               = 1
WOD_POSITIONS_MANY              = 2

WOD_SKILL_TYPE_INITIATIVE       = 1 << 0
WOD_SKILL_TYPE_PREROUND         = 1 << 1
WOD_SKILL_TYPE_ROUND            = 1 << 2
WOD_SKILL_TYPE_DEF_CLOSE_COMBAT = 1 << 3
WOD_SKILL_TYPE_DEF_DISTANCE     = 1 << 4
WOD_SKILL_TYPE_DEF_SOCIAL       = 1 << 5
WOD_SKILL_TYPE_DEF_MAGIC        = 1 << 6
WOD_SKILL_TYPE_HEAL             = 1 << 7
WOD_SKILL_TYPE_DEF_AMBUSH       = 1 << 8

WOD_MATE_CONDITION_GOOD         = 'fv_leicht'
WOD_MATE_CONDITION_MEDIUM       = 'fv_mittel'
WOD_MATE_CONDITION_BAD          = 'fv_schwer'
WOD_MATE_CONDITION_DEAD         = '_fv_none'

WOD_POSOPTS_DEFAULT = 0
WOD_POSOPTS_CUSTOM  = 1
WOD_POSOPTS_RAND    = 2

WOD_EXEC_DEFAULT   = 0
WOD_EXEC_ONCEONLY  = 1
WOD_EXEC_REPEAT    = 2
WOD_EXEC_RANDOM    = 3

CFG_ACTIVE        = 1 << 0;
CFG_NEXT_DUNGEON  = 1 << 1;
CFG_DUELS         = 1 << 2;

GET_SESSION_PARAM = ''

var GAMETYPE              = 'WOD'
var HAVE_AMBUSH_PARADE    = false
var WOD_POST_ID           = '0'
var WOD_PROFILE_DISPLAYED = 0
var DUNGEON_LEVEL_COUNT   = 3
var HEAL_ACTION_COUNT     = 5
var PFAD_BILDER           = ''
var CLOSEBUTTON           = false
var PLAINCONFIG           = false
var SELECTED_TAB          = ''
var SELECTED_LVL          = 0
var SELECTED_DUEL         = ''
var PAGE_TITLE            = ''
var READONLY              = false
var HAVE_BATTLES          = false
var HAVE_CLANS            = true

var WOD_PROFILES = new Array()

var THE_ENV=false

var TMP_CONFIG    =   null

/**
* Ein Gegenstand.
* @param id Der Template Bezeichner des Gegenstandes. Da der Client sich
* nicht für die Bezeichner von GegenstäNden interessiert sondern nur für die
* der Gegenstandsklassen wird der Kürze halber das attribut 'id' statt
* 'template_id' verwendet.
* @param name Lokalisierter Name des Gegenstandes.
* @param classes Eine liste von class ids. Diesen klassen gehört dieser
* @param equipped true/false gibt an, ob der Gegenstand angelegt
* Gegenstand an. Wichtig für die Munition und den Zusammenhang von
* WodSkill und WodItem.
* @param ammoClasses Eine liste von item class ids. Diese liste gibt an
* was für andere Gegenständsklassen zum einsatz von diesem Gegenstand
* benötigt werden.
* @param equipped bool true, falls der Held den Gegenstand trägt
* @param sockets array of string: eine Liste der beim Helden
*        vorhandenen Veredelungen (spalte gemcache aus Tabelle figur_gegenstand)
*/
function WodItem(id, name, classes, ammoClassIds, equipped, equipped_sockets, unequipped_sockets) {

    if (WodItem.arguments.length == 1) {

        if (THE_ENV.items[id]) {
            return THE_ENV.items[id]

        } else {
            this.id = id
            this.name = WOD_STR.Wod.item.unknown
            this.equipped = false
            this.classes  = classes
            this.ammoClassIds = ammoClassIds
            this.equipped_sockets = false
        }
    } else {
        this.id           = id
        this.name         = (equipped?'' : '!! ') + name
        this.classes      = classes
        this.ammoClassIds = ammoClassIds
        this.equipped     = equipped
        this.equipped_sockets  = equipped_sockets
        this.unequipped_sockets  = unequipped_sockets
    }
}

WodItem.prototype.isOfClass = function( itemClassId )  {

    for (var i in this.classes)
        if (this.classes[i] == itemClassId)
            return true
    return false
}

WodItem.prototype.haveSockets = function()  {

    if (typeof this.equipped_sockets != 'undefined')
        if (this.equipped_sockets.length)
            return true

    if (typeof this.unequipped_sockets != 'undefined')
        if (this.unequipped_sockets.length)
            return true

    return false
}

WodItem.prototype.serialize = function(xs) {

    if (typeof this.ignore != 'undefined'
        && this.ignore) {
        return
    }

    xs.startElement('item')
    switch (this) {
        case WOD_ITEM_AUTO:
        xs.attribute('auto', 'true')
        break
        case WOD_ITEM_NONE:
        xs.attribute('none', 'true')
        break
        default:
        xs.attribute('template_id', this.id)
        break
    }

    xs.endElement('item')

}

WOD_ITEM_AUTO = new WodItem(0, WOD_STR.Wod.item.auto, [], [], true)
WOD_ITEM_NONE = new WodItem(0, WOD_STR.Wod.item.none, [], [], true)

WOD_SOCKET_AUTO = "-"

/**
* Eine Fertigkeit.
* @param id Der eindeutige Bezeichner der Fertigkeit.
* @param name Lokalisierter Name der Fertigkeit.
* @param type Eine bitmaske, die angibt wie diese Fertigkeit eingesetzt
* werden kann. Siehe WOD_SKILL_TYPE* für die Bedeutung der einzelnen bits.
* @param positions Die Positionen auf welche diese Fertigkeit gewirkt
* werden kann. Siehe WOD_POSITIONS_*.
* @param itemClassId Die Klasse des Gegenstandes, der für diese Fertigkeit
* benötigt wird. Dieser parameter ist optional und kann entfallen.
* @param itemMandatory Gibt an an ob das item mit der klasse itemClassId
* zwingend erforderlich (true) ist oder optional (false) ist.
*/
function WodSkill(id, name, type, positions, itemClassId, itemMandatory, not_in_back, friend ) {

    if (WodSkill.arguments.length == 1) {

        if (THE_ENV.skills[id]) {
            return THE_ENV.skills[id]
        } else {
            this.id = id
            this.name = WOD_STR.Wod.skill.unknown
            this.not_in_back   = false
        }

    } else {

        this.id            = id
        this.name          = name
        this.type          = type
        this.positions     = positions
        this.not_in_back   = not_in_back
        this.friend        = friend

        if (itemClassId) {
            this.itemClassId = itemClassId
            if (typeof itemMandatory != 'undefined') {
                this.itemMandatory = itemMandatory
            } else {
                this.itemMandatory = true
            }
        } else {
            this.itemClassId = null
            this.itemMandatory = false
        }
    }
}

WodSkill.prototype.serialize = function(xs) {
    xs.startElement('skill')
    xs.attribute('id', this.id)
    xs.endElement('skill')
}

/**
* Die Umgebung welche alle verfügbaren Gegenstände und Fertigkeiten
* speichert. Die Gegenstände und Fertigkeiten werden in einer art
* Registrierung gespeichert und die Verknüpfungen via Bezeichnern durch
* richtige Referenzen ersetzt.
* @param itemlist Liste aller verfügbaren Gegenstände.
* @param skills Liste aller verfügbaren Fertigkeiten.
*/
function WodEnvironment( itemlist, skilllist, itemClassIdsWithSockets, have_no_dungeon_configs ) {

    //
    // Gegenstands Registrierung aufbauen
    //

    /* id -> item mapping */
    this.items = new Object()

    /* class_id -> item array mapping */
    this.itemClasses = new Object()

    /* class_id -> item array mapping */
    this.ammoClasses = new Object()

    for (var i in itemlist) {

        var item = itemlist[i]

        // Gegenstand im id->item mapping registrieren
        this.items[item.id] = item

        // Gegenstand in allen class_id->item mappings registrieren
        for (var j in item.classes) {

            var itemClassId = item.classes[j]

            if (! this.itemClasses[itemClassId]) {
                this.itemClasses[itemClassId] = new Array()
            }
            this.itemClasses[itemClassId].push(item)
        }
    }

    for (var i in itemlist) {

        var item = itemlist[i]

        if (item.ammoClassIds) {

            item.ammoClasses = new Object()

            for (var j in item.ammoClassIds) {

                var itemClassId = item.ammoClassIds[j]
                var itemClassList = this.itemClasses[itemClassId]

                item.ammoClasses[itemClassId] = itemClassList
                this.ammoClasses[itemClassId] = itemClassList

            }

        }
    }

    this.itemClassIdsWithSockets = new Array()
    for (var i in itemClassIdsWithSockets) {

        var itemClassId = itemClassIdsWithSockets[i]
        this.itemClassIdsWithSockets.push( itemClassId )

    }


    //
    // Fertigkeiten Registrierung aufbauen
    //

    this.skills = Object()

    this.initiativeSkills         = new Array()
    this.preroundSkills           = new Array()
    this.roundSkills              = new Array()
    this.defenseCloseCombatSkills = new Array()
    this.defenseDistanceSkills    = new Array()
    this.defenseSocialSkills      = new Array()
    this.defenseMagicSkills       = new Array()
    this.defenseAmbushSkills      = new Array()
    this.healSkills               = new Array()

    for (var i in skilllist) {

        var skill = skilllist[i]
        this.skills[skill.id] = skill

        if (skill.type & WOD_SKILL_TYPE_INITIATIVE) {
            this.initiativeSkills.push(skill)
        }

        if (skill.type & WOD_SKILL_TYPE_PREROUND) {
            this.preroundSkills.push(skill)
        }

        if (skill.type & WOD_SKILL_TYPE_ROUND) {
            this.roundSkills.push(skill)
        }

        if (skill.type & WOD_SKILL_TYPE_DEF_CLOSE_COMBAT) {
            this.defenseCloseCombatSkills.push(skill)
        }

        if (skill.type & WOD_SKILL_TYPE_DEF_DISTANCE) {
            this.defenseDistanceSkills.push(skill)
        }

        if (skill.type & WOD_SKILL_TYPE_DEF_SOCIAL) {
            this.defenseSocialSkills.push(skill)
        }

        if (skill.type & WOD_SKILL_TYPE_DEF_MAGIC) {
            this.defenseMagicSkills.push(skill)
        }

        if (skill.type & WOD_SKILL_TYPE_DEF_AMBUSH) {
            this.defenseAmbushSkills.push(skill)
        }



        if (skill.type & WOD_SKILL_TYPE_HEAL) {
            this.healSkills.push(skill)
        }

        if (skill.itemClassId) {

            skill.items = new Array()
            if (! skill.itemMandatory) {
                skill.items.push(WOD_ITEM_NONE)
            }
            var tmpitems = this.itemClasses[skill.itemClassId]
            for (var i in tmpitems) {
                skill.items.push(tmpitems[i])
            }

        } else {
            skill.items = null
        }
    }

    this.have_no_dungeon_configs = have_no_dungeon_configs

}

/**
* Eine Aktion.
*/
function WodAction(skill, item, socket, ammo, ammoGem, positionId, positions, repeat, enabled) {

    this.setSkill(skill)
    this.setItem(item, socket)

    this.setAmmo( ammo, ammoGem )
    this.setPositionId(positionId)
    this.setPositions(positions)
    this.enabled   = (typeof enabled != 'undefined') ? enabled   : true

    if (typeof PLAINCONFIG != 'undefined'){
        this.repeat    = (typeof repeat != 'undefined')  ? repeat    : (PLAINCONFIG ? WOD_EXEC_RANDOM : WOD_EXEC_DEFAULT)
    } else {
        this.repeat    = (typeof repeat != 'undefined')  ? repeat    : WOD_EXEC_DEFAULT
    }
}


WodAction.prototype.serialize = function(xs) {

    xs.startElement('action')
    if (this.enabled == false) {
        xs.attribute('enabled', 'false')
    }


    switch (this.repeat){
        case WOD_EXEC_ONCEONLY: xs.attribute('exec', 'once'); break;
        case WOD_EXEC_REPEAT:   xs.attribute('exec', 'repeat'); break;
        case WOD_EXEC_RANDOM:   xs.attribute('exec', 'random'); break;
    }

    if (this.skill
        && this.item
        && this.item.haveSockets()
        && typeof this.socket != 'undefined'
        && this.socket != 'false'
        && this.socket != null
        && this.socket!= WOD_SOCKET_AUTO)
            xs.attribute('socket', this.socket );

    var ammo_serialized = 0

    if (this.skill) {
        this.skill.serialize(xs)
        if (this.item) {

            if (typeof this.item.ignore != 'undefined'
                && this.item.ignore) {
                ammo_serialized = 1

            } else {
                this.item.serialize(xs)

                if (this.item.ammoClasses) {
                    for (var itemClassId in this.item.ammoClasses) {

                        if (isset(this.ammo,itemClassId)) {
                            var ammoItem = this.ammo[itemClassId]
                            var gems     = this.ammoGem[itemClassId]

                            if (ammoItem && ammoItem != WOD_ITEM_AUTO) {
                                xs.startElement('ammo')
                                xs.attribute('item_class_id', itemClassId)
                                xs.attribute('item_template_id', ammoItem.id)
                                xs.attribute('socket', gems)
                                xs.endElement('ammo')
                                ammo_serialized = 1
                            }
                        }
                    }
                }
            }
        }

        if (ammo_serialized==0) {

            for (var itemClassId in this.defaultAmmoIds) {

                var ammoItemId = this.defaultAmmoIds[itemClassId]
                var ammoGem    = this.defaultAmmoGems[itemClassId]

                if (ammoItemId != WOD_ITEM_AUTO) {

                    var gem = this.defaultAmmoGems[itemClassId]

                    xs.startElement('ammo')
                    xs.attribute('item_class_id',    itemClassId)
                    xs.attribute('item_template_id', ammoItemId)
                    xs.attribute('socket',           gem)
                    xs.endElement('ammo')
                }
            }
        }

        switch (this.skill.positions){

            // case WOD_POSITIONS_FIXED: break;
            case WOD_POSITIONS_ONE:
            if (this.positionId) {
                xs.startElement('position')
                xs.attribute('id', this.positionId)
                xs.endElement('position')
            }
            break;
            case WOD_POSITIONS_MANY:
            if (typeof this.positions == 'string'){
                xs.startElement('positions')
                xs.attribute(this.positions, 'true')
                xs.endElement('positions')
            } else if (this.positions) {
                xs.startElement('positions')
                wod_serializePositions(this.positions, xs)
                xs.endElement('positions')
            }
            break;
        }
    }
    xs.endElement('action')
}

WodAction.prototype.copyFrom = function(anotherAction) {

    this.skill  = anotherAction.skill
    this.item   = anotherAction.item
    this.socket = anotherAction.socket

    if (anotherAction.ammo) {
        this.ammo = new Object()
        for (var itemClassId in anotherAction.ammo) {
            this.ammo[itemClassId] = anotherAction.ammo[itemClassId]
        }
    } else {
        this.ammo = null
    }

    if (anotherAction.ammoGem) {
        this.ammoGem = new Object()
        for (var itemClassId in anotherAction.ammoGem) {
            this.ammoGem[itemClassId] = anotherAction.ammoGem[itemClassId]
        }
    } else {
        this.ammoGem = null
    }


    if (anotherAction.defaultAmmoIds) {
        this.defaultAmmoIds = new Object()
        for (var itemClassId in anotherAction.defaultAmmoIds) {
            this.defaultAmmoIds[itemClassId] = anotherAction.defaultAmmoIds[itemClassId]
        }
    } else {
        this.defaultAmmoIds = null
    }


    if (anotherAction.defaultAmmoGems) {
        this.defaultAmmoGems = new Object()
        for (var itemClassId in anotherAction.defaultAmmoGems) {
            this.defaultAmmoGems[itemClassId] = anotherAction.defaultAmmoGems[itemClassId]
        }
    } else {
        this.defaultAmmoGems = null
    }


    this.positionId = anotherAction.positionId

    if( anotherAction.positions == null ) {
        this.positions = null
    } else if (typeof anotherAction.positions == 'string') {
        this.positions = anotherAction.positions
    } else if (typeof anotherAction.positions != 'undefined') {
        this.positions = new Array()
        for (var i in anotherAction.positions) {
            var pos = anotherAction.positions[i]
            this.positions.push(new WodPosition(pos.id, pos.enabled))
        }
    } else {
        this.positions = null
    }
    this.repeat = anotherAction.repeat
    this.enabled = anotherAction.enabled
}

/**
* @return true wenn sich die Fertigkeit geändert hat.
*/
WodAction.prototype.setSkill = function(skill) {
    if (this.skill != skill) {
        this.skill = skill
        if (this.skill) {
            if (this.skill.itemClass) {
                this.setItem(WOD_SKILL_AUTO)
            } else {
                this.setItem(null)
            }
            if (this.skill.positions == WOD_POSITIONS_ONE) {
                this.positionId = WOD_POSITION_AUTO
            } else {
                this.positionId = null
            }
            this.positions = null
        }
        return true
    } else {
        return false
    }
}

WodAction.prototype.setItem = function(item, socket)
{
    var item_changed   = this.item != item
    var socket_changed = (this.socket != socket || typeof this.socket != typeof socket)

    if (item_changed || socket_changed) {

        this.socket = socket;
        this.item = item

        if (this.item) {

            // Prüfe, ob das Item zum Skill passt
            if (this.item.id) {
                var item_class_ok = this.item.isOfClass( this.skill.itemClassId )

                if (! item_class_ok) {
                    this.item = null
                    this.ammo = null
                    this.ammoGem = null

                    return true
                }
            }

            if (this.item.ammoClassIds
                && this.item.ammoClassIds.length) {

                var have_ammo = typeof this.ammo != 'undefined'

                if (item_changed || !have_ammo) {

                    this.ammo = new Object()
                    this.ammoGem = new Object()

                    for (var ammoClass in this.item.ammoClassIds) {
                        this.ammo[ammoClass] = WOD_ITEM_AUTO
                        this.ammoGem[ammoClass] = ''
                    }
                }
            } else {
                this.ammo = null
                this.ammoGem = null
            }
        } else {
            this.ammo = null
            this.ammoGem = null
        }
        return true

    } else {
        return false
    }
}

WodAction.prototype.setAmmo = function( ammo, ammoGem ) {

    if (ammo) {
        this.defaultAmmoIds = new Object()
        for (var itemClassId in ammo) {
            this.defaultAmmoIds[itemClassId] = ammo[itemClassId]
        }
    } else {
        this.defaultAmmoIds = null
    }

    if (ammoGem) {
        this.defaultAmmoGems = new Object()
        for (var itemClassId in ammoGem) {
            this.defaultAmmoGems[itemClassId] = ammoGem[itemClassId]
        }
    } else {
        this.defaultAmmoGems = null
    }


    if (! this.item) {
        this.ammo = null
        this.ammoGem = null
        return
    }
    if (! this.item.ammoClasses) {
        this.ammo = null
        this.ammoGem = null
        return
    }
    if (! ammo) {
        return
    }

    this.ammo = new Object()
    this.ammoGem = new Object()

    // translate <int,int> map to <int,item> map
    for (var itemClassId in this.item.ammoClasses) {

        if (isset(ammo, itemClassId)) {

            var item = ammo[itemClassId]
            if (typeof item == 'undefined') {
                this.ammo[itemClassId] = WOD_ITEM_AUTO
            }
            else if (typeof item == 'number') {
                this.ammo[itemClassId] = new WodItem(item)
            }

            var socket = ammoGem[ itemClassId ]
            this.ammoGem[itemClassId] = socket
        }
    }
}





WodAction.prototype.setPositionId = function(positionId) {

    if (this.positionId != positionId) {
        this.positionId = (typeof positionId=='undefined' || positionId==null? WOD_POSITION_AUTO : positionId)
        return true
    } else {
        return false
    }
}

WodAction.prototype.setPositions = function(positions) {
    this.positions = positions
}

function WodConfig(general, dungeon, duel, notes) {
    this.general = general ? general : new WodGeneral()
    this.dungeon = dungeon ? dungeon : new WodDungeon()
    this.duel    = duel    ? duel    : new WodDuel()
    this.notes   = notes   ? notes   : new WodNotes()
}

WodConfig.prototype.serialize = function(xs) {
    xs.startDocument()
    xs.startElement('orders')


    var d = new Date()
    dstring = d.getFullYear() + '-' + (1+d.getMonth()) + '-' + d.getDate() + '  ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();

    xs.startElement('meta')
    xs.attribute('generator', 'WoD Engine: orders.js');
    xs.attribute('created',    dstring );
    xs.endElement('meta')

    this.general.serialize(xs)
    this.dungeon.serialize(xs)
    this.duel.serialize(xs)
    this.notes.serialize(xs)
    xs.endElement('orders')
    xs.endDocument()
}

function WodFlee(hp, mp, mates, items, helper) {
    this.hp     = hp
    this.mp     = mp
    this.mates  = mates
    this.items  = items
    this.helper = helper
}

WodFlee.prototype.serialize = function(xs) {
    xs.startElement('flee')
    xs.attributeInt('hp', this.hp)
    xs.attributeInt('mp', this.mp)
    xs.attributeInt('mate_count', this.mates)
    xs.attribute('helper_as_mates', (this.helper?'true':'false'))

    xs.attributeInt('item_damage', this.items)
    xs.endElement('flee')
}

function WodRecover(hp, mp) {
    this.hp = hp
    this.mp = mp
}

WodRecover.prototype.serialize = function(xs) {
    xs.startElement('recover')
    xs.attributeInt('hp', this.hp)
    xs.attributeInt('mp', this.mp)
    xs.endElement('recover')
}

function WodMisc(default_action, preround_prio) {
    this.default_action    = (typeof default_action != 'undefined')  ? default_action    : true
    this.preround_prio     = (typeof preround_prio  != 'undefined')  ? preround_prio     : 3
}

WodMisc.prototype.serialize = function(xs) {
    xs.startElement('misc')
    xs.attribute('default_action', (this.default_action?'true':'false'))
    xs.attribute('preround_prio',  typeof this.preround_prio  != 'undefined' ? this.preround_prio : 3)
    xs.endElement('misc')
}


function WodHeal(condition, good, medium, bad) {

    switch (condition){
        case WOD_MATE_CONDITION_GOOD:
        case WOD_MATE_CONDITION_MEDIUM:
        case WOD_MATE_CONDITION_BAD:
        case WOD_MATE_CONDITION_DEAD:
        this.condition=condition
        break;
        default:
        condition=WOD_MATE_CONDITION_MEDIUM
    }

    this.good      = good      ? good      : new Array()
    this.medium    = medium    ? medium    : new Array()
    this.bad       = bad       ? bad       : new Array()

    while (this.good.length < HEAL_ACTION_COUNT){
        this.good.push( new WodAction() );
    }
    while (this.medium.length < HEAL_ACTION_COUNT){
        this.medium.push( new WodAction() );
    }
    while (this.bad.length < HEAL_ACTION_COUNT){
        this.bad.push( new WodAction() );
    }
}


/**
* @todo: Falls für die Heil-Talente die gleichen Optionen wie für die
* Vorrunde und Runde aktiviert werden sollen, hier die 3 Zeilen
* this.good/medium/bad[i].repeat=WOD_EXEC_REPEAT;
* rausnehmen
*/
WodHeal.prototype.serialize = function(xs) {

    xs.startElement('heal')
    xs.attribute('mate_condition', this.condition)

    xs.startElement('good')
    for (var i=0; i<this.good.length; i++) {

        if (typeof this.good[i].skill != 'undefined'
            && this.good[i].skill!=null
            && this.good[i].skill.type & WOD_SKILL_TYPE_HEAL) {
            this.good[i].repeat=WOD_EXEC_REPEAT
            this.good[i].serialize(xs)
        }
    }
    xs.endElement('good')

    xs.startElement('medium')
    for (var i=0; i<this.medium.length; i++) {
        if (typeof this.medium[i].skill != 'undefined'
            && this.medium[i].skill!=null
            && (this.medium[i].skill.type & WOD_SKILL_TYPE_HEAL)) {
            this.medium[i].repeat=WOD_EXEC_REPEAT;
            this.medium[i].serialize(xs)
        }
    }
    xs.endElement('medium')

    xs.startElement('bad')
    for (var i=0; i<this.bad.length; i++) {
        if (typeof this.bad[i].skill != 'undefined'
            && this.bad[i].skill!=null
            && (this.bad[i].skill.type & WOD_SKILL_TYPE_HEAL)) {
            this.bad[i].repeat=WOD_EXEC_REPEAT;
            this.bad[i].serialize(xs)
        }
    }
    xs.endElement('bad')

    xs.endElement('heal')
}

function WodGeneral(flee, recover, misc, defense, friendPositions, enemyPositions) {
    this.flee            = flee            ? flee            : new WodFlee()
    this.recover         = recover         ? recover         : new WodRecover()
    this.misc            = misc            ? misc            : new WodMisc()
    this.defense         = defense         ? defense         : new WodDefense()
    this.friendPositions = wod_deserializePositions(friendPositions)
    this.enemyPositions  = wod_deserializePositions(enemyPositions)
}

WodGeneral.prototype.serialize = function(xs) {
    xs.startElement('general')
    this.flee.serialize(xs)
    this.recover.serialize(xs)
    this.misc.serialize(xs)
    this.defense.serialize(xs)
    xs.startElement('friend_positions')
    wod_serializePositions(this.friendPositions, xs)
    xs.endElement('friend_positions')
    xs.startElement('enemy_positions')
    wod_serializePositions(this.enemyPositions, xs)
    xs.endElement('enemy_positions')
    xs.endElement('general')
}

function WodNotes(text,hint) {
    this.text = base64_decode(text)
    this.hint = base64_decode(hint)
}

WodNotes.prototype.serialize = function(xs) {

    xs.startElement('notes')
    xs.attribute('text', base64_encode(this.text))
    xs.attribute('hint', base64_encode(this.hint))
    xs.endElement('notes')
}


function WodDungeon(standard, levels) {
    this.standard = standard ? standard : new WodLevel()
    this.standard.overwriteStandard = undefined
    if (levels) {
        this.levels = levels
        for (var i=0; i<this.levels.length; i++) {
            if (this.levels[i].overwriteStandard == undefined
            || PLAINCONFIG) {
                this.levels[i].overwriteStandard = false
            }
        }
    } else {
        this.levels = new Array(DUNGEON_LEVEL_COUNT)
    }

    while (this.levels.length<DUNGEON_LEVEL_COUNT){
        this.levels.push( new WodLevel(undefined, undefined, undefined,
        undefined, undefined, false) )
    }

}

WodDungeon.prototype.serialize = function(xs) {

    xs.startElement('dungeon')
    xs.startElement('standard')
    this.standard.serialize(xs)
    xs.endElement('standard')
    xs.startElement('levels')
    for (var i=0; i<this.levels.length; i++) {
        this.levels[i].serialize(xs)
    }
    xs.endElement('levels')
    xs.endElement('dungeon')
}

function WodDuel(hero, group, clan, clanquest) {
    this.hero  = hero  ? hero  : new WodLevel()
    if (typeof this.hero.overwriteStandard == 'undefined') {
        this.hero.overwriteStandard = false
    }

    this.group = group ? group : new WodLevel()
    if (typeof this.group.overwriteStandard == 'undefined') {
        this.group.overwriteStandard = false
    }

    if (HAVE_CLANS) {
        this.clan  = clan  ? clan  : new WodLevel()
        if (typeof this.clan.overwriteStandard == 'undefined') {
            this.clan.overwriteStandard = false
        }
    }

    if (HAVE_BATTLES) {
        this.clanquest  = clanquest  ? clanquest  : new WodLevel()
        if (typeof this.clanquest.overwriteStandard == 'undefined') {
            this.clanquest.overwriteStandard = false
        }
    }
}

WodDuel.prototype.serialize = function(xs) {
    xs.startElement('duel')
    xs.startElement('hero')
    this.hero.serialize(xs)
    xs.endElement('hero')
    xs.startElement('group')
    this.group.serialize(xs)
    xs.endElement('group')

    if (HAVE_CLANS) {
        xs.startElement('clan')
        this.clan.serialize(xs)
        xs.endElement('clan')
    }

    if (HAVE_BATTLES) {
        xs.startElement('clanquest')
        this.clanquest.serialize(xs)
        xs.endElement('clanquest')
    }

    xs.endElement('duel')
}

function WodLevel(positionId, initiative, preround, round, heal, overwriteStandard) {
    this.positionId = positionId ? positionId : null
    this.initiative = initiative ? initiative : new WodAction()
    this.preround   = preround   ? preround   : new Array()
    this.round      = round      ? round      : new Array()
    this.heal       = heal       ? heal       : new WodHeal()
    this.overwriteStandard = overwriteStandard
}

WodLevel.prototype.serialize = function(xs) {
    xs.startElement('level')
    if (this.positionId) {
        xs.attribute('position_id', this.positionId)
    }

    if (typeof this.overwriteStandard != 'undefined') {
        xs.attribute('overwrite_standard', (this.overwriteStandard?'true':'false'))
    }


    if ( (typeof this.overwriteStandard == 'undefined')
    || this.overwriteStandard == true) {
        xs.startElement('initiative')
        this.initiative.serialize(xs)
        xs.endElement('initiative')
        xs.startElement('preround')
        for (var i=0; i<this.preround.length; i++) {
            this.preround[i].serialize(xs)
        }
        xs.endElement('preround')
        xs.startElement('round')
        for (var i=0; i<this.round.length; i++) {
            this.round[i].serialize(xs)
        }
        xs.endElement('round')
        this.heal.serialize(xs)
    }
    xs.endElement('level')
}

function WodDefense(closeCombat, distance, social, magic, ambush) {
    this.closeCombat = closeCombat ? closeCombat : new WodAction()
    this.distance    = distance    ? distance    : new WodAction()
    this.social      = social      ? social      : new WodAction()
    this.magic       = magic       ? magic       : new WodAction()
    this.ambush      = ambush      ? ambush      : new WodAction()
}

WodDefense.prototype.serialize = function(xs) {
    xs.startElement('defense')
    xs.startElement('close_combat')
    this.closeCombat.serialize(xs)
    xs.endElement('close_combat')
    xs.startElement('distance')
    this.distance.serialize(xs)
    xs.endElement('distance')
    xs.startElement('social')
    this.social.serialize(xs)
    xs.endElement('social')
    xs.startElement('magic')
    this.magic.serialize(xs)
    xs.endElement('magic')
    xs.startElement('ambush')
    this.ambush.serialize(xs)
    xs.endElement('ambush')
    xs.endElement('defense')
}

/**
* Eine Position.
* @param id Eindeutige Bezeichner der Position.
* @enabled enabled Ein Boolean welcher angibt ob diese Position aktiviert
* (true) oder deaktiviert (false) ist.
*/
function WodPosition(id, enabled) {
    this.id = id
    this.enabled = (typeof enabled != 'undefined') ? enabled : true
}

WodPosition.prototype.getName = function() {
    return WOD_STR.position[this.id]
}

WodPosition.prototype.serialize = function(xs) {
    xs.startElement('position')
    xs.attribute('id', this.id)
    if (this.enabled == false) {
        xs.attribute('enabled', 'false')
    }
    xs.endElement('position')
}

function wod_serializePositions(positions, xs) {
    for (var i=0; i<positions.length; i++) {
        var position = positions[i]
        position.serialize(xs)
    }
}

/**
* Diese Funktion überprüft eine Liste von Funktionen und erzeugt sofern die
* liste ungültig ist eine neue.
*/
function wod_deserializePositions(positions) {

    if (! positions) {
        return wod_createPositions(false, true)
    }

    var posAvail = (FeatureHaveAllPositions()?WOD_POSITION_FULL:WOD_POSITION_RESTRICTED)

    if (positions.length != posAvail.length) {
        return wod_createPositions(false, true)
    }

    checkList = new Object()


    for (var i=0; i<posAvail.length; i++) {
        checkList[pos]=-1
    }

    for (var i=0; i<checkList.length; i++) {
        var pos = positions[i]
        if (checkList[pos.id] == -1) {
            delete checkList[pos.id]
        } else {
            // something is borked with the positions - reset to default
            return wod_createPositions(false, true)
        }
    }

    return positions

}

/**
* Erzeugt eine Liste, die alle verfügbaren Positionen enthält.
*/
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

function WodUiWidget( tagName, child ) {
    if (tagName) {
        this.element = document.createElement(tagName)
    }
    if (child) {
        this.appendChild(child)
    }
}

WodUiWidget.prototype.getDefaultDisplay = function() {
    return 'inline'
}

WodUiWidget.prototype.setVisible = function(visible) {

    if (visible) {
        this.setStyleProperty('display', this.getDefaultDisplay() )
    } else {
        this.setStyleProperty('display', 'none')
    }
}


/**
*
*/
WodUiWidget.prototype.setClass = function(className) {
    this.element.className = className
}

WodUiWidget.prototype.getClass = function(className) {
    return this.element.className
}

WodUiWidget.prototype.setId = function(id) {
    this.element.id = id
}

WodUiWidget.prototype.getId = function() {
    return this.element.id
}

WodUiWidget.prototype.setStyleProperty = function(name, value) {
    this.element.style[name] = value
    switch (name) {
        case 'float':
        this.element.style['cssFloat'] = value
        this.element.style['styleFloat'] = value
        break
    }
}

WodUiWidget.prototype.getStyleProperty = function(name) {
    return this.element.style[name]
}

WodUiWidget.prototype.setAttribute = function(name, value) {
    this.element[name] = value
    switch (name) {
        case 'type':
        this.element.setAttribute('type', value)
        break
    }
}

WodUiWidget.prototype.getAttribute = function(name) {
    return this.element[name]
}

WodUiWidget.prototype.appendChild = function(childWidget) {
    this.element.appendChild(childWidget.element)
}

WodUiWidget.prototype.removeChild = function(childWidget) {
    this.element.removeChild(childWidget.element)
}

WodUiWidget.prototype.replaceChild = function(childWidgetOld, childWidgetNew) {
    this.element.replaceChild(childWidgetOld.element,childWidgetNew.element)
}

WodUiWidget.prototype.insertChild = function(childWidget, childWidget2) {
    this.element.insertBefore(childWidget.element, childWidget2.element)
}

WodUiWidget.prototype.removeAllChildren = function() {
    while (this.element.childNodes.length>0)
        this.element.removeChild(this.element.childNodes[this.element.childNodes.length-1])
}

WodUiWidget.prototype.setClickListener = function(listener, data) {
    this.element.onclick = function(event) {
        listener(data)
    }
}

WodUiWidget.prototype.setDoubleClickListener = function(listener, data) {
    this.element.ondblclick = function(event) {
        listener(data)
    }
}

WodUiWidget.prototype.setTooltip = function(text) {
    wodToolTip( this.element, text )
}


WodUiLabel.clone(WodUiWidget)
function WodUiLabel(label) {

    WodUiWidget.call(this, 'span')

    this.label = new WodUiWidget('label')
    this.appendChild(this.label)
    this.label.appendChild( new WodUiText(label) )
}

WodUiCheckbox.clone(WodUiWidget)
function WodUiCheckbox( checked) {

    WodUiWidget.call(this, 'span')

    this.input = new WodUiWidget('input')
    this.input.setAttribute('type', 'checkbox')
    this.appendChild(this.input)

    if (typeof checked != 'undefined') {
        this.setChecked(checked)
    }

}

WodUiCheckbox.clone(WodUiWidget)

WodUiCheckbox.prototype.setChecked = function(checked) {

    this.input.element.checked = checked

}

WodUiCheckbox.prototype.isChecked = function() {

    return this.input.element.checked

}

WodUiCheckbox.prototype.setChangeListener = function(listener) {

    this.element.onchange = listener
    this.element.onclick = listener

}




/**
* @author Christian Neise
*/
function WodUiTextarea() {

    WodUiWidget.call(this, 'textarea')
}

WodUiTextarea.clone(WodUiWidget)

WodUiTextarea.prototype.setSize = function(cols,rows) {
    this.setAttribute('cols', cols)
    this.setAttribute('rows', rows)
}

WodUiTextarea.prototype.setText = function(text) {
    this.setAttribute('value', text)
}

WodUiTextarea.prototype.getText = function(text) {
    return this.getAttribute('value')
}


function WodUiDropdown() {

    WodUiWidget.call(this, 'select')
    this.element.size = 1

    this.options = new Array()

}

WodUiDropdown.clone(WodUiWidget)

WodUiDropdown.prototype.addOption = function(userObject, name) {

    var option = new WodUiWidget('option')

    option.appendChild(new WodUiText(name))
    option.userObject = userObject

    this.options.push(option)
    this.appendChild(option)

    this.origOpts = this.options
    this.hiddenOpts = new Array()
}

WodUiDropdown.prototype.removeAllOptions = function() {

    this.options = new Array()
    this.removeAllChildren()

}

WodUiDropdown.prototype.enableOption = function(userObject, enable) {

    this.hiddenOpts[ userObject ] = enable

    this.options = new Array()
    this.removeAllChildren()

    for (var i=0; i<this.origOpts.length; i+=1) {
        var option = this.origOpts[i]

        if (typeof this.hiddenOpts[ option.userObject ] == 'undefined'
            || this.hiddenOpts[ option.userObject ] == false) {
            this.options.push(option)
            this.appendChild(option)
        }

    }
}


WodUiDropdown.prototype.getSelectedOption = function() {

    return this.options[this.element.selectedIndex].userObject

}

WodUiDropdown.prototype.setSelectedOption = function(userObject) {

    if (! userObject) {
        this.element.selectedIndex = 0
        return true
    }

    for (var i=0; i<this.options.length; i+=1) {
        var option = this.options[i]
        if (option.userObject == userObject) {
            this.element.selectedIndex = i
            this.setClass(option.getClass())
            return true
        }
    }
    return false

}

WodUiDropdown.prototype.setSelectionChangeListener = function(listener, data) {
    this.element.onchange = function() {
        listener(data)
    }

}

function WodUiDuel(cfg) {

    WodUiWidget.call(this, 'div')

    var _this = this

    this.cfg = cfg

    // this.appendChild(new WodUiHeading(2, WOD_STR.Duel.heading))

    this.tabContainer = new WodUiWidget('ul')
    this.tabContainer.setClass('wod-tabs')
    this.appendChild(this.tabContainer)

    this.tabs = new Array()

    this.level = new WodUiLevel()
    this.level.setCopyButtonVisible(false)
    this.level.setCopyAnyButtonVisible(false)
    this.level.setPasteAnyButtonVisible()
    this.appendChild(this.level)

    this.heroTab = new WodUiWidget('li')
    this.heroTab.id = 'hero'
    this.heroTab.setClass('wod-level-tab')
    this.heroTab.appendChild(new WodUiText(WOD_STR.Duel.hero))
    this.heroTab.setClickListener(function() {
        _this.setSelectedTab(_this.heroTab, _this.cfg.hero)
    })
    this.tabContainer.appendChild(this.heroTab)

    this.groupTab = new WodUiWidget('li')
    this.groupTab.id = 'group'
    this.groupTab.setClass('wod-level-tab')
    this.groupTab.appendChild(new WodUiText(WOD_STR.Duel.group))
    this.groupTab.setClickListener(function() {
        _this.setSelectedTab(_this.groupTab, _this.cfg.group)
    })
    this.tabContainer.appendChild(this.groupTab)

    if (HAVE_CLANS) {
        this.clanTab = new WodUiWidget('li')
        this.clanTab.id = 'clan'
        this.clanTab.setClass('wod-level-tab')
        this.clanTab.appendChild(new WodUiText(WOD_STR.Duel.clan))
        this.clanTab.setClickListener(function() {
            _this.setSelectedTab(_this.clanTab, _this.cfg.clan)
        })
        this.tabContainer.appendChild(this.clanTab)
    }

    if (HAVE_BATTLES) {
        this.clanQuestTab = new WodUiWidget('li')
        this.clanQuestTab.id = 'clanquest'
        this.clanQuestTab.setClass('wod-level-tab')
        this.clanQuestTab.appendChild(new WodUiText(WOD_STR.Duel.clanquest))
        this.clanQuestTab.setClickListener(function() {
            _this.setSelectedTab(_this.clanQuestTab, _this.cfg.clanquest)
        })
        this.tabContainer.appendChild(this.clanQuestTab)
    }

    if (typeof SELECTED_DUEL != 'undefined'){
        switch (SELECTED_DUEL){
            case 'group':
            this.setSelectedTab(this.groupTab, this.cfg.group)
            break;
            case 'clan':
            if (typeof this.clanTab!='undefined') {
                this.setSelectedTab(this.clanTab, this.cfg.clan)
            } else {
                this.setSelectedTab(this.heroTab, this.cfg.hero)
            }
            break;
            case 'clanquest':
            if (typeof this.clanQuestTab!='undefined') {
                this.setSelectedTab(this.clanQuestTab, this.cfg.clanquest)
            } else {
                this.setSelectedTab(this.heroTab, this.cfg.hero)
            }
            break;
            default:
            this.setSelectedTab(this.heroTab, this.cfg.hero)
        }
    } else {
        this.setSelectedTab(this.heroTab, this.cfg.hero)
    }
}

WodUiDuel.clone(WodUiWidget)

WodUiDuel.prototype.setSelectedTab = function(tab, levelCfg) {

    this.heroTab.setClass(null)
    this.groupTab.setClass(null)
    if (typeof this.clanTab!='undefined') {
        this.clanTab.setClass(null)
    }
    if (typeof this.clanQuestTab!='undefined') {
        this.clanQuestTab.setClass(null)
    }
    tab.setClass('selected')

    this.level.setCopyButtonVisible(true)
    this.level.setCopyAnyButtonVisible(true)
    this.level.setPasteAnyButtonVisible()

    this.level.setConfig(levelCfg)

    SELECTED_DUEL=tab.id
}

function WodUiNotes(notes) {

    WodUiWidget.call(this, 'div')
    var _this = this
    this.notes = notes

    this.appendChild(new WodUiHeading(2, WOD_STR.Orders.hints))

    this.appendChild( new WodUiWidget('p', new WodUiText(WOD_STR.Orders.hintstxt)))

    this.hintarea = new WodUiTextarea()
    this.hintarea.setSize(80,10)
    this.hintarea.setText(notes.hint)
    this.appendChild(this.hintarea)

    this.appendChild(new WodUiHeading(2, WOD_STR.Orders.notes))

    this.textarea = new WodUiTextarea()
    this.textarea.setSize(80,30)
    this.textarea.setText(notes.text)
    this.appendChild(this.textarea)

    if (READONLY==false){

        but = new WodUiButton(WOD_STR.Orders.save)
        but.setClickListener(function() {

            profileSave( THE_ORDERS )
        })

        this.appendChild(new WodUiWidget('p', but))
    }
}

WodUiNotes.clone(WodUiWidget)

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

function WodUiGeneral(cfg) {

    WodUiWidget.call(this, 'div')

    this.cfg = cfg

    var _this = this

    // this.appendChild(new WodUiHeading(2, WOD_STR.General.heading))

    this.appendChild(new WodUiHeading(3, WOD_STR.General.flee.heading))
    this.appendChild(new WodUiText(WOD_STR.General.flee.hp))
    this.fleeHp = new WodUiNumericInput(cfg.flee.hp)
    this.fleeHp.setChangeListener(function() {
        _this.cfg.flee.hp = _this.fleeHp.getValue()
    })

    this.appendChild(this.fleeHp)

    this.appendChild(new WodUiLinebreak())

    this.appendChild(new WodUiText(WOD_STR.General.flee.mp))
    this.fleeMp = new WodUiNumericInput(cfg.flee.mp)
    this.fleeMp.setChangeListener(function() {
        _this.cfg.flee.mp = _this.fleeMp.getValue()
    })
    this.appendChild(this.fleeMp)

    this.appendChild(new WodUiLinebreak())

    this.appendChild(new WodUiText(WOD_STR.General.flee.mates))
    this.fleeMateCount = new WodUiNumericInput(cfg.flee.mates)
    this.fleeMateCount.setChangeListener(function() {
        _this.cfg.flee.mates = _this.fleeMateCount.getValue()
    })
    this.appendChild(this.fleeMateCount)

    this.appendChild(new WodUiText('('))
    this.fleeHelper = new WodUiCheckbox(cfg.flee.helper)
    this.fleeHelper.setChangeListener(function() {
        _this.cfg.flee.helper = _this.fleeHelper.isChecked()
    })
    this.appendChild(this.fleeHelper)
    this.appendChild(new WodUiText(WOD_STR.General.flee.helper + ')'))

    this.appendChild(new WodUiLinebreak())

    this.appendChild(new WodUiText(WOD_STR.General.flee.items))
    this.fleeItemDamage = new WodUiNumericInput(cfg.flee.items)
    this.fleeItemDamage.setChangeListener(function() {
        _this.cfg.flee.items = _this.fleeItemDamage.getValue()
    })
    this.appendChild(this.fleeItemDamage)

    hint=new WodUiWidget('p', new WodUiText(WOD_STR.General.flee.hint))
    hint.setClass('wod-list-item-label-positions')
    this.appendChild(hint)

    if (FeatureRecover()) {
        this.appendChild(new WodUiHeading(3, WOD_STR.General.recover.heading))

        this.appendChild(new WodUiText(WOD_STR.General.recover.hp))
        this.recoverHp = new WodUiNumericInput(cfg.recover.hp)
        this.recoverHp.setChangeListener(function() {
            _this.cfg.recover.hp = _this.recoverHp.getValue()
        })
        this.appendChild(this.recoverHp)

        this.appendChild(new WodUiLinebreak())

        this.appendChild(new WodUiText(WOD_STR.General.recover.mp))
        this.recoverMp = new WodUiNumericInput(cfg.recover.mp)
        this.recoverMp.setChangeListener(function() {
            _this.cfg.recover.mp = _this.recoverMp.getValue()
        })
        this.appendChild(this.recoverMp)

        hint=new WodUiWidget('p', new WodUiText(WOD_STR.General.recover.hint))
        hint.setClass('wod-list-item-label-positions')
        this.appendChild(hint)
    }

    if (READONLY==false){

        but = new WodUiButton(WOD_STR.Orders.save)
        but.setClickListener(function() {
            profileSave( THE_ORDERS )
        })

        this.appendChild(new WodUiWidget('p', but))
    }



    this.appendChild(new WodUiHeading(3, WOD_STR.General.defense.heading))

    this.appendChild(new WodUiHeading(4, WOD_STR.General.defense.closeCombat))

    if (THE_ENV.defenseCloseCombatSkills.length == 0) {
        label = new WodUiLabel( WOD_STR.Wod.skill.none )
        label.setClass('inactive')
        this.appendChild(label)
    } else {
        this.defenseCloseCombatDropdown = new WodUiSkillItemDropdown(THE_ENV.defenseCloseCombatSkills, cfg.defense.closeCombat)
        this.appendChild(this.defenseCloseCombatDropdown)
    }

    this.appendChild(new WodUiHeading(4, WOD_STR.General.defense.distance))

    if (THE_ENV.defenseDistanceSkills.length == 0) {
        label = new WodUiLabel( WOD_STR.Wod.skill.none )
        label.setClass('inactive')
        this.appendChild(label)
    } else {
        this.defenseDistanceDropdown = new WodUiSkillItemDropdown(THE_ENV.defenseDistanceSkills, cfg.defense.distance)
        this.appendChild(this.defenseDistanceDropdown)
    }

    if (FeatureHaveMagic()) {
        this.appendChild(new WodUiHeading(4, WOD_STR.General.defense.magic))

        if (THE_ENV.defenseMagicSkills.length == 0) {
            label = new WodUiLabel( WOD_STR.Wod.skill.none )
            label.setClass('inactive')
            this.appendChild(label)
        } else {
            this.defenseMagicDropdown = new WodUiSkillItemDropdown(THE_ENV.defenseMagicSkills, cfg.defense.magic)
            this.appendChild(this.defenseMagicDropdown)
        }
    }

    if (FeatureHaveAmbush()) {
        this.appendChild(new WodUiHeading(4, WOD_STR.General.defense.ambush))

        if (THE_ENV.defenseAmbushSkills.length == 0) {
            label = new WodUiLabel( WOD_STR.Wod.skill.none )
            label.setClass('inactive')
            this.appendChild(label)
        } else {
            this.defenseAmbushDropdown = new WodUiSkillItemDropdown(THE_ENV.defenseAmbushSkills, cfg.defense.ambush)
            this.appendChild(this.defenseAmbushDropdown )
        }
    }


    this.appendChild(new WodUiHeading(4, WOD_STR.General.defense.social))

    if (THE_ENV.defenseSocialSkills.length == 0) {
        label = new WodUiLabel( WOD_STR.Wod.skill.none )
        label.setClass('inactive')
        this.appendChild(label)
    } else {
        this.paradeSocialDropdown = new WodUiSkillItemDropdown(THE_ENV.defenseSocialSkills, cfg.defense.social)
        this.appendChild(this.paradeSocialDropdown)
    }

    if (READONLY==false){

        but = new WodUiButton(WOD_STR.Orders.save)
        but.setClickListener(function() {
            profileSave( THE_ORDERS )
        })

        this.appendChild(new WodUiWidget('p', but))
    }
    this.appendChild(new WodUiHeading(3, WOD_STR.General.positions.friends.heading))
    this.appendChild(new WodUiWidget('p', new WodUiText(WOD_STR.General.positions.friends.description)))

    this.friendPositionList = new WodUiPositionList(cfg.friendPositions)
    this.friendPositionList.setStyleProperty('width', '300px')
    this.appendChild(this.friendPositionList)


    if (READONLY==false){

        but = new WodUiButton(WOD_STR.Orders.save)
        but.setClickListener(function() {
            profileSave( THE_ORDERS )
        })

        this.appendChild(new WodUiWidget('p', but))
    }
    this.appendChild(new WodUiHeading(3, WOD_STR.General.positions.enemies.heading))
    this.appendChild(new WodUiWidget('p', new WodUiText(WOD_STR.General.positions.enemies.description)))

    this.enemyPositionList = new WodUiPositionList(cfg.enemyPositions)
    this.enemyPositionList.setStyleProperty('width', '300px')
    this.appendChild(this.enemyPositionList)


    if (READONLY==false){

        but = new WodUiButton(WOD_STR.Orders.save)
        but.setClickListener(function() {
            profileSave( THE_ORDERS )
        })

        this.appendChild(new WodUiWidget('p', but))
    }



    this.appendChild(new WodUiHeading(3, WOD_STR.General.misc.heading))

    this.defactionCheckbox = new WodUiCheckbox(cfg.misc.default_action)
    this.defactionCheckbox.setChangeListener(function() {
        _this.cfg.misc.default_action = _this.defactionCheckbox.isChecked()
    })
    this.appendChild(this.defactionCheckbox)

    this.defactionLabel = new WodUiLabel(WOD_STR.General.misc.default_action)
    this.defactionLabel.setClickListener(function() {
        _this.defactionCheckbox.setChecked( !_this.defactionCheckbox.isChecked() );
        _this.cfg.misc.default_action = _this.defactionCheckbox.isChecked()
    })
    this.appendChild(this.defactionLabel)
    this.appendChild(new WodUiLink(  WOD_STR.General.misc.default_action_link_label,
    WOD_STR.General.misc.default_action_link_url ));


    this.appendChild(new WodUiWidget('p'))

    this.appendChild(new WodUiText(WOD_STR.General.misc.preround_label + ' '))

    this.preroundprioDropdown = new WodUiDropdown()
    this.preroundprioDropdown.addOption( 1, WOD_STR.General.misc.preround_opt_1)
    this.preroundprioDropdown.addOption( 2, WOD_STR.General.misc.preround_opt_2)
    this.preroundprioDropdown.addOption( 3, WOD_STR.General.misc.preround_opt_3)
    this.preroundprioDropdown.addOption( 4, WOD_STR.General.misc.preround_opt_4)
    this.preroundprioDropdown.addOption( 5, WOD_STR.General.misc.preround_opt_5)
    this.preroundprioDropdown.setSelectionChangeListener(function() {
        _this.cfg.misc.preround_prio = _this.preroundprioDropdown.getSelectedOption()
    })
    this.appendChild(this.preroundprioDropdown)
    this.preroundprioDropdown.setSelectedOption(this.cfg.misc.preround_prio)

    if (READONLY==false){

        but = new WodUiButton(WOD_STR.Orders.save)
        but.setClickListener(function() {
            profileSave( THE_ORDERS )
        })

        this.appendChild(new WodUiWidget('p', but))
    }
}

WodUiGeneral.clone(WodUiWidget)

function WodUiHeading(level, text) {

    WodUiWidget.call(this, "h" + level)
    this.appendChild(new WodUiText(text))

}

WodUiHeading.clone(WodUiWidget)

WodUiHeading.prototype.getDefaultDisplay = function() {
    return 'block'
}


function WodUiText(text) {

    this.element = document.createTextNode(text)
}



/**
* Wrapper für eine SpanNode.
* @author Christian Neise
*/
function WodUiSpan(text) {
    WodUiWidget.call(this, "span")
    this.appendChild(new WodUiText(text))
}
WodUiSpan.clone(WodUiWidget)


function WodUiLink(label, url) {

    WodUiWidget.call(this)

    this.element = document.createElement('a')
    this.element.setAttribute('href',url);
    this.element.setAttribute('target','_blank');
    this.element.appendChild(document.createTextNode(label));
}

WodUiLink.clone(WodUiWidget)


/**
* Erzeugt ein neues Image Objekt.
* @param url Die URL unter welcher die Grafik f?r das Image zu erreichen ist.
* @param width Die Breite der Image Grafik
* @param height Die H?he der Image Grafik
* @param tooltipText Ein kurzer Beschreibungstext des Images welcher in Form eines
*        Tooltips angezeigt wird.
* @param type Untervzerzeichnis unterhalb '.../icons/': 'orders' oder 'gems'
*/
function WodUiImage(file, width, height, tooltipText, type) {

    assert(PFAD_BILDER!='', 'Settings not initialized')

    WodUiWidget.call(this)

    this.element = document.createElement('img')

    if (type == 'gems')
        url = LAYOUTCSS + 'icons/' + GAMETYPE + '/gems/' + file
    else if (type)
        url = PFAD_BILDER + 'images/icons/' + type + '/' + file
    else
        url = PFAD_BILDER + 'images/icons/orders/' + file

    this.setAttribute('src', url)
    this.setAttribute('width', width)
    this.setAttribute('height', height)

    if (typeof tooltipText!='undefined'
        && tooltipText!='') {
        this.setAttribute('title', tooltipText)
        this.setAttribute('alt', tooltipText)
    }
}
WodUiImage.clone(WodUiWidget)


function WodUiGemImage( gems ) {

    WodUiWidget.call(this)
    this.element = document.createElement('span')

    for (var j = 0; j < gems.length; j++)
    {
        var gemchar = gems.charAt(j)
        var gemicon = new WodUiImage('gem_' + gemchar + '.png' ,17,17,'','gems');

        gemicon.element.title = gemName['gem_' + gemchar];
        this.appendChild(gemicon);
    }

    // this.element = document.createElement('img')
    // url = PFAD_AJAX + gemicon.php?gems=' + gems
    // this.setAttribute('src', url)
}
WodUiGemImage.clone(WodUiWidget)


function WodUiInput(type, value) {

    WodUiWidget.call(this, 'input')

    if (typeof type != 'undefined') {
        this.setAttribute('type', type)
    }

    if (typeof value != 'undefined') {
        this.setValue(value)
    }

}

WodUiInput.clone(WodUiWidget)

WodUiInput.prototype.setValue = function(value) {
    this.setAttribute('value', value)
}

WodUiInput.prototype.getValue = function(value) {
    return this.getAttribute('value')
}

WodUiInput.prototype.setName = function(name) {
    this.setAttribute('name', name)
}

WodUiInput.prototype.setChangeListener = function(listener) {
    this.element.onchange = listener
}

function WodUiButton(caption) {

    WodUiInput.call(this, 'button', caption)

}

WodUiButton.clone(WodUiInput)

function WodUiItemDropdown(items) {

    WodUiDropdown.call(this)

    if (!items) {
        items = new Array()
    }

    this.setItems(items)
    this.setVisible(true)
}

WodUiItemDropdown.clone(WodUiDropdown)

WodUiItemDropdown.prototype.removeAllItems = function() {

    this.removeAllOptions()
    this.addItem(WOD_ITEM_AUTO)
}

WodUiItemDropdown.prototype.addItem = function(item) {
    this.addOption(item, item.name )
}

WodUiItemDropdown.prototype.setItems = function(items, neededItem) {

    this.removeAllItems()

    if (neededItem && neededItem.id > 0)
        for (var i in items) {
            var item = items[i]

            if (neededItem && item.id == neededItem.id)
                neededItem = false
        }

    if (neededItem && neededItem.id > 0)
        this.addItem(neededItem)

    for (var i in items) {
        var item = items[i]
        this.addItem(item)
    }
}

WodUiItemDropdown.prototype.getSelectedItem = function() {
    return this.getSelectedOption()
}

WodUiItemDropdown.prototype.setSelectedItem = function(item) {
    this.setSelectedOption(item)
}


/**
* @author Piotr Kudlacik
* Socket
*/
/* ---------------------------------     WoDUiGemDropDownElement: Begin ----------------------------------------------------*/
function WoDUiGemDropDownElement( socket, equipped )
{
    WodUiWidget.call(this, 'div')

    this.element.size = 1
    if (socket==WOD_SOCKET_AUTO)
    {
        var child = new WodUiWidget('div')
        if (!equipped) child.setClass('warn');
        child.appendChild(new WodUiText((equipped ? '' : '!! ') + (WOD_STR.Wod.item.auto)));
        this.appendChild(child);
    }
    else
    {
        var child = new WodUiWidget('div')
        if (!equipped) child.setClass('warn');

        if (! equipped) child.appendChild(new WodUiText('!! '));
        child.appendChild( new WodUiGemImage( socket ));
        this.appendChild(child);
    }
}

WoDUiGemDropDownElement.clone(WodUiWidget)

WoDUiGemDropDownElement.prototype.setMouseOutListener = function(listener, data) {
    this.element.onmouseout = function(event) {
        listener(data)
    }
}

/* ---------------------------------     WoDUiGemDropDownElement: End ------------------------------------------------------*/

/* ---------------------------------     WoDUiGemDropDownSelectable: Begin -------------------------------------------------*/
function WoDUiGemDropDownSelectable( parentIsInline ) {

    WodUiWidget.call(this, 'div')
    this.setClass('gemselect selectable');

    this.parentIsInline = parentIsInline

    this.options = new Array();
    this.selectedIndex = 0;
}

WoDUiGemDropDownSelectable.clone(WodUiWidget)


WoDUiGemDropDownSelectable.prototype.addOption  = function(userObject, equipped, parent)
{
  var option = new WoDUiGemDropDownElement(userObject, equipped);

  option.userObject = userObject;
  option.equipped = equipped;
  option.setClass('gemselect elements');
  option.setClickListener(function() {parent.setSelectedOption(userObject); })

  this.options.push(option)
  this.appendChild(option)
}

WoDUiGemDropDownSelectable.prototype.removeAllOptions = function(parent) {
    this.removeAllChildren();
    this.addOption(WOD_SOCKET_AUTO, true, parent);
}


WoDUiGemDropDownSelectable.prototype.setSelectedOption = function(userObject)
{
  if (! userObject)
  {
    this.selectedIndex = 0
    return 0;
  }

  for (var i=0; i<this.options.length; i+=1)
  {
    var option = this.options[i]
    {
    if (option.userObject == userObject) {
        this.selectedIndex = i
        this.setClass(option.getClass())
        return i;
    }}
  }
  return -1;
}

WoDUiGemDropDownSelectable.prototype.setClickListener = function(listener, data) {
    this.element.onclick = function()
    { listener(data) }
}

WoDUiGemDropDownSelectable.prototype.returnValue = function(index)
{this
  if (index>=0 && index <this.options.length)
    return this.options[index];
  else
    return false;
}

WoDUiGemDropDownSelectable.prototype.setMouseOverListener = function(listener, data) {
    this.element.onmouseover = function(event) {
        listener(data)
    }
}

WoDUiGemDropDownSelectable.prototype.setMouseUpListener = function(listener, data) {
    this.element.onmouseup = function(event) {
        listener(data)
    }
}


WoDUiGemDropDownSelectable.prototype.setMouseOutListener = function(listener, data) {
    this.element.onmouseout = function(event) {
        listener(data)
    }
}

WoDUiGemDropDownSelectable.prototype.setMouseDownListener = function(listener, data) {
    this.element.onmousedown = function(event) {
        listener(data)
    }
}

WoDUiGemDropDownSelectable.prototype.getDefaultDisplay = function() {

    return this.parentIsInline && isIE()
           ? 'inline'
           : 'block'
}

WoDUiGemDropDownSelectable.prototype.setVisible = function(visible) {
    if (visible) {
        this.setStyleProperty('display', this.getDefaultDisplay() )
        this.setClass('gemselect selectable')
    } else {
        this.setStyleProperty('display', 'none')
    }
}

/* ---------------------------------     WoDUiGemDropDownSelectable: End -------------------------------------------------*/

/* ---------------------------------     WoDUiGemDropDownSelected: Begin -------------------------------------------------*/
function WoDUiGemDropDownSelected() {
    WodUiWidget.call(this, 'div')
    this.setClass('gemselect selected')
}

WoDUiGemDropDownSelected.clone(WodUiWidget)

WoDUiGemDropDownSelected.prototype.addOption = function(userObject,equipped)
{
  this.child = new WodUiWidget('div')
  this.child.userObject = userObject;
  if (!equipped) this.child.setClass('warn');

  if (userObject==WOD_SOCKET_AUTO)
  {
    var text = (equipped ? '' : '!! ') + (WOD_STR.Wod.item.auto);
    this.child.appendChild(new WodUiText(text));
  }
  else
  {
    if (! equipped) this.child.appendChild(new WodUiText('!! '));

    this.child.appendChild( new WodUiGemImage(userObject));
  }
  this.appendChild(this.child);
}


/* ---------------------------------     WoDUiGemDropDownSelected: End ---------------------------------------------------*/

/* ---------------------------------     WoDUiGemDropDownImage: Begin ----------------------------------------------------*/
function WoDUiGemDropDownImage() {

    WodUiWidget.call(this, 'div')
    this.setClass('gemselect arrowicon');

    this.appendChild(new WodUiImage('dropdown.gif',16,20,''));
}

WoDUiGemDropDownImage.clone(WodUiWidget)

/* ---------------------------------     WoDUiGemDropDownImage: End ------------------------------------------------------*/

/* ---------------------------------            WoDUiGemDropDown: Begin --------------------------------------------------*/
function WoDUiGemDropDown( socketLabel, isInline ) {

    WodUiWidget.call(this, 'div')

    this.selectedIndex = 0;
    this.click = false;
    this.socketLabel = socketLabel

    this.isInline = isInline

    var cssClass = isInline
                   ? 'gemselect main inline'
                   : 'gemselect main'
    this.setClass( cssClass )

  //Erstellen der Hierarchie der Elemente
    this.selected = new WoDUiGemDropDownSelected();
    this.appendChild(this.selected);

    var dropdown = new WoDUiGemDropDownImage();
    this.appendChild(dropdown);

    this.selectable = new WoDUiGemDropDownSelectable( isInline );
    this.appendChild(this.selectable);
    this.selectable.setVisible(false);

    var _this = this

    this.setMouseOverListener(function() {
        _this.dropDownChanger(true)
    })

    this.setClickListener(function() {
//      _this.dropDownChanger(true)
    })

    this.setMouseOutListener(function() {
      _this.dropDownChanger(false)
    })

    this.setMouseDownListener(function() {
      //_this.dropDownChanger(false)
    })


}

WoDUiGemDropDown.clone(WodUiWidget)


WoDUiGemDropDown.prototype.showSelectedOption = function(userObject, equipped)
{
  this.appendChild(this.selectable.options[userObject]);
}

WoDUiGemDropDown.prototype.addOption  = function(userObject,name)
{
  this.selectable.addOption(userObject, name, this);
}

WoDUiGemDropDown.prototype.setMouseOverListener = function(listener, data) {
    this.element.onmouseover = function(event) {
        listener(data)
    }
}

WoDUiGemDropDown.prototype.setSockets = function(equipped_sockets, unequipped_sockets)
{
    this.createChildren();

    this.selectable.removeAllOptions(this);

    for (var s in equipped_sockets) {
      var socket = equipped_sockets[s];
      this.addOption(socket, true)
    }

    for (var s in unequipped_sockets) {
      var socket = unequipped_sockets[s]
      this.addOption(socket, false)
    }

    this.selectable.selectedIndex = 0;
    this.showSelected(this.selectable.options[this.selectable.selectedIndex].userObject, true);

}


WoDUiGemDropDown.prototype.updateGemSelect = function( item, itemClassId, selectedSocket )
{
    var is_visible = item
                     && itemClassId > 0
                     && is_in_array( itemClassId, THE_ENV.itemClassIdsWithSockets )
                     && item.haveSockets()

    if (is_visible) {

        this.setSockets( item.equipped_sockets, item.unequipped_sockets )

        if (!is_in_array( selectedSocket, item.equipped_sockets)
            && !is_in_array( selectedSocket, item.unequipped_sockets))
            selectedSocket = false;

        this.setSelectedOption( selectedSocket )
        this.setVisible(true)

        if (this.socketLabel)
            this.socketLabel.setVisible(true)

    } else {
        this.setVisible(false)
        this.removeAllChildren();

        if (this.socketLabel)
            this.socketLabel.setVisible(false)
    }
}

WoDUiGemDropDown.prototype.setVisible = function(visible) {
    if (visible) {
        this.setStyleProperty('display', this.getDefaultDisplay() )
        if (this.socketLabel)
            this.socketLabel.setVisible(true)

    } else {
        this.setStyleProperty('display', 'none')

        this.removeAllChildren();

        if (this.socketLabel)
            this.socketLabel.setVisible(false)
    }
}


WoDUiGemDropDown.prototype.showSelected = function(userObject, equipped)
{
  this.selected.removeAllChildren();
  this.selected.addOption(userObject, equipped);
}

WoDUiGemDropDown.prototype.createChildren = function()
{
  this.selectable.options = new Array();
}

WoDUiGemDropDown.prototype.removeAllChildren = function()
{
  this.selected.removeAllChildren();

  this.selectable.removeAllChildren();
  this.selectable.options = false;
  this.selectedIndex = 0;
}

WoDUiGemDropDown.prototype.getSelectedOption = function()
{
  if (this.selectable.options.length > 0)
    return this.selectable.options[this.selectable.selectedIndex].userObject;
  else
    return false;
}

WoDUiGemDropDown.prototype.setSelectedOption = function(userObject)
{
  var value = this.selectable.returnValue(this.selectable.setSelectedOption(userObject));
  if (value)
  {
    this.showSelected(value.userObject, value.equipped);
  }
}

WoDUiGemDropDown.prototype.setSelectionChangeListener = function(listener, data) {

    this.selectable.setClickListener(function() {
        listener(data)
    })
}

WoDUiGemDropDown.prototype.dropDownChanger = function(visible) {
/*  if (this.click)
  {
    this.selectable.setVisible(false);
    this.click = false;
  }
  else
  {
    this.selectable.setVisible(true);
    this.click = true;
  }*/

    this.selectable.setVisible(visible);

}

WoDUiGemDropDown.prototype.setMouseOverListener = function(listener, data) {
    this.element.onmouseover = function(event) {
        listener(data)
    }
}

WoDUiGemDropDown.prototype.setMouseDownListener = function(listener, data) {
    this.element.onmousedown = function(event) {
        listener(data)
    }
}


WoDUiGemDropDown.prototype.setMouseOutListener = function(listener, data) {
    this.element.onmouseout = function(event) {
        listener(data)
    }
}


WoDUiGemDropDown.prototype.getDefaultDisplay = function() {

    if (!this.isInline)
        return 'block'

    return isIE()
           ? 'inline-block'
           : 'inline-block'
}

/* ---------------------------------            AdvDropDown: End ---------------------------------------------------*/






function WodUiLevel() {

    WodUiWidget.call(this, 'div')

    var _this = this

    this.overwriteCheckbox = new WodUiCheckbox()
    this.overwriteCheckbox.setClickListener(function() {
        var checked = _this.overwriteCheckbox.isChecked()

        _this.overwriteCheckbox.setChecked( checked )

        _this.cfg.overwriteStandard = checked
        _this.setWrapperVisible(checked)

        if (checked)
             _this.copy()
    })
    this.appendChild(this.overwriteCheckbox)

    this.overwriteLabel = new WodUiLabel(WOD_STR.Level.overwriteStandard)
    this.overwriteLabel.setClickListener(function() {
        var checked = !_this.overwriteCheckbox.isChecked()

        _this.overwriteCheckbox.setChecked( checked )

        _this.cfg.overwriteStandard = checked
        _this.setWrapperVisible(checked)

        if (checked)
            _this.copy()
    })
    this.appendChild(this.overwriteLabel)



    this.wrapper = new WodUiWidget('div')
    this.appendChild(this.wrapper)

    this.wrapper.setStyleProperty('display', 'none')
    this.copyButton = new WodUiButton(WOD_STR.Level.copyStandard)
    this.copyButton.setClickListener(function() {
        _this.copy()
    })
    this.wrapper.appendChild(this.copyButton)

    this.clearButton = new WodUiButton(WOD_STR.Level.clear)
    this.clearButton.setClickListener(function() {
        _this.clear(true)
    })
    this.wrapper.appendChild(this.clearButton)

    // Copy/Paste-Buttons
    this.copyAnyButton = new WodUiButton(WOD_STR.Level.copyLevel)
    this.copyAnyButton.setClickListener(function() {
        _this.copyany()
    })
    this.wrapper.appendChild(this.copyAnyButton)

    this.pasteAnyButton = new WodUiButton(WOD_STR.Level.pasteLevel)
    this.pasteAnyButton.setClickListener(function() {
        _this.pasteany()
    })
    this.wrapper.appendChild(this.pasteAnyButton)


    this.positionHeading = new WodUiHeading(3, WOD_STR.Level.position)
    this.wrapper.appendChild(this.positionHeading)

    this.positionDropdown = new WodUiPositionDropdown(wod_createPositions(false, false))
    this.positionDropdown.setSelectionChangeListener(function() {
        _this.cfg.positionId = _this.positionDropdown.getSelectedPositionId()
    })
    this.wrapper.appendChild(this.positionDropdown)

    this.wrapper.appendChild(new WodUiHeading(3, WOD_STR.Level.initiative))

    if ( THE_ENV.initiativeSkills.length == 0) {
        label = new WodUiLabel( WOD_STR.Wod.skill.none )
        label.setClass('inactive')
        this.wrapper.appendChild(label)
    } else {
        this.initiativeDropdown = new WodUiSkillItemDropdown(THE_ENV.initiativeSkills)
        this.wrapper.appendChild(this.initiativeDropdown)
    }

    this.wrapper.appendChild(new WodUiHeading(3, WOD_STR.Level.preround))

    this.preroundActionList = new WodUiActionList(THE_ENV.preroundSkills)
    this.wrapper.appendChild(this.preroundActionList)

    if (READONLY==false){

        but = new WodUiButton(WOD_STR.Orders.save)
        but.setClickListener(function() {
            profileSave( THE_ORDERS )
        })

        this.wrapper.appendChild(new WodUiWidget('p', but))
    }

    this.wrapper.appendChild(new WodUiHeading(3, WOD_STR.Level.round))

    this.roundActionList = new WodUiActionList(THE_ENV.roundSkills)
    this.wrapper.appendChild(this.roundActionList)

    if (READONLY==false){

        but = new WodUiButton(WOD_STR.Orders.save)
        but.setClickListener(function() {
            profileSave( THE_ORDERS )
        })

        this.wrapper.appendChild(new WodUiWidget('p', but))
    }

    this.wrapper.appendChild(new WodUiHeading(3, WOD_STR.Level.heal.heading))

    this.wrapper.appendChild(new WodUiText(WOD_STR.Level.heal.when))
    this.healConditionDropdown = new WodUiDropdown()
    this.healConditionDropdown.addOption(WOD_MATE_CONDITION_GOOD, WOD_STR.Level.heal.condition.good)
    this.healConditionDropdown.addOption(WOD_MATE_CONDITION_MEDIUM, WOD_STR.Level.heal.condition.medium)
    this.healConditionDropdown.addOption(WOD_MATE_CONDITION_BAD, WOD_STR.Level.heal.condition.bad)
    this.healConditionDropdown.addOption(WOD_MATE_CONDITION_DEAD, WOD_STR.Level.heal.condition.dead)
    this.healConditionDropdown.setSelectionChangeListener(function() {
        _this.cfg.heal.condition = _this.healConditionDropdown.getSelectedOption()
    })


    this.have_healing = THE_ENV.healSkills.length > 0

    this.wrapper.appendChild(this.healConditionDropdown)

    this.healGoodDropdowns   = this.createHealingDropwdowns( WOD_STR.Level.heal.good )
    this.healMediumDropdowns = this.createHealingDropwdowns( WOD_STR.Level.heal.medium )
    this.healBadDropdowns    = this.createHealingDropwdowns( WOD_STR.Level.heal.bad )

    if (READONLY==false){

        but = new WodUiButton(WOD_STR.Orders.save)
        but.setClickListener(function() {
            profileSave( THE_ORDERS )
        })

        this.wrapper.appendChild(new WodUiWidget('p', but))
    }
}

WodUiLevel.clone(WodUiWidget)

WodUiLevel.prototype.createHealingDropwdowns = function( headline ) {

    var dropdownList = new Array()

    this.wrapper.appendChild(new WodUiHeading(4, headline))

    if ( !this.have_healing ) {
        label = new WodUiLabel( WOD_STR.Wod.skill.none )
        label.setClass('inactive')
        this.wrapper.appendChild(label)

    } else {
        for (var i=0; i<HEAL_ACTION_COUNT; i++){

            if (i>0)
                this.wrapper.appendChild(new WodUiLinebreak())

            this.wrapper.appendChild(new WodUiText( (i+1) + '. '))

            var dropdown = new WodUiSkillItemDropdown(THE_ENV.healSkills);
            dropdownList.push( dropdown )
            this.wrapper.appendChild( dropdown )
        }
    }

    return dropdownList
}

WodUiLevel.prototype.setConfig = function(cfg) {
    this.cfg = cfg

    if (typeof this.initiativeDropdown != 'undefined') {
        this.initiativeDropdown.setAction(cfg.initiative)
    }

    this.preroundActionList.setActions(cfg.preround)
    this.roundActionList.setActions(cfg.round)

    if (this.have_healing) {

        for (var i=0; i<HEAL_ACTION_COUNT; i++){
            this.healGoodDropdowns[i].setAction(cfg.heal.good[i]);
            this.healMediumDropdowns[i].setAction(cfg.heal.medium[i]);
            this.healBadDropdowns[i].setAction(cfg.heal.bad[i]);
        }
    }

    this.refresh()
}

WodUiLevel.prototype.copy = function() {
    this.clear()
    this.cfg.initiative.copyFrom(WOD_CFG.dungeon.standard.initiative)
    for (var i in WOD_CFG.dungeon.standard.preround) {
        var action = new WodAction()
        action.copyFrom(WOD_CFG.dungeon.standard.preround[i])
        this.cfg.preround.push(action)
    }
    for (var i in WOD_CFG.dungeon.standard.round) {
        var action = new WodAction()
        action.copyFrom(WOD_CFG.dungeon.standard.round[i])
        this.cfg.round.push(action)
    }
    this.cfg.heal.condition = WOD_CFG.dungeon.standard.heal.condition

    for (var i=0; i<HEAL_ACTION_COUNT; i++){
        this.cfg.heal.good[i].copyFrom(WOD_CFG.dungeon.standard.heal.good[i])
        this.cfg.heal.medium[i].copyFrom(WOD_CFG.dungeon.standard.heal.medium[i])
        this.cfg.heal.bad[i].copyFrom(WOD_CFG.dungeon.standard.heal.bad[i])
    }

    if (typeof this.cfg.positionId != 'undefined'){
        this.cfg.positionId = WOD_CFG.dungeon.standard.positionId
    }

    this.refresh()
}

WodUiLevel.prototype.copyany = function() {

    TMP_CONFIG = (new WodConfig()).dungeon.standard
    TMP_CONFIG.initiative.copyFrom(this.cfg.initiative)
    for (var i in this.cfg.preround) {
        var action = new WodAction()
        action.copyFrom(this.cfg.preround[i])
        TMP_CONFIG.preround.push(action)
    }
    for (var i in this.cfg.round) {
        var action = new WodAction()
        action.copyFrom(this.cfg.round[i])
        TMP_CONFIG.round.push(action)
    }
    TMP_CONFIG.heal.condition = this.cfg.heal.condition

    for (var i=0; i<HEAL_ACTION_COUNT; i++){
        TMP_CONFIG.heal.good[i].copyFrom(this.cfg.heal.good[i])
        TMP_CONFIG.heal.medium[i].copyFrom(this.cfg.heal.medium[i])
        TMP_CONFIG.heal.bad[i].copyFrom(this.cfg.heal.bad[i])
    }

    if (typeof TMP_CONFIG.positionId != 'undefined'){
        TMP_CONFIG.positionId = this.cfg.positionId
    }
}

WodUiLevel.prototype.pasteany = function() {
    if (TMP_CONFIG == null)
        return

    this.clear()
    this.cfg.initiative.copyFrom(TMP_CONFIG.initiative)
    for (var i in TMP_CONFIG.preround) {
        var action = new WodAction()
        action.copyFrom(TMP_CONFIG.preround[i])
        this.cfg.preround.push(action)
    }
    for (var i in TMP_CONFIG.round) {
        var action = new WodAction()
        action.copyFrom(TMP_CONFIG.round[i])
        this.cfg.round.push(action)
    }
    this.cfg.heal.condition = TMP_CONFIG.heal.condition

    for (var i=0; i<HEAL_ACTION_COUNT; i++){
        this.cfg.heal.good[i].copyFrom(TMP_CONFIG.heal.good[i])
        this.cfg.heal.medium[i].copyFrom(TMP_CONFIG.heal.medium[i])
        this.cfg.heal.bad[i].copyFrom(TMP_CONFIG.heal.bad[i])
    }

    if (typeof this.cfg.positionId != 'undefined'){
        this.cfg.positionId = TMP_CONFIG.positionId
    }

    this.refresh()
}

WodUiLevel.prototype.clear = function(defaultEntries) {
    this.cfg.initiative.setSkill(null)
    while (this.cfg.preround.length > 0) {
        this.cfg.preround.pop()
    }
    while (this.cfg.round.length > 0) {
        this.cfg.round.pop()
    }

    if (defaultEntries){
        this.cfg.preround.push(new WodAction())
        this.cfg.round.push(new WodAction())
    }


    this.cfg.heal.condition = WOD_MATE_CONDITION_MEDIUM

    for (var i=0; i<HEAL_ACTION_COUNT; i++){
        this.cfg.heal.good[i].setSkill(null)
        this.cfg.heal.medium[i].setSkill(null)
        this.cfg.heal.bad[i].setSkill(null)
    }

    this.refresh()
}

WodUiLevel.prototype.refresh = function() {
    if (typeof this.cfg.overwriteStandard != 'undefined') {
        this.overwriteCheckbox.setVisible(true)
        this.overwriteLabel.setVisible(true)
        this.overwriteCheckbox.setChecked(this.cfg.overwriteStandard)
        this.setWrapperVisible(this.cfg.overwriteStandard)
    } else {
        this.overwriteCheckbox.setVisible(false)
        this.overwriteLabel.setVisible(false)
        this.setWrapperVisible(true)
    }
    this.positionDropdown.setSelectedPositionId(this.cfg.positionId)

    if (typeof this.initiativeDropdown != 'undefined') {
        this.initiativeDropdown.refresh()
    }

    this.preroundActionList.refresh()
    this.roundActionList.refresh()
    this.healConditionDropdown.setSelectedOption(this.cfg.heal.condition)

    if (this.have_healing) {
        for (var i=0; i<HEAL_ACTION_COUNT; i++){

            this.healGoodDropdowns[i].refresh()
            this.healMediumDropdowns[i].refresh()
            this.healBadDropdowns[i].refresh()
        }
    }
}

WodUiLevel.prototype.setWrapperVisible = function(visible) {
    if (visible) {
        this.wrapper.setStyleProperty('display', 'block')
    } else {
        this.wrapper.setStyleProperty('display', 'none')
    }
}

WodUiLevel.prototype.setCopyButtonVisible = function(visible) {
    this.copyButton.setVisible(visible)
}

WodUiLevel.prototype.setCopyAnyButtonVisible = function(visible) {
    this.copyAnyButton.setVisible(visible)
}

WodUiLevel.prototype.setPasteAnyButtonVisible = function() {
    this.pasteAnyButton.setVisible( TMP_CONFIG != null )
}

WodUiLevel.prototype.setPositionDropdownVisible = function(visible) {
    this.positionHeading.setVisible(visible)
    this.positionDropdown.setVisible(visible)
}

function WodUiLinebreak() {

    WodUiWidget.call(this, 'br')

}

WodUiLinebreak.clone(WodUiWidget)

function WodUiList() {

    WodUiWidget.call(this, 'div')

    this.setClass('wod-list')

    this.table = new WodUiWidget('table')
    this.table.setClass('wod-list-table')
    this.table.setStyleProperty('width', '100%')
    this.appendChild(this.table)

    this.tbody = new WodUiWidget('tbody')
    this.table.appendChild(this.tbody)

    this.tr = new WodUiWidget('tr')
    this.tbody.appendChild(this.tr)

    this.listTd = new WodUiWidget('td')
    this.listTd.setClass('wod-list-items')
    this.tr.appendChild(this.listTd)

    this.buttonTd = new WodUiWidget('td')
    this.buttonTd.setClass('wod-list-buttons')
    this.tr.appendChild(this.buttonTd)

    this.items = new Array()
    this.selectedIndex = -1

}

WodUiList.clone(WodUiWidget)

/**
*
*/
WodUiList.prototype.appendItem = function(item) {
    this.insertItem(item)
}

/**
*
*/
WodUiList.prototype.prependItem = function(item) {
    this.insertItem(item, 0)
}

/**
*
*/
WodUiList.prototype.insertItem = function(item, index) {
    if (typeof index == 'undefined') {
        this.items.push(item)
        this.listTd.appendChild(item)
        item.setList(this)
    } else if (typeof index == 'number') {

        assert( Math.round(index) == index,
        'WodUiList.insertItem(widget,index), IllegalArgumentException: Non integer value for index')

        if (index < 0) {
            this.listTd.insertItem(item, 0)
        } else if (index >= this.items.length) {
            this.insertItem(item)
        } else {
            this.listTd.insertChild(item, this.items[index])
            this.items.splice(index, 0, item)
            item.setList(this)
        }
    } else {
        assert(false, 'WodUiList.insertItem(widget,index), IllegalArgumentException: Non integer value for index')
    }
}

/**
*
*/
WodUiList.prototype.removeItem = function(index) {
    if (index) {
        assert(index >= 0,'WodUiList.removeItem(index), IndexOutOfBoundsException: index < 0')
        assert(index < this.items.length,'WodUiList.removeItem(index), IndexOutOfBoundsException: index >= itemCount')
    } else {
        index = this.selectedIndex
    }

    if (index >= 0) {

        // Element im DOM entfernen.
        var item = this.items[index]
        this.listTd.removeChild(item)
        this.items.splice(index, 1)

        if (this.items.length == 0) {

            this.selectedIndex = -1
            this.fireSelectionChanged()

        } else {

            if (this.selectedIndex >= index) {
                if (this.selectedIndex == this.items.length) {
                    this.selectedIndex = -1
                    this.setSelectedIndex(this.items.length-1)
                } else {
                    var tmpIndex = this.selectedIndex
                    this.selectedIndex = -1
                    this.setSelectedIndex(tmpIndex);
                }
            }

        }

    }
}

/**
*
*/
WodUiList.prototype.moveUp = function(index) {

    if (index) {
        assert(index >= 0, 'WodUiList.moveUp(index), IndexOutOfBoundsException: index < 0')
        assert(index < this.items.length,'WodUiList.moveUp(index), IndexOutOfBoundsException: index >= itemCount')
    } else {
        index = this.selectedIndex
    }

    if (index > 0 && this.items.length > 1) {

        // Elemente im DOM tauschen.
        var aboveItem = this.items[this.selectedIndex-1]
        var selectedItem = this.items[this.selectedIndex]
        this.listTd.removeChild(selectedItem)
        this.listTd.insertChild(selectedItem, aboveItem)

        // Elemente im Items Array tauschen.
        this.items.splice(
        this.selectedIndex-1, 2,
        this.items[this.selectedIndex],
        this.items[this.selectedIndex-1]
        );

        this.setSelectedIndex(this.selectedIndex-1)

    }

}

/**
*
*/
WodUiList.prototype.removeAllItems = function() {
    this.listTd.removeAllChildren()
    for (var i in this.items) {
        var item = this.items[i]
        item.setSelected(false)
    }
    this.items = new Array()
    this.selectedIndex = -1
}

/**
*
*/
WodUiList.prototype.moveDown = function(index) {

    if (index) {
        assert(index >= 0, 'WodUiList.moveDown(index), IndexOutOfBoundsException: index < 0')
        assert(index < this.items.length, 'WodUiList.moveDown(index), IndexOutOfBoundsException: index >= itemCount')
    } else {
        index = this.selectedIndex
    }

    if (index >= 0 && index < this.items.length-1 && this.items.length > 1) {

        // Elemente im DOM tauschen.
        var selectedItem = this.items[this.selectedIndex]
        var belowItem = this.items[this.selectedIndex+1]
        this.listTd.removeChild(belowItem)
        this.listTd.insertChild(belowItem, selectedItem)

        // Elemente im Items Array tauschen.
        this.items.splice(
        this.selectedIndex, 2,
        this.items[this.selectedIndex+1],
        this.items[this.selectedIndex]
        )

        this.setSelectedIndex(this.selectedIndex+1)

    }

}

WodUiList.prototype.setSelectedIndex = function(index) {
    assert(index >= 0,' WodUiList.setSelectedIndex(index), IndexOutOfBoundsException: index < 0')
    assert(index < this.items.length, 'WodUiList.setSelectedIndex(index), IndexOutOfBoundsException: index >= itemCount')

    if (this.selectedIndex != -1) {
        this.items[this.selectedIndex].setSelected(false)
    }
    this.selectedIndex = index
    if (this.selectedIndex != -1) {
        this.items[this.selectedIndex].setSelected(true)
    }
    this.fireSelectionChanged();
}

WodUiList.prototype.clearSelection = function(index) {
    if (this.selectedIndex != -1) {
        this.items[this.selectedIndex].setSelected(false)
    }
    this.selectedIndex = -1
}

WodUiList.prototype.getSelectedIndex = function() {
    return this.selectedIndex
}

WodUiList.prototype.getItemCount = function() {
    return this.items.length
}

WodUiList.prototype.getItemIndex = function(item) {
    var i
    for (var i=0; i<this.items.length; i++) {
        if (this.items[i] == item) {
            return i
        }
    }
    return -1
}

WodUiList.prototype.setSelectedItem = function(item) {
    index = this.getItemIndex(item)
    if (index != -1) {
        this.setSelectedIndex(index)
    }
}

WodUiList.prototype.getSelectedItem = function() {
    if (this.selectedIndex == -1) {
        return null
    } else {
        return this.items[this.selectedIndex]
    }
}

WodUiList.prototype.getItem = function(index) {
    assert(index >= 0, 'WodUiList.getItem(index), IndexOutOfBoundsException: index < 0')
    assert(index < this.items.length, 'WodUiList.getItem(index), IndexOutOfBoundsException: index >= itemCount')

    return this.items[index]
}

WodUiList.prototype.setSelectionChangeListener = function(listener) {
    this.selectionChangeListener = listener
}

WodUiList.prototype.fireSelectionChanged = function() {
    if (this.selectionChangeListener) {
        this.selectionChangeListener()
    }
}

WodUiList.prototype.addButton = function(buttonWidget, clickListener) {
    this.buttonTd.appendChild(buttonWidget)
    buttonWidget.setClickListener(clickListener)
}

WodUiList.prototype.getDefaultDisplay = function() {
    return 'block'
}


function WodUiListItem() {

    WodUiWidget.call(this, 'div')

    this.setSelected(false)

}

WodUiListItem.clone(WodUiWidget)

WodUiListItem.prototype.setList = function(list) {
    this.list = list
    var _this = this
    this.setClickListener(function() {
        _this.list.setSelectedItem(_this)
    })
}

WodUiListItem.prototype.setSelected = function(selected) {
    this.selected = selected
    if (selected) {
        this.setClass('wod-list-item-selected')
    } else {
        this.setClass('wod-list-item')
    }
}

WodUiListItem.prototype.isSelected = function() {
    return this.selected
}
/**
* Widget um eine Liste von Actions zu verwalten.
*/
function WodUiActionList(skills, actions) {

    WodUiWidget.call(this, 'div')

    this.setStyleProperty('width', '950px')

    this.actions = actions

    var _this = this

    this.modBox = new WodUiWidget('div')
    this.modBox.setStyleProperty('width', '300px')
    this.modBox.setStyleProperty('paddingBottom', '10px')
    this.modBox.setStyleProperty('float', 'right')
    this.appendChild(this.modBox)

    this.list = new WodUiList()
    this.list.table.setStyleProperty('width', '640px')
    this.list.table.setStyleProperty('height', '400px')
    this.list.setSelectionChangeListener(function() {
        _this.actionSelectionChanged()
    })
    this.appendChild(this.list)

    this.list.addButton(
    new WodUiImage('button-up.png', 24, 24, WOD_STR.ActionList.buttons.up),
    function(event) {
        _this.list.moveUp()
        _this.rebuildModel()
    }
    )

    this.list.addButton(
    new WodUiImage('button-toggle.png', 24, 24, WOD_STR.ActionList.buttons.toggle),
    function() {
        var item = _this.list.getSelectedItem()
        if (item) {
            item.toggleEnabled()
        }
    }
    )

    this.list.addButton(
    new WodUiImage('button-down.png', 24, 24, WOD_STR.ActionList.buttons.down),
    function() {
        _this.list.moveDown()
        _this.rebuildModel()
    }
    )

    this.list.addButton(
    new WodUiImage('button-add.png', 24, 24, WOD_STR.ActionList.buttons.add),
    function() {
        _this.addAction(new WodAction())
        _this.rebuildModel()
    }
    )

    this.list.addButton(
    new WodUiImage('button-del.png', 24, 24, WOD_STR.ActionList.buttons.remove),
    function() {
        _this.list.removeItem()

        if (_this.list.getItemCount()==0){
            _this.addAction(new WodAction())
        }

        _this.rebuildModel()
    }
    )

    this.list.addButton(
    new WodUiImage('button-copy.png', 24, 24, WOD_STR.ActionList.buttons.copy),
    function() {


        var src = _this.getSelectedAction()

        if (typeof src != 'undefined') {
            var dst = new WodAction()

            dst.copyFrom(src)
            _this.addAction(dst)
            _this.rebuildModel()
            _this.list.setSelectedIndex( _this.list.getItemCount()-1 )
        }
    }
    )



    //
    // Fertigkeit (Dropdown)
    //

    this.skillHeading = new WodUiHeading(4, WOD_STR.ActionList.skill)
    this.modBox.appendChild(this.skillHeading)

    this.skillDropdown = new WodUiSkillDropdown(skills)
    this.skillDropdown.setStyleProperty('width', '100%')
    this.skillDropdown.setSelectionChangeListener(function() {
        _this.skillSelectionChanged()
    })
    this.modBox.appendChild(this.skillDropdown)

    //
    // Gegenstände (Dropdown(s))
    //

    this.itemHeading = new WodUiHeading(4, WOD_STR.ActionList.item)
    this.modBox.appendChild(this.itemHeading)

    this.itemDropdown = new WodUiItemDropdown()
    this.itemDropdown.setStyleProperty('width', '100%')
    this.itemDropdown.setSelectionChangeListener(function() {
        _this.itemSelectionChanged()
    })
    this.modBox.appendChild(this.itemDropdown)

    var itemGemLabel = new WodUiHeading(4, WOD_STR.Wod.item.socket + ' ')
    this.modBox.appendChild( itemGemLabel )

    var isInline = false
    this.itemGemSelect = new WoDUiGemDropDown( itemGemLabel, isInline )
    this.itemGemSelect.setSelectionChangeListener(function() {
      _this.itemSelectionChanged()
    })

    this.modBox.appendChild( this.itemGemSelect )

    this.ammoHeading = new WodUiHeading(4, WOD_STR.ActionList.ammo)
    this.modBox.appendChild(this.ammoHeading)


    this.ammoDropdowns =  new Object()
    this.ammoGemSelects = new Object()

    for (var itemClassId in THE_ENV.ammoClasses) {

        var dropdown = new WodUiItemDropdown(THE_ENV.ammoClasses[itemClassId], false)
        dropdown.setStyleProperty('width', '100%')
        dropdown.setSelectionChangeListener(function(itemClassId) {
            _this.ammoSelectionChanged(itemClassId)
        }, itemClassId)
        this.ammoDropdowns[itemClassId] = dropdown
        this.modBox.appendChild(dropdown)

        var itemGemLabel = false
        var isInline     = false

        var itemGemSelect = new WoDUiGemDropDown( itemGemLabel, isInline )
        itemGemSelect.setSelectionChangeListener(function( aItemClassId ) {
             _this.ammoSelectionChanged( aItemClassId )
        }, itemClassId )

        this.modBox.appendChild(itemGemSelect)
        this.ammoGemSelects[itemClassId] = itemGemSelect
        this.modBox.appendChild(itemGemSelect)
    }

    //
    // Positionen (Dropdown und Liste)
    //

    this.positionHeading = new WodUiHeading(4, WOD_STR.ActionList.position)
    this.modBox.appendChild(this.positionHeading)

    this.positionDropdown = new WodUiPositionDropdown(wod_createPositions(true, true))
    this.positionDropdown.setStyleProperty('width', '100%')
    this.positionDropdown.setSelectionChangeListener(function() {
        _this.positionSelectionChanged()
    })
    this.modBox.appendChild(this.positionDropdown)

    this.positionsHeading = new WodUiHeading(4, WOD_STR.ActionList.positions)
    this.modBox.appendChild(this.positionsHeading)

    this.customPositionsDropdown = new WodUiDropdown()
    this.customPositionsDropdown.addOption(WOD_POSOPTS_DEFAULT, WOD_STR.ActionList.customPositions.no)
    this.customPositionsDropdown.addOption(WOD_POSOPTS_CUSTOM,  WOD_STR.ActionList.customPositions.yes)
    this.customPositionsDropdown.addOption(WOD_POSOPTS_RAND,    WOD_STR.ActionList.customPositions.rand)


    this.customPositionsDropdown.setStyleProperty('width', '100%')
    this.customPositionsDropdown.setSelectionChangeListener(function() {
        _this.customPositionsSelectionChanged()
    })
    this.modBox.appendChild(this.customPositionsDropdown)

    this.positionList = new WodUiPositionList(wod_createPositions(true))
    this.positionList.setStyleProperty('width', '100%')
    this.positionList.setPositionsChangeListener(function() {
        _this.positionsChanged()
    })
    this.modBox.appendChild(this.positionList)



    this.repeatHeading = new WodUiHeading(4, WOD_STR.ActionList.repeat_hl)
    this.modBox.appendChild(this.repeatHeading)


    this.repeatDropdown = new WodUiDropdown()
    this.repeatDropdown.addOption(WOD_EXEC_DEFAULT,   WOD_STR.ActionList.defaction)
    this.repeatDropdown.addOption(WOD_EXEC_REPEAT,    WOD_STR.ActionList.repeat)
    this.repeatDropdown.addOption(WOD_EXEC_ONCEONLY,  WOD_STR.ActionList.onceonly)
    this.repeatDropdown.addOption(WOD_EXEC_RANDOM,    WOD_STR.ActionList.random)

    this.repeatDropdown.setStyleProperty('width', '100%')
    this.repeatDropdown.setSelectionChangeListener(function() {
        _this.getSelectedAction().repeat = _this.repeatDropdown.getSelectedOption()
        _this.list.getSelectedItem().refresh()
    })
    this.modBox.appendChild(this.repeatDropdown)




    this.refreshModVisibility()

}

WodUiActionList.clone(WodUiWidget)

WodUiActionList.prototype.setActions = function(actions) {
    this.actions = actions
    this.refresh()
}

WodUiActionList.prototype.rebuildModel = function() {
    while (this.actions.length > 0) {
        this.actions.pop()
    }
    var count = this.list.getItemCount()
    for (var i=0; i<count; i++) {
        this.actions.push(this.list.getItem(i).action)
    }
}

/**
* Neue Action der Liste hinzufügen.
* @param action Die Action welche hinzugefügt werden soll. Wenn keine Action
* übergeben wird, dann wird eine neue Action erzeugt.
*/
WodUiActionList.prototype.addAction = function(action) {

    this.list.appendItem(new WodUiActionListItem(action))

}

/**
* Gibt die aktuell angewählt Action zurück.
*/
WodUiActionList.prototype.getSelectedAction = function() {
    var item = this.list.getSelectedItem()
    if (item) {
        return item.action
    } else {
        return null
    }
}

/**
* Diese Methode wird immer aufgerufen, wenn sich die aktuelle Auswahl der
* Liste geändert hat.
*/
WodUiActionList.prototype.actionSelectionChanged = function() {

    this.refreshModVisibility()
}

/**
* Diese Methode wird immer aufgerufen, wenn sich die Auswahl der Fertigkeit
* geändert hat.
*/
WodUiActionList.prototype.skillSelectionChanged = function() {

    var action = this.getSelectedAction()

    if (action.setSkill(this.skillDropdown.getSelectedSkill())) {
        this.refreshModVisibility()
        this.list.getSelectedItem().refresh()

        skill=this.skillDropdown.getSelectedSkill();

        if (typeof skill != 'undefined' && skill.id>0){

            skill.item=null

            var needEmptyAction=true

            for (var i=0; i<this.list.items.length; i++){
                if (typeof this.list.items[i].action == 'undefined'
                    || typeof this.list.items[i].action.skill == 'undefined'){
                    needEmptyAction=false

                    if (typeof this.list.items[i].action !='undefined') {
                       this.list.items[i].action.defaultAmmoIds=null
                       this.list.items[i].action.defaultAmmoGems=null
                    }
                }
            }

            if (needEmptyAction){
                this.addAction(new WodAction())
                this.rebuildModel()
            }
        }

    }

}

/**
* Diese Methode wird aufgerufen, wenn sich die Auswahl des Gegenstandes
* geändert hat.
*/
WodUiActionList.prototype.itemSelectionChanged = function() {

    var action = this.getSelectedAction()
    if (action.setItem(this.itemDropdown.getSelectedItem(), this.itemGemSelect.getSelectedOption())) {
        this.refreshModVisibility()
        this.list.getSelectedItem().refresh()
    }
}

WodUiActionList.prototype.ammoSelectionChanged = function(itemClassId) {

    var action = this.getSelectedAction()

    if ( (action.defaultAmmoIds)
        && (typeof action.defaultAmmoIds[itemClassId] != 'undefined')) {
        action.defaultAmmoIds[itemClassId]=WOD_ITEM_AUTO
        action.defaultAmmoGems[itemClassId]=''
    }

    var newAmmoItem = this.ammoDropdowns[itemClassId].getSelectedItem()

    var ammoItemChanged = newAmmoItem != action.ammo[itemClassId]

    action.ammo[itemClassId]    = newAmmoItem
    action.ammoGem[itemClassId] = ammoItemChanged
                                ? WOD_SOCKET_AUTO
                                : this.ammoGemSelects[itemClassId].getSelectedOption()


    this.refreshModVisibility()
    this.list.getSelectedItem().refresh()
}

/**
* Diese Methode wird immer aufgerufen, wenn sich die Auswahl der Positionen
* geändert hat.
*/
WodUiActionList.prototype.positionSelectionChanged = function() {

    var action = this.getSelectedAction()

    if (action.setPositionId(this.positionDropdown.getSelectedPositionId())) {
        this.list.getSelectedItem().refresh()
    }

}

/**
*
*/
WodUiActionList.prototype.customPositionsSelectionChanged = function() {

    var action = this.getSelectedAction()

    var custom = this.customPositionsDropdown.getSelectedOption()
    if (custom == WOD_POSOPTS_CUSTOM) {

        action.positions = wod_createPositions()

        if ( action.skill.friend ) {
            for (var friendPosId in WOD_CFG.general.friendPositions) {
                for (var friendPosInner in WOD_CFG.general.friendPositions[friendPosId]) {
                    action.positions[friendPosId][friendPosInner] = WOD_CFG.general.friendPositions[friendPosId][friendPosInner]
                }
            }
        } else {
            for (var enemyPosId in WOD_CFG.general.enemyPositions) {
                for (var enemyPosInner in WOD_CFG.general.enemyPositions[enemyPosId]) {
                    action.positions[enemyPosId][enemyPosInner] = WOD_CFG.general.enemyPositions[enemyPosId][enemyPosInner]
                }
            }
        }
    } else if (custom == WOD_POSOPTS_RAND) {
        action.positions = 'rand'
    } else {
        action.positions=null
    }

    this.refreshModVisibility()
    this.list.getSelectedItem().refresh()

}

/**
* Diese Methode wird aufgerufen, wenn sich die Auswahl der Positionen
* geändert hat.
*/
WodUiActionList.prototype.positionsChanged = function() {

    this.list.getSelectedItem().refresh()

}

/**
* Überprüft die Sichtbarkeit der Dropdowns und Listen und setzt die Auswahl
* von diesen abhängig von der aktuell ausgewählten Aktion. Diese Methode
* wird immer aufgerufen, wenn sich irgend etwas an der aktuell ausgewählten
* Aktion ändert oder eine andere Aktion gewählt wird.
*/
WodUiActionList.prototype.refreshModVisibility = function() {

    var action = this.getSelectedAction()
    if (action) {
        this.repeatDropdown.setVisible(true)
        this.repeatDropdown.setSelectedOption(action.repeat)
        this.repeatHeading.setVisible(true)
        this.skillHeading.setVisible(true)
        this.skillDropdown.setVisible(true)
        var skill = action.skill
        if (skill) {
            this.skillDropdown.setSelectedSkill(skill)
            // item dropdown
            if (skill.items) {
                this.itemHeading.setVisible(true)
                this.itemDropdown.setItems(skill.items)
                this.itemDropdown.setVisible(true)
                this.itemDropdown.setSelectedItem(action.item)
            } else {
                this.itemHeading.setVisible(false)
                this.itemDropdown.setVisible(false)
                this.itemGemSelect.setVisible(false)
            }
            // ammo
            this.refreshAmmo()

            // position list
            this.positionDropdown.setSelectedPositionId(action.positionId)

            var showPositionList;

            if (typeof action.positions == 'string' && action.positions == 'rand'){
                this.customPositionsDropdown.setSelectedOption(WOD_POSOPTS_RAND)
                showPositionList=false
            } else if (action.positions != null) {
                this.customPositionsDropdown.setSelectedOption(WOD_POSOPTS_CUSTOM)
                showPositionList=true
            } else {
                this.customPositionsDropdown.setSelectedOption(WOD_POSOPTS_DEFAULT)
                showPositionList=false
            }

            if  (showPositionList){
                this.positionList.setPositions(action.positions)
            }

            switch (skill.positions) {
                case WOD_POSITIONS_FIXED:
                this.positionHeading.setVisible(false)
                this.positionDropdown.setVisible(false)
                this.positionsHeading.setVisible(false)
                this.customPositionsDropdown.setVisible(false)
                this.positionList.setVisible(false)
                break
                case WOD_POSITIONS_ONE:
                this.positionHeading.setVisible(true)
                this.positionDropdown.setVisible(true)
                this.positionDropdown.enableOption(WOD_POSITION_BACK, skill.not_in_back)


                this.positionsHeading.setVisible(false)
                this.customPositionsDropdown.setVisible(false)
                this.positionList.setVisible(false)
                break
                case WOD_POSITIONS_MANY:
                this.positionHeading.setVisible(false)
                this.positionDropdown.setVisible(false)
                this.positionsHeading.setVisible(true)
                this.customPositionsDropdown.setVisible(true)
                this.positionList.setVisible(showPositionList)
                break
            }
        } else {
            this.skillDropdown.setSelectedSkill(null)
            this.itemHeading.setVisible(false)
            this.itemDropdown.setVisible(false)
            this.itemGemSelect.setVisible(false)
            this.refreshAmmo()
            this.positionHeading.setVisible(false)
            this.positionDropdown.setVisible(false)
            this.positionsHeading.setVisible(false)
            this.customPositionsDropdown.setVisible(false)
            this.positionList.setVisible(false)
        }
    } else {
        this.repeatDropdown.setVisible(false)
        this.repeatHeading.setVisible(false)
        this.skillHeading.setVisible(false)
        this.skillDropdown.setVisible(false)
        this.itemHeading.setVisible(false)
        this.itemDropdown.setVisible(false)
        this.itemGemSelect.setVisible(false)
        this.refreshAmmo();
        this.positionHeading.setVisible(false)
        this.positionDropdown.setVisible(false)
        this.positionsHeading.setVisible(false)
        this.customPositionsDropdown.setVisible(false)
        this.positionList.setVisible(false)
    }

    // Dies sollte "theoretisch" dafür sorgen, dass der browser die seite
    // neu layouted. Klappt nicht 100%, aber mit gefloateten modbox gibt es
    // scheinbar bei keinem browser mehr probleme.
    this.setStyleProperty('display', 'block')

}

WodUiActionList.prototype.refreshAmmo = function() {

    var action = this.getSelectedAction()

    if (action) {

        if (action.skill
            && action.item) {

            this.itemGemSelect.updateGemSelect( action.item, action.skill.itemClassId, action.socket )

            if (action.item.ammoClassIds
                && action.item.ammoClassIds.length) {

                this.ammoHeading.setVisible(true)

                for (var itemClassId in this.ammoDropdowns) {

                    var dropdown      = this.ammoDropdowns[itemClassId]
                    var itemgemselect = this.ammoGemSelects[itemClassId]

                    if (action.item.ammoClasses[itemClassId]) {
                        dropdown.setVisible(true)
                        dropdown.setSelectedItem(action.ammo[itemClassId])
                        itemgemselect.updateGemSelect( action.ammo[itemClassId], itemClassId, action.ammoGem[itemClassId] )

                    } else {
                        dropdown.setVisible(false)
                        dropdown.setSelectedItem(null)
                        itemgemselect.setVisible( false )
                    }
                }

                return

            } // if (action.item.ammo)

        } else { // if (action.skill && action.item)
            this.itemGemSelect.setVisible(false)
        }

    } else { // if (action)
        this.itemGemSelect.setVisible(false)
    }

    this.ammoHeading.setVisible(false)


    for (var itemClassId in this.ammoDropdowns) {
        var dropdown = this.ammoDropdowns[itemClassId]
        var itemgemselect = this.ammoGemSelects[itemClassId]

        dropdown.setVisible(false)
        dropdown.setSelectedItem(null)
        itemgemselect.setVisible( false )
    }
}

WodUiActionList.prototype.refresh = function() {
    this.list.removeAllItems()
    for (var i in this.actions) {
        this.addAction(this.actions[i])
    }
    this.refreshModVisibility()
}

function WodUiActionListItem(action) {

    WodUiListItem.call(this)

    this.label = new WodUiWidget('div')
    this.appendChild(this.label)

    this.labelSkill = new WodUiWidget('div')
    this.labelSkill.setClass('wod-list-item-label-skill')
    this.label.appendChild(this.labelSkill)

    this.labelItem = new WodUiWidget('div')
    this.labelItem.setClass('wod-list-item-label-item')
    this.label.appendChild(this.labelItem)

    this.labelAmmo = new WodUiWidget('div')
    this.labelAmmo.setClass('wod-list-item-label-ammo')
    this.label.appendChild(this.labelAmmo)

    this.labelPositions = new WodUiWidget('div')
    this.labelPositions.setClass('wod-list-item-label-positions')
    this.label.appendChild(this.labelPositions)

    this.setAction(action)
    this.setSelected(false)

    var _this = this
    this.setDoubleClickListener(function() {
        _this.toggleEnabled()
        _this.refresh()
    })

}

WodUiActionListItem.clone(WodUiListItem)

WodUiActionListItem.prototype.setAction = function(action) {
    this.action = action
    this.refresh()
}

WodUiActionListItem.prototype.refresh = function() {

    this.labelSkill.removeAllChildren()
    this.labelItem.removeAllChildren()
    this.labelAmmo.removeAllChildren()
    this.labelPositions.removeAllChildren()

    if (this.action.enabled) {
        this.label.setClass('')
    } else {
        this.label.setClass('disabled')
    }

    var skill = this.action.skill;

    if (skill) {

        var labelSkillString = skill.name

        switch (this.action.repeat) {
            case WOD_EXEC_ONCEONLY: labelSkillString+=' ' + WOD_STR.ActionListItem.onceonly; break;
            case WOD_EXEC_REPEAT:   labelSkillString+=' ' + WOD_STR.ActionListItem.repeat; break;
            case WOD_EXEC_RANDOM:   labelSkillString+=' ' + WOD_STR.ActionListItem.random; break;
        }

        this.labelSkill.appendChild(new WodUiText(labelSkillString))

        var item = this.action.item;
        if (item) {
            if (item != WOD_ITEM_AUTO) {
                itemobj=new WodUiSpan(item.name + ' ')
                if (!item.equipped) {
                    itemobj.setClass('warn')
                }
                this.labelItem.appendChild(itemobj)


                socket = this.action.socket
                socket_equipped = is_in_array( socket, item.equipped_sockets )

                if (typeof socket != 'undefined'
                    && socket != ''
                    && socket != WOD_SOCKET_AUTO) {

                    if (!socket_equipped) {
                        itemobj.setClass('warn')
                        obj = new WodUiLabel('!!')
                        obj.setClass('warn')
                        this.labelItem.appendChild(obj)
                    }

                    this.labelItem.appendChild( new WodUiGemImage(socket) )

                    if (!socket_equipped) {
                        itemobj.setClass('warn')
                        obj = new WodUiLabel('!!')
                        obj.setClass('warn')
                        this.labelItem.appendChild(obj)
                    }

                }
            }
        }

        var ammo = this.action.ammo;
        if (ammo) {
            var c = 0
            for (var i in ammo) {
                var ammoItem = ammo[i]
                var socket   = this.action.ammoGem[i]

                if (ammoItem != WOD_ITEM_AUTO) {
                    c += 1
                    if (c > 1) {
                        this.labelAmmo.appendChild(new WodUiText(', '))
                    }
                    var itemObj = new WodUiSpan(ammoItem.name)
                    if (!ammoItem.equipped) {
                        itemObj.setClass('warn')
                    }
                    this.labelAmmo.appendChild(itemObj)


                    socket_equipped = is_in_array( socket, ammoItem.equipped_sockets )

                    if (typeof socket != 'undefined'
                        && socket != ''
                        && socket != WOD_SOCKET_AUTO) {

                       var obj = new WodUiSpan(' ')
                       this.labelAmmo.appendChild(obj)

                        if (!socket_equipped) {
                            itemObj.setClass('warn')
                            var obj = new WodUiLabel('!!')
                            obj.setClass('warn')
                            this.labelAmmo.appendChild(obj)
                        }

                        this.labelAmmo.appendChild( new WodUiGemImage(socket) )

                        if (!socket_equipped) {
                           var obj = new WodUiLabel('!!')
                            obj.setClass('warn')
                            this.labelAmmo.appendChild(obj)
                        }

                    }


                }
            }
        }

        switch (skill.positions) {

            case WOD_POSITIONS_FIXED:
            break

            case WOD_POSITIONS_ONE:
            if ( (typeof this.action.positionId != 'undefined') && this.action.positionId != WOD_POSITION_AUTO) {
                this.labelPositions.appendChild(new WodUiText(WOD_STR.position[this.action.positionId]))
            }
            break;

            case WOD_POSITIONS_MANY:
            var positions = this.action.positions
            if (typeof positions == 'string'){
                this.labelPositions.appendChild(new WodUiText('('
                + WOD_STR.ActionList.customPositions[positions] + ')'))
            } else if (positions) {
                var posCount = 0
                for (var i in positions) {
                    var position = positions[i]
                    if (isValidPosition(position.id) && position.enabled) {
                        posCount += 1
                        if (posCount > 1) {
                            this.labelPositions.appendChild(new WodUiText(', '))
                        }
                        this.labelPositions.appendChild(new WodUiText(position.getName()))
                    }
                }
            }
            break

        } // switch (skill.positions)

    } else {
        this.labelSkill.appendChild(new WodUiText(WOD_STR.ActionListItem.unconfigured))
    }

}

WodUiActionListItem.prototype.setEnabled = function(enabled) {
    if (this.action.enabled != enabled) {
        this.action.enabled = enabled
        this.refresh()
    }
}

WodUiActionListItem.prototype.isEnabled = function() {
    return this.action.enabled
}

WodUiActionListItem.prototype.toggleEnabled = function() {
    this.setEnabled(! this.isEnabled())
}




function checkNumericKey(evt)
{
    evt = (evt) ? evt : event;
    var charCode = (evt.charCode)
    ? evt.charCode
    : (
    (evt.keyCode)
    ? evt.keyCode
    : (
    (evt.which)
    ? evt.which
    : 0
    )
    );

    return (charCode < 32
    || (charCode>=48 /*0*/ && charCode<=57 /*9*/)
    || (charCode==37 /*<=*/)
    || (charCode==39 /*=>*/)
    || (charCode == 46 /* entf */)
    );
}



function WodUiNumericInput(value) {

    WodUiInput.call(this, 'text', value)

    this.setClass('numeric')

    this.element.onkeypress=checkNumericKey
}



WodUiNumericInput.clone(WodUiInput)

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

function WodUiPositionList(positions) {

    WodUiList.call(this)

    this.setPositions(positions)

    var _this = this

    this.addButton(
    new WodUiImage('button-up.png', 24, 24, WOD_STR.PositionList.up),
    function() {
        var item = _this.getSelectedItem()
        if (item) {
            _this.moveUp()
            _this.rebuildPositions()
            _this.firePositionsChangeEvent()
        }
    }
    )

    this.addButton(
    new WodUiImage('button-toggle.png', 24, 24, WOD_STR.PositionList.toggle),
    function() {
        var item = _this.getSelectedItem()
        if (item) {
            _this.rebuildPositions()
            item.toggleEnabled()

            have_enabled=false;
            for (var i=0; i<_this.getItemCount() && !have_enabled; i++){
                pos=_this.getItem(i)
                if (pos.isEnabled())
                have_enabled=true
            }

            if (!have_enabled){
                if (_this.getSelectedIndex()>0)
                pos=_this.getItem( _this.getSelectedIndex() - 1)
                else
                pos=_this.getItem( 1 )
                pos.setEnabled(true)
            }

            _this.firePositionsChangeEvent()
        }
    }
    )

    this.addButton(
    new WodUiImage('button-down.png', 24, 24, WOD_STR.PositionList.down),
    function() {
        var item = _this.getSelectedItem()
        if (item) {
            _this.moveDown()
            _this.rebuildPositions()
            _this.firePositionsChangeEvent()
        }
    }
    )

}

WodUiPositionList.clone(WodUiList)

WodUiPositionList.prototype.firePositionsChangeEvent = function() {
    if (this.positionsChangeListener) {
        this.positionsChangeListener()
    }
}

WodUiPositionList.prototype.setPositionsChangeListener = function(listener) {
    this.positionsChangeListener = listener
}

WodUiPositionList.prototype.setPositions = function(positions) {
    this.positionMap = new Object()

    for (var i in positions) {
        var position = positions[i]
        if (isValidPosition(position.id))
        this.positionMap[position.id] = new WodUiPositionListItem(this, position)
    }
    this.positions = positions
    this.refresh()
}

WodUiPositionList.prototype.refresh = function() {
    this.removeAllItems()
    if (! this.positions) {
        return
    }
    for (var i in this.positions) {
        var position = this.positions[i]

        if (isValidPosition(position.id)) {
            var item = this.positionMap[position.id]
            item.setPosition(position)
            this.appendItem(item)
        }
    }
}

WodUiPositionList.prototype.rebuildPositions = function() {
    var count = this.getItemCount()
    for (var i=0; i<count; i+=1) {
        var item = this.getItem(i)
        this.positions[i] = item.position
    }
}

function WodUiPositionListItem(positionList, position) {

    WodUiListItem.call(this)

    this.positionList = positionList

    this.icon = new WodUiImage(position.id + ".png", 24, 24, position.getName())
    this.appendChild(this.icon)

    this.label = new WodUiWidget('span')
    this.appendChild(this.label)

    this.label.appendChild(new WodUiText(position.getName()))

    this.setEnabled(true)

    var _this = this
    this.setDoubleClickListener(function() {
        _this.toggleEnabled()
        _this.positionList.firePositionsChangeEvent()
    })

}

WodUiPositionListItem.clone(WodUiListItem)

WodUiPositionListItem.prototype.setPosition = function(position) {
    this.position = position
    this.refresh()
}

WodUiPositionListItem.prototype.getPosition = function() {
    return this.position
}

WodUiPositionListItem.prototype.setEnabled = function(enabled) {
    if (! this.position) {
        return
    }
    if (this.position.enabled != enabled) {
        this.position.enabled = enabled
        this.refresh()
    }
}

WodUiPositionListItem.prototype.refresh = function() {
    if (this.position.enabled) {
        this.label.setClass('')
    } else {
        this.label.setClass('disabled')
    }
}

WodUiPositionListItem.prototype.isEnabled = function() {
    if (! this.position) {
        return false
    }
    return this.position.enabled
}

WodUiPositionListItem.prototype.toggleEnabled = function() {
    if (! this.position) {
        return
    }
    this.setEnabled(! this.isEnabled())
}

function WodUiSkillDropdown(skills) {

    WodUiDropdown.call(this)
    this.setClass('wod-skill-dropdown')

    this.addOption(null, '')

    this.items = new Array()
    for (var i in skills) {
        var skill = skills[i]
        this.addOption(skill, skill.name)
    }

    var thisList = this

    this.setVisible(true)

}

WodUiSkillDropdown.clone(WodUiDropdown)

WodUiSkillDropdown.prototype.getSelectedSkill = function() {
    return this.getSelectedOption()
}

WodUiSkillDropdown.prototype.setSelectedSkill = function(skill) {
    this.setSelectedOption(skill)
}



/**
* Ein kombiniertes Dropdown aus einer Fertigkeit und einem Gegenstand. Diese
* spezielle Kombination wird für Heilfertigkeiten und Paradetalente benötigt.
*/
function WodUiSkillItemDropdown(skills, action) {

    WodUiWidget.call(this, 'span')

    this.setClass('orders_top_row')

    var _this = this

    this.skillDropdown = new WodUiSkillDropdown(skills)
    this.skillDropdown.setSelectionChangeListener(function() {
        _this.skillSelectionChanged()
    })
    this.appendChild(this.skillDropdown)

    this.itemDropdown = new WodUiItemDropdown()
    this.itemDropdown.setSelectionChangeListener(function() {
        _this.itemSelectionChanged()
    })
    this.appendChild(this.itemDropdown)
    this.itemDropdown.setVisible(false)

    var itemGemLabel = false // new WodUiLabel( ' ' + WOD_STR.Wod.item.socket + ' ')
    // this.appendChild( itemGemLabel )

    var isInline = true
    this.itemGemSelect = new WoDUiGemDropDown( itemGemLabel, isInline )
    this.itemGemSelect.setSelectionChangeListener(function() {
         _this.itemSelectionChanged()
    })

    this.appendChild( this.itemGemSelect )

    this.ammoDropdowns  = new Object()
    this.ammoGemSelects = new Object()

    for (var itemClassId in THE_ENV.ammoClasses) {

        var dropdown = new WodUiItemDropdown(THE_ENV.ammoClasses[itemClassId], false)

        dropdown.setSelectionChangeListener(function(itemClassId) {
            _this.ammoSelectionChanged( itemClassId )
        }, itemClassId)
        dropdown.setVisible(false)
        this.ammoDropdowns[itemClassId] = dropdown
        this.appendChild(dropdown)

        var itemGemLabel = false // new WodUiLabel( ' ' + WOD_STR.Wod.item.socket + ' ')
        var isInline     = true

        var itemGemSelect = new WoDUiGemDropDown( itemGemLabel, isInline )
        itemGemSelect.setSelectionChangeListener(function() {
             _this.ammoSelectionChanged( itemClassId )
        })
        this.ammoGemSelects[itemClassId] = itemGemSelect

        // this.appendChild( itemGemLabel )
        this.appendChild(itemGemSelect)
    }

    if (action) {
        this.setAction(action)
    }
}

WodUiSkillItemDropdown.clone(WodUiWidget)

WodUiSkillItemDropdown.prototype.setAction = function(action) {
    this.action = action
    if (action) {
        this.refresh()
    }
    this.refreshAmmo()
}

WodUiSkillItemDropdown.prototype.ammoSelectionChanged = function (itemClassId) {

    if (this.action) {

        var item = this.ammoDropdowns[itemClassId].getSelectedItem()
        var gems = this.ammoGemSelects[itemClassId].getSelectedOption()

        this.action.ammo[itemClassId]     = item
        this.action.ammoGem[itemClassId]  = gems

        this.ammoGemSelects[itemClassId].updateGemSelect( item, this.action.skill.itemClassId, gems )

    } else {
        this.ammoDropdowns[itemClassId].setVisible( false )
        this.ammoGemSelects[itemClassId].setVisible( false )
    }
}

WodUiSkillItemDropdown.prototype.refresh = function() {
    this.skillDropdown.setSelectedSkill(this.action.skill)
    var skill = this.action.skill

    if (skill) {
        if (skill.items) {
            this.itemDropdown.setItems(skill.items, this.action.item)
            this.itemDropdown.setSelectedItem(this.action.item)
            this.itemDropdown.setVisible(true)

            this.itemGemSelect.updateGemSelect( this.action.item, this.action.skill.itemClassId, this.action.socket )

            this.refreshAmmo()
            return
        }
    }
    this.itemDropdown.setVisible(false)
    this.itemDropdown.setSelectedItem(WOD_ITEM_AUTO)

    this.itemGemSelect.setVisible(false)

    this.refreshAmmo()
}

WodUiSkillItemDropdown.prototype.skillSelectionChanged = function() {
    this.action.setSkill(this.skillDropdown.getSelectedSkill())
    this.refresh()
}

WodUiSkillItemDropdown.prototype.refreshAmmo = function() {

    for (var itemClassId in THE_ENV.ammoClasses) {
        if (typeof this.ammoDropdowns[itemClassId] != 'undefined')
            this.ammoDropdowns[itemClassId].setVisible(false)
        if (typeof this.ammoGemSelects[itemClassId] != 'undefined')
            this.ammoGemSelects[itemClassId].setVisible(false)
    }

    if (this.action
        && this.action.skill
        && this.action.item
        && this.action.item.ammoClasses) {

        for (var itemClassId in THE_ENV.ammoClasses) {

            for (var ammoClassId in this.action.item.ammoClasses) {

                if (ammoClassId==itemClassId) {

                    this.ammoDropdowns[itemClassId].setVisible(true)

                    var ammoItem = this.action.ammo[itemClassId]
                    var ammoItemOk = typeof ammoItem != 'undefined' && ammoItem != null

                    if (!ammoItemOk) {

                        ammoItem   = this.ammoDropdowns[itemClassId].getSelectedItem()
                        ammoItemOk = ammoItem.isOfClass( itemClassId )
                    }

                    if (ammoItemOk) {
                        this.ammoDropdowns[itemClassId].setSelectedItem( ammoItem )
                        this.ammoGemSelects[itemClassId].updateGemSelect( ammoItem, ammoClassId, this.action.ammoGem[itemClassId])
                    } else {
                        this.ammoDropdowns[itemClassId].setSelectedItem( WOD_ITEM_AUTO )
                        this.ammoGemSelects[itemClassId].updateGemSelect( WOD_ITEM_AUTO, false, WOD_SOCKET_AUTO )
                    }
                }
            }
        }
    }
}

WodUiSkillItemDropdown.prototype.itemSelectionChanged = function() {

    this.action.setItem(this.itemDropdown.getSelectedItem(), this.itemGemSelect.getSelectedOption())
    this.refreshAmmo()

    this.itemGemSelect.updateGemSelect( this.action.item, this.action.skill.itemClassId, this.action.socket )
}





/**
* Eine gespeicherte Konfiguration (der Name davon)
* @param id der Konfiguration
* @param name vom Spieler vergebener Name
* @param active muss für genau eine Konfiguration true sein
* @author Christian Neise
*/
function WodProfile(id, name, active) {

    this.id          = id
    this.name        = name
    this.active      = active
}



/**
* @author Christian Neise
*/
function WodUiProfileDropdown(profiles) {

    WodUiDropdown.call(this)
    this.setClass('wod-profile-dropdown')

    if (READONLY==false){
        var profile = new WodProfile( -1, WOD_STR.Orders.newProfile, 0 )
        this.addOption(profile, profile.name)

        if (WOD_PROFILE_DISPLAYED==0){
            this.setSelectedProfile(profile);
            WOD_CURRENT_PROFILE=WOD_STR.Orders.headingUnamed
        }
    }

    this.items = new Array()
    var nr=1
    for (var i in profiles) {
        var profile = profiles[i]
        var label=nr++ +' ' + profile.name

        var added=''

        if (profile.active&CFG_ACTIVE){
            if (added!='')
                added+=','
            added+=WOD_STR.Orders.prf_active
        }
        if (profile.active&CFG_NEXT_DUNGEON){
            if (added!='')
                added+=','
            added+=WOD_STR.Orders.prf_next
        }
        if (profile.active&CFG_DUELS){
            if (added!='')
                added+=','
            added+=WOD_STR.Orders.prf_duels
        }

        if (added!='')
            label+=' (' + added + ')'

        this.addOption(profile, label)

        if (WOD_PROFILE_DISPLAYED==profile.id){
            this.setSelectedProfile(profile);
            WOD_CURRENT_PROFILE=WOD_STR.Orders.heading + profile.name
        }
    }

    if (READONLY==false){
        var profile = new WodProfile( -1, WOD_STR.Orders.newProfile, 0 )
        this.addOption(profile, profile.name)

        if (WOD_PROFILE_DISPLAYED==0){
            this.setSelectedProfile(profile);
            WOD_CURRENT_PROFILE=WOD_STR.Orders.headingUnamed
        }
    }

    var thisList = this

    this.setVisible(true)
}

/**
* @author Christian Neise
*/
WodUiProfileDropdown.clone(WodUiDropdown)

/**
* @author Christian Neise
*/
WodUiProfileDropdown.prototype.getSelectedProfile = function() {
    return this.getSelectedOption()
}

/**
* @author Christian Neise
*/
WodUiProfileDropdown.prototype.setSelectedProfile = function(profile) {
    this.setSelectedOption(profile)
}


/**
* @author Christian Neise
*/
function profileSave( orders ){

    var profile = orders.profileDropdown.getSelectedProfile();

    if (profile.id>0){

        if ( profile.id != WOD_PROFILE_DISPLAYED ) {
            var msg= WOD_STR.Orders.saveConf
            msg = msg.replace(/PROFILE/g, profile.name)
            if (!js_confirm(msg))
                return
        }

        submitForm( orders, 'save', profile.id )

    } else {

        var name=prompt( WOD_STR.Orders.newProfilePrompt, WOD_STR.Orders.newProfileName );

        if (name) {
            submitForm( orders, 'save as', name )
        }
    }
}


/**
* @author Christian Neise
*/
function profileSetDefault( orders, active ){

    var profile = orders.profileDropdown.getSelectedProfile();

    if (profile.id > 0){
        submitForm( orders, 'toggle_' + active, profile.id )
    } else {
        js_alert( WOD_STR.Orders.setdefault_denied )
    }
}

/**
* @author Christian Neise
*/
function profileLoad( orders ){
    var profile = orders.profileDropdown.getSelectedProfile();

    submitForm( orders, 'load', profile.id )
}

/**
* @author Christian Neise
*/
function profileRemove( orders ){

    var profile = orders.profileDropdown.getSelectedProfile();

    if (profile.id > 0){
        var msg=WOD_STR.Orders.remove_conf

        msg = msg.replace(/{PROFILE}/g, profile.name)

        if (js_confirm(msg)){
            submitForm( orders, 'delete', profile.id )
        }
    } else {
        js_alert( WOD_STR.Orders.remove_denied )
    }
}

function submitForm( orders, action, profile ){

    WOD_CFG.notes.text=WOD_CFG.ui_orders.notes.textarea.getText();
    WOD_CFG.notes.hint=WOD_CFG.ui_orders.notes.hintarea.getText();

    var xs = new XmlSerializer()
    WOD_CFG.serialize(xs)

    orders.data.setAttribute('value', base64_encode(xs.data) )
    orders.action.setAttribute('value', action)
    orders.profile.setAttribute('value', profile)
    orders.save_tab.setAttribute('value', SELECTED_TAB)
    orders.save_lvl.setAttribute('value', SELECTED_LVL)
    orders.save_duel.setAttribute('value', SELECTED_DUEL)

    formSubmit(orders.form.element);

}







function WodSetConfig(cur_profile, lvl_count, heal_action_count, img_path, closebut,
                      plain_cfg, sel_tab, sel_lvl, sel_duel, title, ro, GT, wod_post_id, have_clan_quests, have_clans, have_ambush_parade ){

    WOD_PROFILE_DISPLAYED=cur_profile
    DUNGEON_LEVEL_COUNT=lvl_count
    HEAL_ACTION_COUNT=heal_action_count
    PFAD_BILDER=img_path
    CLOSEBUTTON=closebut
    PLAINCONFIG=plain_cfg
    SELECTED_TAB=sel_tab
    SELECTED_LVL=sel_lvl
    SELECTED_DUEL=sel_duel
    PAGE_TITLE=title
    READONLY=ro
    if (typeof GT!='undefined') {
        GAMETYPE=GT
    }
    WOD_POST_ID=wod_post_id
    HAVE_BATTLES=have_clan_quests
    HAVE_CLANS=have_clans

    HAVE_AMBUSH_PARADE = have_ambush_parade
}

function WodSetProfiles( profiles ){
    WOD_PROFILES=profiles
}

function WodSetEnv( env ){
    THE_ENV=env
}


var warned=false
function assert( expression, message ){

    if (expression==false && warned==false){

        js_alert(WOD_STR.Orders.errorHint + message)
        warned=true
        js_goto_url(PFAD_WOD+'/hero/skillconf_nojs.php?setview[expert_nojs]' + GET_SESSION_PARAM )
    }
}


function wodSetCfg( cfg ){
    WOD_CFG=cfg;
}

function FeatureHaveAllPositions() {
    return GAMETYPE!='SM';
}

function FeatureHaveMagic() {
    return GAMETYPE!='SM';
}

function FeatureHaveAmbush() {
    return HAVE_AMBUSH_PARADE
}

function FeatureRecover() {
    return GAMETYPE!='SM';
}

function isValidPosition( posid ) {
    return FeatureHaveAllPositions()
    || posid=='auto'
    || posid=='kp_rand'
    || indexOf(WOD_POSITION_RESTRICTED, posid)>=0;
}
