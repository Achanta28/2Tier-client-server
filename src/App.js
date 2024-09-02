import logo from './logo.svg';
import './App.css';
import {useState} from "react"


function App() {
  let [students,setStudents]= useState([])
 
  let getStudentsFromServer =async()=>{

    let rerOptions = {
      method:"GET",
    }
    let JSONData = await fetch("http://localhost:2772/Students",rerOptions);

    let JSO = await JSONData.json();
    setStudents(JSO)

    console.log(JSO)

  


  };

  
  return (
    <div className="App">
     <button onClick={()=>{
      getStudentsFromServer();

     }}>Students</button>
     {
      students.map((ele,i)=>{
        return <h2 key={i}>{ele}</h2>

      })
     }
    </div>
  );
}

export default App;
