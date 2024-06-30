
/* counter main calculation logic*/
function COUNTERLOGIC( prop){
    console.log(prop) //object with values property and it's value passed to it.

    let [count, setCount] = React.useState(prop.defaultValue);
    console.log(React.useState(0)) // return Array with two elements [value, setCount()]
    function IncreaseCounter(){
        setCount(count+1)

        console.log("Plus clicked");
    }

    function DecreaseCounter(){
        setCount(count-1)

        console.log("Minues clicked");
    }
    
    //Resetting the value of counter
    function ResetCounter(){
        setCount(prop.defaultValue)

        console.log("Reset clicked");
    }

    console.log(count);
    return  <>
            <div class="counterUI"><h1>Counter</h1>
            <button id ="Add" onClick={IncreaseCounter}>+</button>
            <span id="value">{count}</span>
            <button id ="Substract" onClick={DecreaseCounter}>-</button>
            <div><button id ="Reset" onClick={ResetCounter}>Reset</button></div>
            </div>            
            </>
}

/**A parent component creating the child componants while reusing the same existing COUNTERLOGIC */
function COUNTERINSTANCES(){
    return<>
    <COUNTERLOGIC defaultValue = {5}></COUNTERLOGIC> 
    <COUNTERLOGIC defaultValue = {-3}></COUNTERLOGIC>
    </>
}

ReactDOM.render(<COUNTERINSTANCES></COUNTERINSTANCES>, document.getElementById("react-cont"))