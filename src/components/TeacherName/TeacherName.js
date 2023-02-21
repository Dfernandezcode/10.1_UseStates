import "./TeacherName.css";
import React from "react";

const TeacherName = (props) => {
    console.log(TeacherName)

    const [state, setState] = React.useState("Edu")
        //[variable name, function name]
  
/*LongForm:
    //const myState = React.useState("Edu");
    //myState[0] 1st position of the state (Edu)
    //myState[1] second position - function to modify.


     const changeName = () => {
        myState[1] ("Fran");
        console.log(changeName);
    } 

*/
    
 const changeName = () => {
    setState("Fran");
    console.log(changeName);
 }
    

    return (
      <div className="teacher-name">
        <p>Hola {state}!</p>
        <button onClick={changeName}>Cambiar Nombre!</button>
      </div>
    );
  };


export default TeacherName;

//react won't re-render its components unless 2 cases happen:
//1. property changes || or useState is modified.


/*
React Strict Mode:

used for debugging.

Comment this to stop it.

*/