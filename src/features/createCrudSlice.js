import { createAsyncThunk, createSlice, isFulfilled, isPending, isRejected } from "@reduxjs/toolkit"
import axios from "axios"

export const createCrudSlice = (name,url) => {
  
  const fetchItems = createAsyncThunk(`${name}/fetchItems`, async () => {
    const { data } = await axios.get(url);
    return data ;
  });

  const addItem = createAsyncThunk(`${name}/addItem`, async (item) => {
    const { data } = await axios.post(url,item);
    return data ;
  });
  
  const deleteItem = createAsyncThunk(`${name}/deleteItem`, async (id) => {
     await axios.delete(`${url}/${id}`);
    return id ;
  });
  
    const updateItem = createAsyncThunk(`${name}/updateItem`, async ({id, item}) => {
    const { data } = await axios.put(`${url}/${id}`,item);
    return data ;
  });
  

  const slice = createSlice({
    name,
    initialState: {
      items:[],
      loading:false,
      error:null,
    },
    reducers:{},
    extraReducers:(builder)=>{
    builder
    .addCase(fetchItems.fulfilled, (state, action) => {
      state.items = action.payload;
    })
    .addCase(addItem.fulfilled, (state, action) => {
      state.items.push(action.payload);
    })
    .addCase(deleteItem.fulfilled, (state, action) => {
     state.items = state.items.filter(item => item.id !== action.payload);
    })
    .addCase(updateItem.fulfilled, (state, action) => {
      state.items = state.items.map(item => item.id == action.payload.id ? action.payload : item);
    })
  .addMatcher(isPending(fetchItems, addItem, deleteItem , updateItem) , (state)=>{
    state.loading = true;
    state.error = null;
  })
  .addMatcher(isFulfilled(fetchItems, addItem, deleteItem , updateItem) , (state)=>{
    state.loading = false;
  })
 .addMatcher(isRejected(fetchItems, addItem, deleteItem , updateItem) , (state, action)=>{
    state.loading = false;
    state.error = action.error.message;
  })
    }
  })

return { 
  reducer: slice.reducer,
  actions: {addItem, fetchItems, deleteItem, updateItem}
}
}

