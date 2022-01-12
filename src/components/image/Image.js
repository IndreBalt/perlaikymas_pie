import React from 'react'

const Image = ({m}) => {



  return (
    <div className='image'>
       <p>{m.strMeal}</p>
        <img src={m.strMealThumb}/>
    </div>
  )
}

export default Image
