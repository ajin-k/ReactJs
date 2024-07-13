import { useState, useEffect, useRef } from 'react'

const Responses = {
    "Hi": "Hello there, How can i help you today?",
    "How is the weather today?": "Temp: 24 C. It might rain today",
    "Who is the richest man in the world today?": "Elon Musk",
    "Can you suggest me 3 best scifi books to read?": "Dune, The Forever War, Neuromancer"
}

function UserInputModule() {
    const [inputVal, setInputVal] = useState('')
    const [chatHistory, setChatHistory] = useState({})
    var lastChatInput = useRef()

    //reading and setting Input field value
    function setInput(e) {
        let val = e.target.value;
        console.log(val)
        // console.log({...chatHistory})
        setInputVal(val);
    }

    //onClick event
    function setChatObject(Entity, Messege) {
        let curruentDate = new Date(); //getting current date

        //inner object containing Entity and message
        let newInnerObject = {}
        newInnerObject[Entity] = Messege

        // Outer object to store currentDate and innerObject
        let newOuterObject = {}
        newOuterObject[curruentDate] = { ...newInnerObject }
        lastChatInput.current = curruentDate;
        console.log('' + curruentDate)
        localStorage.setItem('' + curruentDate, JSON.stringify(newInnerObject)) //adding conversation to local storage //JSON.stringigy is deep copy
        setChatHistory({ ...chatHistory, ...newOuterObject }) //using spread operator to set new value of chatHistory object
    }


    useEffect(() => {

        //Condition to avoid executing function on first render
        console.log(Object.keys(chatHistory).length === 0 && localStorage.length != 0)
        if (lastChatInput.current != undefined) {
            BotResponse();
        }
        //on first render, Check if chatHistory is Empty and localStorage is NOt Empty. and then copy local storage to chatHistory
        else if (Object.keys(chatHistory).length === 0 && localStorage.length != 0) {
            var localChatCopy = {}
            for (let i = 0; i < localStorage.length; i++) {
                //localStorage.key() = returns the name of key at ith location.
                //localStorage.getItem() = Returns the valu associated with given key
                //new Date(): convert the string Date key to Object format.
                localChatCopy[new Date(localStorage.key(i))] = JSON.parse(localStorage.getItem(localStorage.key(i)))
                console.log("inside first render logic")
            }
            setChatHistory(localChatCopy)
        }

        console.log(chatHistory)

        // var keys = Object.keys(chatHistory)
        // for (let i = 0; i < keys.length; i++) {
        //     let date = new Date(keys[i]) 
        //     console.log(date.getTime());
        // }

    }, [chatHistory])

    //BotResponse
    function BotResponse() {
        //converting date time to string since it is stored as string in object key
        let Chatkey = lastChatInput.current.toString()

        //getting all the keys in array from object inside chatHistory[key]. here only object is {'User/Bot':'input'}
        let lastEntity = Object.keys(chatHistory[Chatkey])

        console.log(lastEntity[0])

        //Inserting bot response only if last input is from 'User'
        if (lastEntity[0] === 'User') {
            //Looping on Responses object.
            for (let Reskey in Responses) {
                // checking if input matches with key of respone object
                if (chatHistory[Chatkey]['User'] === Reskey) {
                    // console.log(Responses[Reskey])
                    let ResponseVal = Responses[Reskey] //getting response messege for Reskey
                    setTimeout(() => { setChatObject('Bot', ResponseVal) }, 1000) //delay to avoid overring value of existing datatime key chatHistoryObject.
                }
            }
        }
    }

    return <>
        <input type='text' onChange={setInput} value={inputVal}></input>
        <button onClick={() => { setChatObject('User', inputVal) }}> send</button>
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

