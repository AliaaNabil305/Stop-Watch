import React, { useContext } from 'react'
import stopWatchContext from '../Context/Store'

export default function ControlButtons() {
    let {time,active,pause,handleActive,handlePauseAndResume,handleReset} =useContext(stopWatchContext)
    const startButton =(
        <div className="btn btn-danger px-4"
             onClick={handleActive}>
             Start
        </div>
    )
    const anotherButtons = (
        <div className="buttons">
            <div className="btn text-white one border border-light px-4"
             onClick={handleReset}>
             Reset
        </div>
        <div className="btn two btn-danger ms-3 px-3 "
             onClick={handlePauseAndResume}>
                {pause?'Resume':'Pause'}
        </div>

        </div>
    )
  return (
    <>
     <div className="Control-Buttons pt-5 mt-5">
            <div>{active ? anotherButtons : startButton}</div>
        </div>
    </>
  )
}
