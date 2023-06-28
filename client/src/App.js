import React, { useState } from 'react'
import ListTab from '../src/component/ListTab'

const App = () => {



  return (
    <div className='bg-teal-200 min-h-screen overflow-auto flex flex-col justify-center items-center w-full p-10'>
      <p className='mb-20 font-title text-8xl text-yellow-500 font-bold'>TODO-LIST</p>
      <ListTab />
    </div>
  )
}

export default App
