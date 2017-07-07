
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
