import React, { useState } from 'react'
import { PiNotePencilDuotone } from "react-icons/pi"
import { ImBin2 } from "react-icons/im"
import axios from '../api/items'

const URL = '/item'

const ItemCol = ({ list, setList, setUpdate, setId }) => {



    const deleteItem = async (id) => {
        console.log(id);
        try {
            const response = await axios.delete(
                `${URL}/${id}`
            )
            setList(response?.data.itemArray)
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    const handleUpdate = (id) => {
        setUpdate(true)
        setId(id)
    }


    return (
        <div>
            <ul>
                {list.map((el) => (

                    <div key={el.id} className=' bg-yellow-400 m-5 p-3 rounded-xl flex flex-row justify-between items-center'>

                        <li className=''>{el.title}</li>
                        <div className='flex'>
                            <PiNotePencilDuotone className='text-red-500 mr-2' style={{ fontSize: '20px' }} onClick={() => handleUpdate(el.id)} />
                            <ImBin2 className='text-green-500' style={{ fontSize: '18px' }} onClick={() => {
                                deleteItem(el.id)
                            }} />
                        </div>

                    </div>


                ))}
            </ul>


        </div>
    )

}

export default ItemCol
