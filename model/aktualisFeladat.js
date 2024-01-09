import { szenvedoMondatok } from "./angol";

class AktualisFeladat {
    #aktObj;
    #hanyadik;
    #hossz;

    constructor() {
        this.#hossz = szenvedoMondatok.length;
        this.#hanyadik = 3;
        this.setObj();
    }





    setObj() {
        this.#aktObj = {
            magyar: [szenvedoMondatok[this.#hanyadik].magyar],
            mondat: [szenvedoMondatok[this.#hanyadik].mondat],
            alap: [szenvedoMondatok[this.#hanyadik].alap],
            valasztas: [szenvedoMondatok[this.#hanyadik].valasztas],
        }
    }

    setHanyadik(){
       this.#hanyadik = Math.floor((Math.random() * this.#hossz) + 3)
    }



    get aktObj() {
        return this.#aktObj;
    }


    get Nyelvtan() {
        return szenvedoMondatok[0]
    }

    get leiras() {
        return szenvedoMondatok[1]
    }















}
export default AktualisFeladat
