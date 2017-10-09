let initialState = []

//when we use this reducer, it's going to receive a value from the store
//if we don't get a thing from the store, it will use the default initialState
export default (state=initialState, action) => {
  //the action that is passed in from the dispatch that's defined in the category js
  //depending on which method that we pass, we'll have a payload and a type
  let {payload, type} = action

  switch(type){
    case 'CATEGORY_CREATE':
      return [...state, payload]
    case 'CATEGORY_UPDATE':
      return state.map(category => category.id === payload.id ? payload : category)
    case 'CATEGORY_DELETE':
      return state.filter(category => category.id !== payload.id) //returns everything that doesn't match the payload.id
    default: 
      return state
  }
}