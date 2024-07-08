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
        // console.log(newObject)
        setChatHistory({ ...chatHistory, ...newOuterObject }) //using spread operator to set new value of chatHistory object
    }


    useEffect(() => {
        // console.log("last Chat input", lastChatInput.current)
        //Condition to avoid executing function on first render
        if (lastChatInput.current != undefined) {
            console.log("last Chat input 2", lastChatInput.current)
            BotResponse();
        }
        console.log(chatHistory)
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

