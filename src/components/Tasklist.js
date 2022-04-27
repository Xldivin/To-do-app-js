export const Tasklist = ({task, onDelete, onToggle}) => {
  return (
    <div className={`tasks ${task.iscomplete ? 'reminder' : ''}`}>
        <div className="task2">
        <p className="taskname" title="Task">{task.name}</p>
        <h6 className="taskdesc">{task.description}</h6>
        </div>
        <button className="done" onClick={() => 
         onToggle(task.id)}>Complete</button>
        <button className="delete" onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  )
}
