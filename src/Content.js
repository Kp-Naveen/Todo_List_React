


import React from 'react';
import ItemList from './ItemList';


const Content = ({items,checkid, deleted}) => {
  
  
  return (
    <>

      {(items.length) ?  (

        <ItemList 
        items= {items}
      deleted= {deleted}
      checkid={checkid}
      />
           ) : (<p style={{marginTop: '2rem',
       fontFamily: 'aril', fontSize: '2rem', color: 'mediumblue'}}>Your Todo list is empty</p>)
       }    </>
  )
}

export default Content