import Jatekter from "./jatekter.js"

export default class Kartya{
    #kartya
    #szuloElem
    #szellem
    #ordog
    constructor(kartya, szuloElem, szellem,ordog){
        this.#kartya = kartya
        this.#szuloElem = szuloElem
        szuloElem = (".jatekter")
        this.#szellem = szellem
        this.#ordog = ordog
        szellem = "👻"
        ordog = "😈"
        this.kartyaTartalomGeneralas()

    }
    kartyaTartalomGeneralas(szuloElem,kartya){
        this.#szuloElem.append(`<div class="kartya">${this.#kartya}</div>`)

    }

    kattintas(){
        $(window).on("click"(event) => {
            

        })
    }
}