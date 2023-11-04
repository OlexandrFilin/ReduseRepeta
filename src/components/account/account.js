import { useDispatch, useSelector } from "react-redux";
import { deposit, withDraw, changeLocal } from "../../redux/store";
import { useState } from "react";

export const Account = () => {
 const [inpVal,setInpVal]=useState(0);   
  const dispatch = useDispatch();
  const balance = useSelector((state) => {
    return state.account.balance;
  });
  const handleChangeInp =(e)=>{
   setInpVal(Number(e.target.value))
  }
  const handleChangeLocal =(e)=>{
     return dispatch(changeLocal(e.target.value) )
  }
  return (
    <div>
      <select onChange={ handleChangeLocal }>
        <option value={'uk'}>UK</option>
        <option value={'pl'}>PL</option>
        <option value={'en'}>EN</option>
        <option value={'ru'}>RU</option>
      </select>
      <p>
        <b>{balance}$</b>
      </p>
      <input value={inpVal} name={"inpVal"} onChange={handleChangeInp}/>
      <button
        onClick={() => {
          dispatch(deposit(inpVal));
        }}
      >
        Depossit
      </button>
      <button
        onClick={() => {
          dispatch(withDraw(inpVal));
        }}
      >
        Withdraw
      </button>
    </div>
  );
};
