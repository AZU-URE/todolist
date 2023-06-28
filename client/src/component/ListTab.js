import React, { useState } from 'react'
import AddItem from '../component/AddItem'
import List from '../component/List'
import UpdateItem from './UpdateItem'

const ListTab = () => {

    const [list, setList] = useState([])
    const [update, setUpdate] = useState(false)
    const [id, setId] = useState()
    return (
        <div className='flex flex-col bg-yellow-200 p-10 rounded-lg border-yellow-500 border-2 space-y-5'>
            {
                !update
                    ?
                    <div>
                        <AddItem setList={setList} />
                        <List list={list} setList={setList} setUpdate={setUpdate} setId={setId} />
                    </div>
                    :
                    <UpdateItem setUpdate={setUpdate} id={id} />
            }
        </div>
    )
}

export default ListTab
