/*
 * This will be submitted to server as the config setup
 * It is of course properly initialized when page is loaded
 */
WOD_CFG = new WodConfig()

THE_ENV = new WodEnvironment()

THE_ORDERS = new WodUiOrders() // the root of generated config UI

WOD_ITEM_AUTO = new WodItem(0, WOD_STR.Wod.item.auto, [], [], true)
WOD_ITEM_NONE = new WodItem(0, WOD_STR.Wod.item.none, [], [], true)

WOD_SOCKET_AUTO = "-"

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
