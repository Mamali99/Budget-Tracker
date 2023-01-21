import React from 'react'
import { TiDelete } from "react-icons/ti"
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

export default function ExpenseItem({id, name, cost, date}) {
  const {dispatch} = useContext(AppContext);

  const handleDelete = (id) => {
    dispatch({
      type: 'DELETE_EXPENSE',
      payload: id
  });
  }
  return (
    <li className='list-group-item d-flex justify-content-between align-items-center'>
        {name}
        <span>{date}</span>
        <div>
            <span className='badge badge-primary badge-pill text-white bg-primary ml-auto'>{cost}</span>
            <TiDelete size="1.5em" onClick={()=>handleDelete(id)}></TiDelete>
        </div>
        
    </li>
  )
}
