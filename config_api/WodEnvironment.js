function WodEnvironment( itemlist, skilllist, itemClassIdsWithSockets, have_no_dungeon_configs ) {
  /* id -> item mapping */
  this.items = new Object()

  /* class_id -> item array mapping */
  this.itemClasses = new Object()

  /* class_id -> item array mapping */
  this.ammoClasses = new Object()

  /* id -> skill mapping */
  this.skills = Object()

  this.initiativeSkills         = new Array()
  this.preroundSkills           = new Array()
  this.roundSkills              = new Array()
  this.defenseCloseCombatSkills = new Array()
  this.defenseDistanceSkills    = new Array()
  this.defenseSocialSkills      = new Array()
  this.defenseMagicSkills       = new Array()
  this.defenseAmbushSkills      = new Array() // don't think it's used
  this.healSkills               = new Array()

  /* Not sure what it is but looks important */
  this.itemClassIdsWithSockets = new Array()
  for (var i in itemClassIdsWithSockets) {

      var itemClassId = itemClassIdsWithSockets[i]
      this.itemClassIdsWithSockets.push( itemClassId )

  }

  // used to buid UI, not our concern
  this.have_no_dungeon_configs = have_no_dungeon_configs
}
