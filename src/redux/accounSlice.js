const initStateAccount={

    balance:100,
    user:'', 

}
export const accountReduser =(state = initStateAccount,action)=>{
    switch(action.type){
       case 'account/depossit':
          return {
           
              ...state,
              balance: state.balance += action.payload ,
            
          };
          
        case 'account/withdraw':{
          return {
                
             ...state,
              balance: state.balance -= action.payload ,
             
          }  
       }
 
      default: {
       return state
      } 
 
    }
 
 }