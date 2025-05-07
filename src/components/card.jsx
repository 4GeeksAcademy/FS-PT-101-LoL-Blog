import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const ChampionCard = ({name}) => {
    const { store, dispatch } = useGlobalReducer();


    function addToFavourites(name){
        dispatch({ type: 'fav_champion', payload: name })
              
    }

   let champion = ""

    switch (name){
        case "Kai'Sa":
        champion="Kaisa"
        break;
        case "Cho'Gath":
        champion="Chogath"
        break;
        case "Kha'Zix":
        champion="Khazix"
        break;
        case "Kog'Maw":
        champion="KogMaw"
        break;
        case "Rek'Sai":
        champion="RekSai"
        break;
        case "Vel'Koz":
        champion="Velkoz"
        break;
        case "Bel'Veth":
        champion="Belveth"
        break;
        case "Dr. Mundo":
        champion="DrMundo"
        break;
        case "K'Sante":
        champion="KSante"
        break;
        case "LeBlanc":
        champion="Leblanc"
        break;
        case "Nunu & Willump":
        champion="Nunu"
        break;
        case "Renata Glasc":
        champion="Renata"
        break;
        case "Wukong":
        champion="MonkeyKing"
        break;
        default:
            if(name.includes(" ")){
                champion = name.replace(" ","")
            }
            else{
                champion = name
            }
            break;
    }


   



 

return (

    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 p-4">
     <div className="card carta">
        <img src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion}_0.jpg`} alt={name}/>
        <h3 className="colorFuente p-3">{name}</h3>
        <div className="d-flex justify-content-center m-3">
            <Link className="btn boton1 m-3" to={'/details/'+champion}>Champion Profile</Link>
            <button className={`btn m-3 ${store.favourite.includes(name) ? 'boton4' : 'boton2'}`} id="fav" onClick={() => addToFavourites(name)}><i class="fa-solid fa-star"></i></button>
        </div>
     </div>
	</div>
)

}