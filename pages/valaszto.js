import AktualisFeladat from "../model/aktualisFeladat.js";
import Tanitas from "../view/tanitas.js";

function Valaszto(){
    const akt = new AktualisFeladat();
    console.log(akt.aktObj);

 

  

    return(

        <Tanitas nyelvtan = {akt.Nyelvtan} uzenet = {akt.leiras}/>
        );


}
export default Valaszto