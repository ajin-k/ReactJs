
/* counter main calculation logic*/
function COUNTERLOGIC(){

    let [count, setCount] = React.useState(0);
    // console.log(React.useState(0)) // return Array with two elements [value, setCount()]

    //occupmodates value from input box
    let [value, setValue] = React.useState("");

    //it will get value from input box whenever the is change in it's value.
    //e = bubbling object --> here input box is object who is calling this function.

    let test;
    function getDefault(e){ 
        setValue(e.target.value);
        test = e.target.value
        console.log("count: ",count)
        console.log("test: ",test)

    }

    //set the value of count from counter
    function setDefault(){
        setCount(Number(value))
    }

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
        setCount(Number(value))
        console.log("Reset clicked");
    }

    // console.log(count);
    return  <>
            <div id="InputSection">
                <input type="text" onChange={getDefault}></input> 
                <button id="Input" onClick={setDefault}>Set</button>
            </div>
            <div>
                <button id="Add" onClick={IncreaseCounter}>+</button>
                <span id="value">{count}</span>
                <button id="Substract" onClick={DecreaseCounter}>-</button>
                <div><button id="Reset" onClick={ResetCounter}>Reset</button></div>
            </div>          
            </>
}

/**A parent component creating the child componants while reusing the same existing COUNTERLOGIC */
function COUNTERINSTANCES(){
    return<>
    <COUNTERLOGIC></COUNTERLOGIC> 
    </>
}

ReactDOM.render(<COUNTERINSTANCES></COUNTERINSTANCES>, document.getElementById("react-cont"))