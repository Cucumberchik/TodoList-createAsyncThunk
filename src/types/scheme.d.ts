interface TodoData {
    _id?:number;
    name:string;
    lastname:string
}

namespace TODO {
    type getReq = void;
    type postReq = {
        TodoData;
    
    type EditReq = {
        _id:number;
        newData: TodoData;
    };
    type deleteReq = number;
}