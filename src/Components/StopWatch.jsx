import React, { useContext } from 'react'
import stopWatchContext from '../Context/Store'
import Timer from './Timer'
import ControlButtons from './ControlButtons'


export default function StopWatch() {
    let {time,active,pause,handleActive,handlePauseAndResume,handleReset} =useContext(stopWatchContext)
  return (
    <>
    <div className="container vh-100 d-flex justify-content-center align-items-center">
        <div className="row ">
            <div className="col-md-12 text-white  ">
                <div className="card bg-dark text-white text-center fs-1 p-5 ">
                  <Timer time={time}/>
                  <ControlButtons
                  active={active}
                  pause={pause}
                  handleActive={handleActive}
                  handlePauseAndResume={handlePauseAndResume}
                  handleReset={handleReset}
                  />
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
