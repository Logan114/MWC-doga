import Kartya from "./Kartya.js"
import Modell from "./Modell.js"

export default class Jatekter{
    #HTML
    #HTMLEredmeny
    #szoveg
    constructor(HTML,HTMLEredmeny,szoveg){
        this.#HTML = HTML
        this.#HTMLEredmeny = HTMLEredmeny
        HTMLEredmeny = $(".eredmeny")
        this.#szoveg = szoveg
        new Modell()
   }
   setSzoveg(elem){
    this.#szoveg = elem
   }
   eredmenybeiras(elem){
    HTMLEredmeny.append(elem);
   }
}