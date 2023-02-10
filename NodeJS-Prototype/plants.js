var player={
    "food":10000
}
class Plant{
    constructor(){
        this.name="",
        this.origName="",
        this.currentEnding="",
        this.nameEndings=[],
        this.level=0,
        this.maxLevel=2,
        this.food=0,
        this.foodReq=10,
        this.foodReqFactor=1.5
    }
    grow=function(){
        this.level++
        console.log(this.name+" level up!")
        this.currentEnding=this.nameEndings[this.level]
        this.name=this.origName+" "+this.currentEnding
        this.foodReq*=this.foodReqFactor
    }
    
}
function grow(plant){
    plant.level++
    console.log(plant.name+" level up!")
    plant.currentEnding=plant.nameEndings[plant.level]
    plant.name=plant.origName+" "+plant.currentEnding
    plant.foodReq*=plant.foodReqFactor
}
function feed(plant){
    plant.food++
    player.food--
    if(plant.food==plant.foodReq){
        grow(plant)
    }
}
function setup(plant){
    plant.currentEnding=plant.nameEndings[plant.level]
    plant.name=plant.origName+" "+plant.currentEnding

}
var catPlant=new Plant({origName:"Cat",nameEndings:["Sprout","Stalk","Flower"],maxLevel:2,foodReq:2})
setup(catPlant)
for(let i=0;i<catPlant.foodReq;i++){
    feed(catPlant)
}