import React, { useEffect, useState } from 'react'
import axios from "../api/items"
import ItemCol from './ItemCol'

const GET_URL = "/item"

const List = ({ list, setList, setUpdate, setId }) => {


    const fetchData = async () => {
        try {
            const response = await axios.get(GET_URL, {
                headers: { "Content-Type": "application/json" }
            })
            // listItems = response?.data
            // console.log(response?.data);
            setList(response?.data)
        } catch (error) {
            console.log(error);
        }
    }
    // setList(listItems)
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className='w-full'>
            {/* <Item list={list} /> */}
            <ItemCol list={list} setList={setList} setUpdate={setUpdate} setId={setId} />
        </div>
    )
}

export default List
