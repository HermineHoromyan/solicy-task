import React, {useEffect} from "react";
import './assets/style/index.scss'
import Instruction from "./components/instructions";
import Header from "./components/header";
import NumberCard from "./components/card";
import Footer from "./components/footer";
import {useDispatch, useSelector} from "react-redux";
import {CONST_LOCAL_STORAGE} from "./constants";
import {setCardList} from "./store/reducers/NumbersCardSlice";



function App() {

    const cardNumberList = useSelector(state=>state.cardNumberList)
    const dispatch = useDispatch()

    /**
     *
     * **/

    useEffect(()=>{
        let cardsLocalList = localStorage.getItem(CONST_LOCAL_STORAGE)
        if(cardsLocalList){
            dispatch(setCardList(JSON.parse(cardsLocalList)))
        }
    },[])

  return (
      <div className={'G-flex G-block'}>
          <div className={"G-block__list"}>
              <Header/>
              <div className={'G-card__block G-container G-display-grid G-grid-column-3 G-grid-gap-40'}>
                  {cardNumberList.map((item,index)=>{
                      return <NumberCard item={item} index={index} key={index}/>
                  })}
              </div>
              <Footer/>
          </div>
          <Instruction/>
      </div>
);
}

export default App;
