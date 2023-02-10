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
    feed=function(){
        this.food++
        player.food--
        if(this.food==this.foodReq){
            this.grow()
        }
    }
}
var catPlant=new Plant({origName:"Cat",nameEndings:["Sprout","Stalk","Flower"],maxLevel:2,foodReq:2})

for(let i=0;i<catPlant.foodReq;i++){
    catPlant.feed()
}