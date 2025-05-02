import { useEffect } from "react"
import { useParams } from "react-router-dom"
import collection from "../services/collection"
import useGlobalReducer from "../hooks/useGlobalReducer"

export const Details = () => {

    function recorrerArray(array = []){
        let roles = []

        for(let i = 0; i<array.length;i++){
            if(i == 0){
            roles.push(array[i])
            }
            else{
                roles.push(`, ${array[i]}`)
            }
        }
        return roles
    }
    const arraySpells = ["Q","W","E","R"]
const {store, dispatch} = useGlobalReducer()
const params = useParams()

const keyName = params.name;

useEffect(()=>{

    collection.returnOneChampion(keyName).then(data=>dispatch({type: 'champion_details', payload: data}))
    

},[])

return (
    <div className="p-5 colorFuente">
        <img className="pb-3" src={`https://ddragon.leagueoflegends.com/cdn/15.8.1/img/champion/${keyName}.png`}></img>
        <h2 className="verylarge">
            {store.details?.name}
        </h2>
        
        <h4 className="large pb-3">
            {store.details?.title}
        </h4>
        <p className="cursivo pb-3">
            {store.details?.blurb}
        </p>
        <p className="pb-3 negrita">{recorrerArray(store.details?.tags)}</p>
        
        <h4 className="large pb-3">
            Skills
        </h4>
        <ul className="lista">
            <li className="cursivo bloque mt-4">
                <img src={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/passive/${store.details?.passive?.image?.full}`}>
                </img>
                <div  className="saltoLinea mx-3">
                    <span className="negrita">Passive - {store.details?.passive?.name}: </span> 
                    <span className="cursivo" dangerouslySetInnerHTML={{ __html: store.details?.passive?.description }} />
                </div>
                </li>
          
            
            {store.details?.spells.map((el,i) =>
                <li key={i} className="cursivo mt-4 bloque">
                    <img src={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/spell/${el.image?.full}`}></img>
                    <div className="saltoLinea mx-3">
                        <span className="negrita">{arraySpells[i]} - {el.name}: </span>
                        <span className="cursivo" dangerouslySetInnerHTML={{ __html: el.description }} />
                    </div>
                </li>
            )}
        </ul>
    </div>
)
}