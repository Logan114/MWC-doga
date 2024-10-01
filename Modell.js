export default class Modell {
    #kartyak = []
    #kiiras

    constructor() {
        this.kartyakBehelyezes()
    }

    kartyakBehelyezes() {
        for (let i = 0; i < 4; i++) {
            const random = Math.random()
            this.#kartyak.push(random < 0.3 ? "😈" : "👻")
        }
    }

    ellenorzes(index) {
        if (this.#kartyak[index] === "👻") {
            this.#kiiras = "Megmentettek a jó lelkek! 👻"
        } else {
            this.#kiiras = "Elvitt az ördög! 😈"
        }
        return this.#kiiras
    }

    getKartyak() {
        return this.#kartyak
    }
}
