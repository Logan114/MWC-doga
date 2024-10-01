export default class Modell{
    #kartyak = []
    #kiiras
    constructor(kartyak,kiiras){
        this.#kartyak = kartyak
        this.#kiiras = kiiras
        this.kartyakBehelyezes()
    }
    kartyakBehelyezes(kartyak){
        kartyak.forEach(element,index => {
            let random = Math.random()
            if (random % 2 == 0){
                kartyak(index) = "👻"
            }
            else{
                kartyak(index) = "😈"
            }
        });
    }

    ellenorzes(index){
        if (this.#kartyak(index) == "👻"){
            kiiras = "megmentettek a jó lelkek!"
        }
        else{
            kiiras = "Elvitt az ördög!"
        }
        
    }
    getKartyak(kartyak){
        this.#kartyak=kartyak
    }
    
}