import { createContext, useEffect, useState } from "react";

const stopWatchContext=createContext({})
 export function StopWatchProvider(props) {

    let [active,setActive]=useState(false);
    let [pause,setPause]=useState(true);
    let [time,setTime]=useState(0);

    useEffect(()=>{
        let interval=null;
        if(active && pause === false){
            interval=setInterval(() => {
                setTime((time) => time + 10);
                }, 10);
            }else{
                clearInterval(interval)
            }
            return ()=>{
                clearInterval(interval)
            }
    },[active,pause])

    function handleActive(){
        setActive(true)
        setPause(false)
    }
    function handlePauseAndResume(){
        setPause(!pause)
    }
    function handleReset(){
        setActive(false)
        setTime(0)
    }



    return(
        <stopWatchContext.Provider value={{time,active,pause,handleActive,handlePauseAndResume,handleReset}}>
            {props.children}
        </stopWatchContext.Provider>
    )
 }

export default stopWatchContext;