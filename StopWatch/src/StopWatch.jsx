import React from "react";


function STOPWATCH(){
    const [time, setTime] = React.useState(0);
    
    function startTimer(){
        setInterval(()=>{
            setTime((time)=>{ 
                console.log(time)
                return Number(time)+1})
        },1000)
    }
    

    return<>
        <h2>StopWatch</h2>
        <h3>{time}</h3>
        <button onClick={startTimer}>Start</button>
        <button>Pause</button>
        <button>Stop</button>
    </>
}

export default STOPWATCH