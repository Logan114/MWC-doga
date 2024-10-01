import Jatekter from "./jatekter";
import Modell from "./Modell.js";
import View from "./view";

export default class Controller{
    constructor(){
        const modell = new Modell()
        const jatekter = new Jatekter()
        let kartyaLista = modell.getKartyak()
        
    }

}