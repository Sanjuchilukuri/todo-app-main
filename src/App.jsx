import './App.css';
import Header from './Components/Header/Header';
import InputBox from './Components/InputBox/InputBox';
import ToDoList from './Components/ToDoList/ToDoList';
import Filters from './Components/Filter/Filters';
import { useState, useEffect } from 'react';
import { getItems, addItem, editItem, removeItemById, removeCompleteditems } from './Services/LocalStorage';

function App() {

  const [items, setItems] = useState([]);
  const [theme, SetTheme] = useState('dark');

  useEffect(()=>{
    let items = getItems();
    setItems(items);
  },[])

  const addNewItem = (item) =>
  {
    addItem(item);
    setItems(getItems());
  }

  const updateItem = (item) => {
    editItem(item);
    setItems(getItems());
  }

  const removeItem = (id) => {
    removeItemById(id);
    setItems(getItems());
  }

  const removeAllCompleteditems = () => {
    removeCompleteditems();
    setItems(getItems());
  }

  const applyFilters = (action) => {
    debugger;
    let items = getItems();
    switch(action)
    {
      case 'All':
        setItems(items);
        break;
      case 'Active':
        items = items.filter( item => !item.isCompleted );
        setItems(items);
        break;
      case 'Completed':
        items = items.filter( item => item.isCompleted );
        setItems(items);
        break;
    }
  }


  return (
    <div className='background vh-100 vw-100 row m-0 ' data-theme={theme}>

      <div className='col-11 col-sm-9 col-md-6 col-lg-5 col-xl-4 m-auto  pt-3 h-80'>
        
        <Header toggleTheme={(theme) => SetTheme(theme)} currentTheme={theme}/>

        <div className='mt-3'>
          <InputBox Mode="Edit" addItem={(item) =>addNewItem(item)} />
        </div>

        <ToDoList items={items} updateOrder={(items) => setItems(items)} editItem = {(item) => updateItem(item)} removeItem={(id)=>removeItem(id)}/>

        <Filters totalItemsCount={items.length} removeCompleteditems={() => {removeAllCompleteditems()}} applyFilters={(action) => applyFilters(action)}/>

        <p className='mt-3 small text-secondary text-center'>Drag and drop to reorder list</p>
      </div>

    </div>
  )
}

export default App
