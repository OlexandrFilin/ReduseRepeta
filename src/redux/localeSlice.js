const  initStateLocal = {
    lang:'uk'
}




export const localReduser =(state = initStateLocal,action)=>{
  switch(action.type){
      case 'local/lang':{
        return {
         ...state,
         lang: action.payload,
        } 

      }

     default: {
      return state
     } 

   }
}