import React, {useState} from 'react'

const Searchtable = (props) => {


    const submitHandler = (e) => {
        e.preventDefault()
    }

  return (
    <form onSubmit={submitHandler}>
      <input type='text' placeholder={props.placeholder} onChange={props.getMeal}/>
      <button onClick={props.useFetch}>Search</button>
    </form>
  )
}

export default Searchtable
