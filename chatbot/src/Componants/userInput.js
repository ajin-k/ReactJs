import {useState, useEffect} from 'react'

function UserInputModule(){
    const [inputVal, setInputVal] = useState('')
    const [chatHistory, setChatHistory] = useState({})

    //reading and setting Input field value
    function setInput(e){
        let val =  e.target.value;
        console.log(val)
        // console.log({...chatHistory})

        setInputVal(val);
    }

    //onClick event
    function setChatObject(){
        let curruentDate = new Date(); //getting current date
        let newObject = {} 
        newObject[curruentDate] ={'User' : inputVal} // added key as current date and values as object
        console.log(newObject)
        setChatHistory({...chatHistory, ...newObject}) //using spread operator to set new value of chatHistory object
    }

    //state value checking purpose.
    useEffect(()=>{console.log("Data in chatHistory",chatHistory)},[chatHistory])

     return<>
     <input type='text' onChange={setInput} value={inputVal}></input>
     <button onClick={setChatObject}> send</button>
     </>

}

export default UserInputModule


/**
 * task 1: get input and curruent datetime.
 * task 2: store above input and datetime in Chat history object
 *      Object struction = {datetime,{'user/bot', userInput}}
 * task 3: create bot responses for user inputs. Static list
 * task 4: for every user input add bot response in Chat history object
 * task 5: load the past chat history on every new session login --> localstorage/session storage
 * task 6: design UI
 * 
 */