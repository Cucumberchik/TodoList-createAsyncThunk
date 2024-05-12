import type { FC, ReactElement } from "react"
import { useAppDispatch } from "../redux/store"
import { gelItemReq } from "../redux/features/TodoSlice"

interface AppPropsDialog {
    onClose: () => void,
    status: string,
    _id: number
}

export const DeleteDialog:FC<AppPropsDialog> = ({onClose, status, _id}):ReactElement => {
    const dispatch = useAppDispatch()

    const hadnleDelete = () => {
        dispatch(gelItemReq(_id))
        setTimeout(()=>{
            onClose();
        },200)
    }


  return (
    <section id="dialog" className={`diaolig_delete_ ${status}`} onClick={onClose}>
        <div className="contant">
            <div className="contant_is" onClick={(e)=>e.stopPropagation()}>
               <div className="_container">
                     <h3>Confirm the deletion</h3>
                     <div className="function_btns">
                        <button className="delete" onClick={hadnleDelete} >Delete</button>
                        <button className="close" onClick={onClose} >Close</button>
                     </div>
               </div>
            </div>
        </div>
    </section>
  )
}
