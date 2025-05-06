import storeReducer from "../store";


const collection = {}

collection.returnChampions = async () => {

    try{

        const resp = await fetch('https://ddragon.leagueoflegends.com/cdn/15.8.1/data/en_US/champion.json');
        const data = await resp.json();
        return data

    }catch(error){
        console.log(error)
    }

}

collection.returnOneChampion = async (name) => {

    try{

        const resp = await fetch(`https://ddragon.leagueoflegends.com/cdn/15.8.1/data/en_US/champion/${name}.json`);
        const data = await resp.json();
        return data.data[name]

    }catch(error){
        console.log(error)
    }

}


export default collection