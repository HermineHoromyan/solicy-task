import React from "react"
import './style.scss'
import {useDispatch} from "react-redux";
import {deleteCard} from "../../store/reducers/NumbersCardSlice";


const NumberCard = (props) => {

    const dispatch = useDispatch()
    function clearCard() {
        dispatch(deleteCard(props.index))
    }

    return (
        <div className={'P-card G-center'}>
            <span onClick={clearCard} className={'P-close'}>
            </span>
            <p className={'P-card__number'}>{props.item.number}</p>
        </div>
    )
}

export default NumberCard