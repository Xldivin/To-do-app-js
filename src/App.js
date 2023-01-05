import Taskadd from "./components/Taskadd";
import { useState, useEffect} from "react"
import { Task } from "./components/Task";

function App() {
  const [tasks, setTask] = useState ([]) 

  //to fetch task and use useEffect to put them in the state..
  useEffect(() =>{
    const getTasks = async () => {
      const Taskfromserver = await fetchtask()
      setTask(Taskfromserver)
    }
   
    getTasks()
  }, [])
 
  
  // Fetch data
   const fetchtask = async () => {
      const response = await fetch ('https://json-db-xwcy.onrender.com/tasks')
      const data = await response.json() 
      return data
    }

    const fetchonetask = async (id) => {
      const response = await fetch (`https://json-db-xwcy.onrender.com/tasks/${id}`)
      const data = await response.json() 
      return data
    }

 // Toggle the reminder
    const toggleReminder = async(id) => {
      const tasktotoggle = await fetchonetask(id)
      const updatedtask = { ...tasktotoggle, iscomplete: !tasktotoggle.iscomplete}
      
      const res = await fetch(`https://json-db-xwcy.onrender.com/tasks/${id}`,{
        method: 'PUT',
        headers: {
          'Content-Type' : 'application/json'
        },
        body:JSON.stringify(updatedtask)
      })
      const data = await res.json()
      console.log(data)
  
  
      setTask(tasks.map((task) => task.id === id ?
       { ...task, iscomplete: data.iscomplete}:task))
     }



    // const toggleReminder = (id) =>{
    //   setTask(tasks.map((data) => data.id === id ? {...data , iscomplete: !data.iscomplete } : data))
    // }



 
//ADD TASK
const addTask = async (task) => {
   const res = await fetch('https://json-db-xwcy.onrender.com/tasks',{
     method: 'POST',
     headers: {
     "Content-Type" : "application/json"
      },
      body: JSON.stringify(task)
   })
   const data = await res.json()
   setTask([...tasks, data])

  // const id = Math.floor(Math.random()*1000)
  // const newtask = {name,description,id}
  // console.log(newtask)
  // setTask([...tasks, newtask])
}


//DELETE TASK
const deleteTask = async (id) => {
  await fetch(`https://json-db-xwcy.onrender.com/tasks/${id}`, {
    method: 'DELETE',
  })
  setTask(tasks.filter((task)=> task.id !== id))
}



  return (
    <div className="container">
      <Taskadd onAdd={addTask}/>
      <Task tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
    </div>
  );
}

export default App;
