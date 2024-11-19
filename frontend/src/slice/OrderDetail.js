import { createSlice } from "@reduxjs/toolkit";

const initialState= {
  orderdetail:{
    ProductName:"",
    Amount:0,
    Address:{}
  }
}

const AllOrderDetailSlice= createSlice({
  name:'OrderdetailSlice',
  initialState,

  reducers:{
    setOrderDetail:(state,action)=>{
      state.orderdetail["Email"]=localStorage.getItem('email');
      // console.log(action.payload[0].quantity);
      for(var i=0 ;i < action.payload.length; i++){
       
          state.orderdetail[`ProductName`]+=action.payload[i].Name+",";
          state.orderdetail["Amount"]+=action.payload[i].Price*action.payload[i].quantity;
        }
        
      },
      setAddressDetail:(state, action)=>{
        state.orderdetail["Address"]=action.payload;
        console.log(action.payload)
      },
      setOrderID:(state,action)=>{
        state.orderdetail[`OrderID`]= Math.floor(100000 + Math.random() * 900000);
        // console.log(state.orderdetail.Address.addressLine1)
        // console.log(state.orderdetail.OrderID)
        // console.log(state.orderdetail.Email)
        // console.log(state.orderdetail.ProductName)
        // console.log(state.orderdetail.Amount)
       
      }
    }
    
})

export default AllOrderDetailSlice.reducer;
export const {setOrderID, setAddressDetail,setOrderDetail } = AllOrderDetailSlice.actions;