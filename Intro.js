// Component-> same as JS functions. reusable code. returns the JSX(or HTML code)
// function HELLO() {
//     console.log("Component is called")
//     return <h1>Hello React!!</h1> //this is JSX-> A syntax to write html in javasript
// }

// // <HELLO></HELLO> --> calling component
// ReactDOM.render(<HELLO></HELLO>, document.getElementById("react-cont"))

/********************************************************************* */
/**Passing Prop to component*/
// function HELLO(prop) {
//     console.log(typeof prop) //object
//     console.log(prop) //object defination
//     console.log(prop.name, prop.age) //values of properties in prop object
//     return <h1>Hello, I am {prop.name}. I am {prop.age} years old. </h1> //this is JSX-> A syntax to write html in javasript
// }

// ReactDOM.render(<HELLO name="Ajinkya" age={26}></HELLO>, document.getElementById("react-cont"))


/*********************************************************************** */
/**Component composition --> creating multiple HTML tages */

// function HELLO(prop) {
//     console.log(typeof prop) //object
//     console.log(prop) //object defination
//     console.log(prop.name, prop.age) //values of properties in prop object

//     //JSX allows only single parent element to be passed, hence wrapped both the p tags in div.
//     //drawback: extra div element is created in DOM tree.
//     return <div>
//         <p>Hello, I am {prop.name}. </p>
//     <p> I am {prop.age} years old. </p>
//     </div> //this is JSX-> A syntax to write html in javasript
// }

// function HELLO(prop) {
//     console.log(typeof prop) //object
//     console.log(prop) //object defination
//     console.log(prop.name, prop.age) //values of properties in prop object

//     //JSX allows only single parent element to be passed, hence wrapped both the p tags in div.
//     //<></>: Above drawback of extra div is overcomed.
//     return <>
//         <p>Hello, I am {prop.name}. </p>
//     <p> I am {prop.age} years old. </p>
//     </> //this is JSX-> A syntax to write html in javasript
// }


// ReactDOM.render(<HELLO name="Ajinkya" age={26}></HELLO>, document.getElementById("react-cont"))


/*************************************************************** */
/**Rendering list in DOM */

function HELLO(prop) {
    const list = [1, 2, 3]
    //map is a method for javascript on Array object. it takes array and traverse over it.
    //keys here idx in passed to list item every time it is created and it is internal to react keep track of uniqueness of each li.
    return <>
       {list.map((element, idx)=>
        <li key={idx}>{element}</li>
       )}
    </> //this is JSX-> A syntax to write html in javasript
}


ReactDOM.render(<HELLO></HELLO>, document.getElementById("react-cont"))