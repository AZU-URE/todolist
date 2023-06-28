import React, { useState } from 'react'
import axios from '../api/items'

const ADD_URL = '/item'

const AddItem = ({ setList }) => {

    const [title, setTitle] = useState('')
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post(
                ADD_URL,
                JSON.stringify({ "title": title }),
                {
                    headers: { "Content-Type": "application/json" }
                    // withCredentials: true
                }
            )
            console.log(response);
            setList(response?.data.itemArray)
            setTitle('')
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <form className='flex space-x-5 items-center' onSubmit={(e) => { handleSubmit(e) }}>
                <label></label>
                <input type='text' name='title_here' className='rounded-xl border-black border-2 p-2' value={title} onChange={(e) => setTitle(e.target.value)} />
                <button type='submit' className='rounded-full bg-blue-500 text-white px-4 py-2 text-center font-bold text-2xl'>+</button>
            </form>
        </div>
    )
}

export default AddItem
