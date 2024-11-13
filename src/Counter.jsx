import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux' // these are hooks
import { decrement, increment, incrementByAmount, reset } from './Redux/slice/counterSlice'

function Counter() {
  const count = useSelector((state)=> state.counterReducer.count)
  const dispatch= useDispatch()
  const[amount,setAmount]=useState("")
  // console.log(amount)
  const handleIncrement=()=>{
    if(amount==""){
      alert("please provide the values")
    }else{
      dispatch(incrementByAmount(Number(amount)))//Number method convert the string into numbers
      setAmount("")// to the filed empty after onclick event and make chnages in the input tag 
    }
  }

  return (
    <>
      <h1 className="text-danger fw-bolder text-center mt-5">Counter Application</h1>
      <div className="conatiner border border-2 mt-3 p-3 w-50 " style={{marginLeft:"400px"}}>
        <h1 className="fw-bolder text-center mt-5 fs-1">{count}</h1>
        <div className='d-flex justify-content-evenly align-items-center mt-5'>
            <button className='btn btn-success' onClick={()=>dispatch(increment())}>Increment</button>
            <button className='btn btn-danger' onClick={()=>dispatch(reset())}>Reset</button>
            <button className='btn btn-warning' onClick={()=>dispatch(decrement())}>Decrement</button>
        </div>
        <div className='d-flex mt-5'>
            <input type="text" className='form-control' onChange={e=>setAmount(e.target.value)} placeholder='Enter the amount to be incremented' value={amount || ""}/>
            <button className='btn btn-primary ms-3' onClick={handleIncrement}>Increment Amount</button>
        </div>
      </div>
    </>
  )
}

export default Counter
