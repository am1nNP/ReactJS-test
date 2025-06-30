import React from 'react'

const Card = ({ product: { id, title, image ,description,price} }) => {
  
  return (
    <div className='box'>
        <div className='imageBox'>
          <img className='image' src={image ? `${image}` : "not found"} alt="" />
        </div>
        <h3 className='title'>{title}</h3>
        <p className='description'>{description}</p>
        <p className='price'>price :{price}$</p>
        <button onClick={()=>console.log("purchased")} className='btn-purchase'>purchase</button>
    </div>
  )
}

export default Card