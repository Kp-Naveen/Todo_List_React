


import React from 'react'
import { FaPlus} from 'react-icons/fa'
import { useRef } from 'react'


const AddItem = ({handleSubmit,setNewItem,newItem}) => {
  const inputRef = useRef()
  return (
   <form className='addForm' onClick={handleSubmit}>
   <label htmlFor="addItem"> ADD ITEM</label>
    <input type="text" 
    placeholder='Add item'
    autoFocus
    ref= {inputRef}
    id="addItem"
    value ={newItem}
    onChange={(e)=>{
        setNewItem(e.target.value)
    }}
    required
    />
    <button  type="submit"
    aria-label='Add Item'
    onClick={()=> inputRef.current.focus()}> 
     <FaPlus />
     
     </button>
   </form>

  )
}

export default AddItem