import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [userName, setUserName] = useState("Sajid")
  const [isRemember, setIsRemember] = useState(false)
  const onChangeCall = (e) => setUserName(e.target.value)
  const onchangeCheckbox = (e) => { setIsRemember(e.target.checked) }
  console.log(isRemember)
  return (
    <>
      {< h1 className=' text-3xl font-bold text-red-700 underline text-center'>Use State</h1 >}
      <h1 className=' text-3xl font-bold text-blue-700 underline text-center'>Use With Input</h1>

      <div className='flex justify-center items-center flex-col'>
        <input value={userName} placeholder='Add Your Name'
          className='border-2 border-rose-500 mt-2 rounded-[6px] outline-none p-1 mb-5'
          onChange={onChangeCall}
        />
      </div>

      <h1 className=' text-3xl font-bold text-green-700 underline text-center'>Use State</h1>
      <h1 className=' text-3xl font-bold text-blue-700 underline text-center'>Use With CheckBox</h1>
      <div className=' text-center text-2xl mt-3'>
        <input className=' size-5' type="checkbox"
          checked={isRemember}
          onChange={onchangeCheckbox}
        />Remember Me
      </div>

    </>
  )
}

export default App
