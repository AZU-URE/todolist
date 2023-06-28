import React, { useState } from 'react'
import axios from '../api/items'

const URL = '/item'

const UpdateItem = ({ setUpdate, id }) => {
    const [title, setTitle] = useState('')
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.patch(
                URL,
                JSON.stringify({ "id": id, "title": title }),
                {
                    headers: { "Content-Type": "application/json" }
                }
            )
            console.log(response);
            setUpdate(false)
        } catch (error) {
            console.log(error);
        }


    }
    return (
        <div>
            <form className='flex space-x-5 items-center' onSubmit={(e) => { handleSubmit(e) }}>
                <label></label>
                <input type='text' name='title_here' className='rounded-xl border-black border-2 p-2' value={title} onChange={(e) => setTitle(e.target.value)} />
                <button type='submit' className='rounded-full bg-blue-500 text-white p-2 text-center text-xl'>Ok</button>
            </form>
        </div>
    )
}

export default UpdateItem
