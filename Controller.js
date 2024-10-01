import Jatekter from "./jatekter.js"
import Modell from "./Modell.js"
import Kartya from './Kartya.js'

export default class Controller {
    constructor() {
        const modell = new Modell()
        const jatekter = new Jatekter('.jatekter', '.eredmeny')
        let kartyaLista = modell.getKartyak()

        kartyaLista.forEach((kartya, index) => {
            const kartyaObj = new Kartya(kartya, '.jatekter')
            kartyaObj.getDiv().on('kartyaKattintas', () => {
                const eredmeny = modell.ellenorzes(index)
                const e = new CustomEvent("kivalaszt",{detail:this.kartyaObj})
                console.log(kartyaObj)
                
                jatekter.setSzoveg(eredmeny)
            })
        })
    }
}
