import React from 'react'
import { LuTrash2 } from "react-icons/lu";
const LineItem = ({item,checkid, deleted}) => {
  return (
    <li  className='item' key={item.id}>
              <input type="checkbox"
              onChange={()=>checkid(item.id)}
              checked = {item.checked} />
              <label
              style= {(item.checked) ? {textDecoration: 'line-through'}: null}
              onDoubleClick={()=>checkid(item.id)}
              >{item.item}</label>
              <LuTrash2 
              role="button"
              tabIndex="0"
              aria-label={'Delete'}
              onClick={()=>deleted(item.id)}
              />
            </li>
  )
}

export default LineItem