import React from 'react'

import LineItem from './LineItem';

const itemlist = ({items, checkid, deleted}) => {
    return (
        <ul> {items.map((item) => 
     
           <LineItem
           key={item.id}
           item= {item}
           deleted= {deleted}
           checkid={checkid}
           />
          )}
     </ul>
    )
  }
  
  export default itemlist