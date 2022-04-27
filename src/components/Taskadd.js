import { useRef } from "react"


const Taskadd = ({onAdd}) => {
    const nameRef = useRef();
    const descrptionRef = useRef();

    const onSubmit = (e) =>{
        e.preventDefault()
        const name = nameRef.current.value
        const description = descrptionRef.current.value
        const iscomplete = false

        onAdd( {name , description, iscomplete})
    }
  return (
   <div className="app">
       <h1 className="head" title="header" data-testid="head">My Todos</h1>
       <div className="holder">
           <form className="header" data-testid="form" onSubmit={onSubmit}>
               <div className="input-holder">
               <label className="labels" title="desc1">Tasks</label>
               <br />
               <input 
               type="text"
               id="name"
               placeholder="Enter your name"
               ref={nameRef}
               title="input"
               />
               </div>
               <div className="input-holder">
               <label className="labels" title="desc">Descrption</label>
               <br />
               <input 
               type="text"
               id="name"
               placeholder="Descrption"
               ref={descrptionRef}
               title="input1"
               />
               </div>
               <button title="button">ADD TODO</button>
           </form>
       </div>
   </div>

  )
}
export default Taskadd