
import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"
interface initialStateType {
    todo: TodoData[];
    itemOnChange: TodoData | any,
    isLoading: boolean;
    error:string;
}
const initialState:initialStateType = {
    todo:[],
    itemOnChange: null,
    isLoading: false,
    error:''
}

const url = import.meta.env.VITE_URL ;

export const gelItemReq = createAsyncThunk("todo/delete/item", async(_id:number)=>{
    try {
        const {data} = await axios.delete(url + "/" + _id);
        return data
    }catch(e){
        console.log(e);
        
    }
})

export const getReq = createAsyncThunk("todo/get", async() => {
    try {
        const {data} = await axios(url);
        return data
    }catch(e){
        console.log(e);
        
    }
});


export const postReq = createAsyncThunk("todo/post", async(obj:TodoData) => {
    try {
        const {data} = await axios.post(url,obj);
        return data
    }catch(e){
        console.log(e);
        
    }
});

export const changeReq = createAsyncThunk("todo/change", async(newData:TodoData)=>{
    try {
        const {data} = await axios.patch(url + '/' + newData._id,{name:newData.name, lastname:newData.lastname});
       
        
        return data
    }catch(e){
        console.log(e);
        
    }
});
export const getItemReq = createAsyncThunk("todo/get/item", async(_id:number)=>{
    try {
        const {data} = await axios(url + '/' + _id);
        return data
    }catch(e){
        console.log(e);
        
    }
})



const TodoSlice = createSlice({
    name: "ali",
    initialState,
    reducers:{},
    extraReducers: (builder) => {builder
        //Delete Item
        .addCase(gelItemReq.pending, (state)=>{
            state.isLoading = true
        })
        .addCase(gelItemReq.fulfilled, (state, action)=>{
            state.todo = action.payload;
            state.isLoading = false
        })
        .addCase(gelItemReq.rejected, (state, action)=>{
            state.isLoading = false;
            state.error = action.error.message || "Invalid getReq"
        })
        //Get Items
        .addCase(getReq.pending, (state)=>{
            state.isLoading = true
        })
        .addCase(getReq.fulfilled, (state, action)=>{
            state.todo = action.payload;
            state.isLoading = false
        })
        .addCase(getReq.rejected, (state, action)=>{
            state.isLoading = false;
            state.error = action.error.message || "Invalid getReq"
        })
        //Post Item
        .addCase(postReq.pending, (state)=>{
            state.isLoading = true
        })
        .addCase(postReq.fulfilled, (state, action)=>{
            state.todo = action.payload;
            state.isLoading = false
        })
        .addCase(postReq.rejected, (state, action)=>{
            state.isLoading = false;
            state.error = action.error.message || "Invalid getReq"
        })
        //Change Item
        .addCase(changeReq.pending, (state)=>{
            state.isLoading = true
        })
        .addCase(changeReq.fulfilled, (state, action)=>{
            state.todo = action.payload;
            state.isLoading = false
        })
        .addCase(changeReq.rejected, (state, action)=>{
            state.isLoading = false;
            state.error = action.error.message || "Invalid getReq"
        })
        //Get Item
        .addCase(getItemReq.pending, (state)=>{
            state.isLoading = true
        })
        .addCase(getItemReq.fulfilled, (state, action)=>{
            state.itemOnChange = action.payload;
            state.isLoading = false
        })
        .addCase(getItemReq.rejected, (state, action)=>{
            state.isLoading = false;
            state.error = action.error.message || "Invalid getReq"
        })
    }
})

export default TodoSlice.reducer;