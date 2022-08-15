import React from "react"
import './style.scss'
import {useDispatch} from "react-redux";
import {addCard, sortNumbers} from "../../store/reducers/NumbersCardSlice";


const Header = () => {
    const dispatch = useDispatch()

    return (
        <header className={'P-header G-center'}>
            <button className={"G-btn__add"} onClick={()=> dispatch(addCard())}>Add card</button>
            <button className={"G-btn__sort"} onClick={()=> dispatch(sortNumbers())}>Sort card</button>
        </header>
    )
}

export default Header