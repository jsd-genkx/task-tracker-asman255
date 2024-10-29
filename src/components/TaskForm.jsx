import React from 'react'
import { useState } from 'react'
import { onAddTask } from '../App'
let nextId = 0;
function TaskForm() {
    const [name, setName] = useState('');
    const [formTask, setFormTask] = useState([]);


    return (
        <> <div>TaskForm</div>
            <input className='border-2'
                value={name}
                onChange={e => setName(e.target.value)} />
            <button onClick={() => {
                // setFormTask([

                //     { id: nextId++, name: name }
                // ]);
                onAddTask(nextId++, name)

                //console.log(formTask)
            }}>Add</button>





        </>

    )
}

export default TaskForm