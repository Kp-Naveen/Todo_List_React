




import React from 'react'
const SearchItem = ({search,setSearch}) => {
  return (
    <form className='searchForm' onClick={(e)=>e.preventDefault()}>

        <label htmlFor="search">Search</label>
        <input 
        id= "search"
        placeholder='Search Items'
        type="text" 
        value={search}
        onChange={(e)=>{setSearch(e.target.value)}}
        
        />


    </form>
  )
}

export default SearchItem