export default class Jatekter {
    #HTML
    #HTMLEredmeny
    #szoveg

    constructor(HTML, HTMLEredmeny) {
        this.#HTML = $(HTML)
        this.#HTMLEredmeny = $(HTMLEredmeny)
        this.#szoveg = ''
    }

    setSzoveg(elem) {
        this.#szoveg = elem
        this.#HTMLEredmeny.text(this.#szoveg)
    }
}
