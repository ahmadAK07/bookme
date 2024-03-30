import React from 'react'

const List = ({list}) => {
  return (
    <>
    
    {list.map((item, i)=>{
        return <li className='text-white my-2 mb-4 text-sm pl-2' key={i}>{item}</li>
      })}
    </>
  
  )
}

export default List
