import { createSlice } from "@reduxjs/toolkit";

const initialState={
    cartValues:[],
    totalprice:0
}

const Cartreducer=createSlice(
    {
        name:"Cartreducer",
        initialState,
        reducers:{
incrementcart:(state,action)=>{
    state.cartValues.push(action.payload)
    const pricearray=state.cartValues.map(obj=>obj.productprice)
    state.totalprice=pricearray.reduce((a,b)=>a+b)
},
decrementcart:(state,action)=>{
    const index=state.cartValues.findIndex(obj=>obj.productName===action.payload.productName)
    if(index>-1){
    state.cartValues.splice(index,1);}
    const pricearray=state.cartValues.map(obj=>obj.productprice)
    state.totalprice=pricearray.reduce((a,b)=>a+b)
}
        }
    }
)
export const {incrementcart,decrementcart}= Cartreducer.actions;
export default Cartreducer.reducer;