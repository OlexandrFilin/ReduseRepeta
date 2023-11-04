import { combineReducers, createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
import { accountReduser } from "./accounSlice";
import { localReduser } from "./localeSlice";

// const initialState={
//     account:{
//         balance:100,
//         user:'', 
//     },
//     locale:{ lang:'uk'}
// }





const rootReducer = combineReducers({
   account:accountReduser,
   locale:localReduser
})
// const rootReducer = (state = initialState,action)=>{
  
//     switch (action.type) {
//          case 'account/depossit':
//             return {
//               ...state, 
//                account:{
//                 ...state.account,
//                 balance: state.account.balance += action.payload ,
//                }
//             };
            
//           case 'account/withdraw':{
//             return {
//                ...state, 
//                account:{
//                ...state.account,
//                 balance: state.account.balance -= action.payload ,
//                }
//             }  
//          }
//          case 'local/lang':{
//             return {...state,
//               locale :{
//                ...state.locale,
//                lang: action.payload,

//               } 
//             }

//          }
       
//         default: 
//            return  state; 
      
          
//         } 
   
   
// }
const enhancer = devToolsEnhancer()
 const store =createStore(rootReducer,enhancer);


const deposit= (value)=>{
    return {
     type:'account/depossit',
    payload:value,}
}

const withDraw = value =>{
    return{
   type: "account/withdraw",
   payload:value,
}}

const changeLocal =(newLang)=>{
   return{
      type:'local/lang',
      payload:newLang,
   }
}

export{deposit,withDraw,store, changeLocal}
