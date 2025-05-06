export const initialStore=()=>{
  return{
    message: null,
    favourite: []
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'fav_champion':
      if (store.favourite.includes(action.payload)) {
        return store;
      }
    
      return {
        ...store,
        favourite: [...store.favourite, action.payload]
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
