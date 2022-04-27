import { Tasklist } from "./Tasklist"
export const Task = ({ tasks, onDelete, onToggle }) => {


  return (
    <>
    {tasks.map((task) => ( 
    <Tasklist key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>
    ))}

    </>
  )
}
