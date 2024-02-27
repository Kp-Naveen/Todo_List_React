
import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer'
import { useEffect,useState } from 'react';
import AddItem from './AddItem';
import SearchItem from './SearchItem'
import ApiRequest from './ApiRequest';



function App() {
  const [items, setItems] = useState([]);
  const   APIURL= "http://localhost:3000/items";
const[fetcherror,setFetcherror] = useState(null)
const [isload, setIsload] = useState(true)


  useEffect(()=> {
   const fetchItems = async ()=> {
  try { 
    const response = await fetch(APIURL);
    if(!response.ok) throw Error("Given Data is wrong")
    const listItems = await response.json();
    setItems(listItems);
    setFetcherror(null)

  }
  catch(err){
    setFetcherror(err.message)
  } finally{

    setIsload(false)
  }
    }

    setTimeout(()=>{
      (async ()=> await fetchItems()) ()
     },1000)
       },[])


  
  const addItem = async (item) =>{
    const id= items.length ? 
    items[items.length -1].id +1 : 1
    const newAddItem ={
      id,
      checked : false,
      item 
    }
    const listItems = [...items, newAddItem]
    setItems(listItems)

    const postOptions={
      method : 'post',
      headers :{
        'content-type' : 'application/json'
      },
      body : JSON.stringify(newAddItem)
}

const result= await ApiRequest(APIURL, postOptions)
if(result) setFetcherror(result)
  }

  const [newItem, setNewItem] = useState ('')
  const [search, setSearch] = useState('')

  const handleSubmit=(e)=>{
    e.preventDefault()
    if(!newItem) return;
    console.log(newItem)
    addItem(newItem)
    setNewItem('')
  }
 
  const checkid= async (id)=>{
     const listitem =items.map((item)=>
        item.id===id ? {...item,checked:!item.checked}: item )
        setItems(listitem)
        const myItem = listitem.filter((item)=> item.id===id)
        const updateOptions={
          method : 'PATCH',
          headers :{
            'content-type' : 'application/json'
          },
          body : JSON.stringify({checked:myItem[0].checked})
    }
    const reqUrl =`${APIURL}/${id}`
    const result= await ApiRequest(reqUrl, updateOptions)
    if(result) setFetcherror(result)

  }

  const deleted= async (id)=>{
   const deleted =items.filter((item)=>
    item.id!==id)
    setItems(deleted)
    const deleteOptions = {
      method: 'DELETE'
    }
    const reqUrl =`${APIURL}/${id}`
    const result= await ApiRequest(reqUrl, deleteOptions)
    if(result) setFetcherror(result)

  }
  return(
    <div>
      <Header title="Course List"/>
      <AddItem  
       handleSubmit = {handleSubmit}
       newItem= {newItem}
       setNewItem = {setNewItem}
       addItem = {addItem}
    
    />
    
    <SearchItem 
    search= {search}
    setSearch={setSearch}
    />
    <main>
      {isload &&  <h1 className='h1Load'>{`Loading items...`}</h1>}
      {fetcherror && <h2 className='h2Load'>{`Error : ${fetcherror}`}</h2>}
      {!isload && !fetcherror && <Content 
      items= {items.filter(item =>(item.item).toLowerCase().includes(search.toLocaleLowerCase()))}
      deleted= {deleted}
      checkid={checkid}
      />}
      </main>
      <Footer length={items.length} />
    </div>
  );
}

export default App;
