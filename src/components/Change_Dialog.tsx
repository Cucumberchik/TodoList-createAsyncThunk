

import { useEffect, useState, type FC, type ReactElement } from 'react'
import { useAppDispatch, useAppSelecgor } from '../redux/store';
import { changeReq, getItemReq } from '../redux/features/TodoSlice';

interface AppChangeDialog {
    status: string,
    _id: number,
    onClose: () => void
}

export const ChangeDialog:FC<AppChangeDialog> = ({status, _id, onClose}):ReactElement => {
    const [error, setError] = useState(false)
    const [list, setList] = useState({name:"", lastname:""});
    const [disibleState, setDisibleState] = useState<string>('')

    const {itemOnChange, isLoading} = useAppSelecgor(s=>s);
    const dispatch = useAppDispatch();

    useEffect(()=>{
        dispatch(getItemReq(_id));
    },[_id]);
    useEffect(()=>{
        setList({name: itemOnChange?.name, lastname: itemOnChange?.lastname});
    },[itemOnChange])
    

    const sendList = () => {
        if(!list.lastname || !list.name) {
            setError(true)
            setDisibleState('');
        };
        setDisibleState(' loading');
        dispatch(changeReq({_id:itemOnChange._id, ...list}))
        

        setTimeout(()=>{onClose()},160)
        setDisibleState('');

    };



  return (
    <section id='dialog' className={`diaolig_ ${status}`}>
         <div className="contant">
            <div className="contant_is" onClick={(e)=>e.stopPropagation()}>
                <div className="_container">
                    <h3>Change product</h3>
                    <p style={{opacity: error ? "1" : "0", color: "#FF6166"}} >First or last name field is not filled in</p>
                    <input value={list?.name} onChange={(e)=>setList({...list, name: e.target.value})} type="text" placeholder="Name" />
                    <input value={list?.lastname} onChange={(e)=>setList({...list, lastname: e.target.value})} type="text" placeholder="Lastname" />

                    <div className="function_btns">
                        <button onClick={onClose} className="consel" >Consel</button>
                        <button onClick={sendList} disabled={isLoading} className={"add" + disibleState} >Change</button>
                    </div>
                </div>
            </div>

        </div>
    </section>
  )
}
