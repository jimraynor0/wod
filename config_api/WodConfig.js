function WodConfig(general, dungeon, duel, notes) {
    this.general = general ? general : new WodGeneral()
    this.dungeon = dungeon ? dungeon : new WodDungeon()
    this.duel    = duel    ? duel    : new WodDuel()
    this.notes   = notes   ? notes   : new WodNotes()
}

// created in wod_orders_init()
// WOD_CFG.ui_orders = new WodUiOrders(fig_type, fig_id, url, WOD_CFG, world, session_hero_id, is_popup, php_session_name, php_session_id )

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

function WodLevel(positionId, initiative, preround, round, heal, overwriteStandard) {
    this.positionId = positionId ? positionId : null
    this.initiative = initiative ? initiative : new WodAction()
    this.preround   = preround   ? preround   : new Array() // array of WodAction
    this.round      = round      ? round      : new Array() // array of WodAction
    this.heal       = heal       ? heal       : new WodHeal()
    this.overwriteStandard = overwriteStandard
}

/**
  * @param condition: condition enum to start healing
  * @param good, medium, bad: array of WodAction to apply when healing
  */
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
