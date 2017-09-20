class Spaceship{
  constructor(name, crew, phasers, shields){
    this.name = name
    this.crew = crew
    this.phasers = phasers
    this.shields = shields
    this.cloaked = false
    this.warpDrive = "disengaged"
    this.docked = this.testDocked()
    this.phasersCharge = 'uncharged'
    this.addMembers()
  }

  testDocked(){
    return this.crew.length === 0 ? true : false
  }

  addMembers(){
    this.crew.forEach(member => member.currentShip = this)
  }
}
