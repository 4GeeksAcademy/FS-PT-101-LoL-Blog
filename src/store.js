export const initialStore=()=>{
  return{
    message: null,
    favourite: []
  }
}
export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'fav_champion':
      // Con isFavourite estoy pasando la función some, en este caso, compara el store con el action.payload
      const isFavourite = store.favourite.some(champ=>champ===action.payload);
      return {
        ...store,
      // Si isFavourite es true (significa que el campeón ya está en la lista, porque coincide) borrará el campeón de la lista, si es false (el campeón no está en la lista) lo añadirá
        favourite: isFavourite ? store.favourite.filter(champ => champ !== action.payload) : [...store.favourite, action.payload]
      };
    case 'champion_details':
      return {
        ...store,
      details: action.payload
    }
    case 'league_of_legends':
      return {
        ...store,
        champions: action.payload
      }
    case 'add_task':

      const { id,  color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };
    default:
      throw Error('Unknown action.');
  }    
}
