import {useState} from 'react'
import s from './CreateTaskForm.module.css'

const CreateTaskForm = () => {

    const [text, setText] = useState('')

    const handleChange = (e) => {
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        alert(text)
    }


    return <form onSubmit={handleSubmit} class={s.createForm}>
        <h1>Create Task</h1>
        <label htmlFor="task">Please, enter the text for creating a new task</label>
        <textarea id='task' onChange={handleChange} />
        <button>Submit</button>
    </form>
}

export default CreateTaskForm