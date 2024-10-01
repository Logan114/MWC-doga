export default class Kartya {
    #kartya
    #szuloElem
    #div

    constructor(kartya, szuloElem) {
        this.#kartya = kartya
        this.#szuloElem = $(szuloElem)
        this.kartyaTartalomGeneralas()
        this.kattintas()

    }

    kartyaTartalomGeneralas() {
        this.#div = $(`<div class="kartya card col-lg-3 col-md-4 col-sm-4"> <div class="card-body">${"❓"}</div></div>`)
        this.#szuloElem.append(this.#div)   
    }

    kattintas() {
        this.#div.on("click", () => {
            const event = new CustomEvent("kartyaKattintas", {
                detail: { kartya: this.#kartya }
            })
            this.#div[0].dispatchEvent(event)
        })
    }

    getDiv() {
        return this.#div
    }
}
