import './App.css';
import Header from './Components/Header/Header';
import InputBox from './Components/InputBox/InputBox';
import ToDoList from './Components/ToDoList/ToDoList';
import Filters from './Components/Filter/Filters';
import { useSelector } from 'react-redux';

function App() {

  const currentTheme = useSelector(state => state.Theme.theme);

  return (
    <div className='background vh-100 vw-100 row m-0 ' data-theme={currentTheme}>

      <div className='col-11 col-sm-9 col-md-6 col-lg-5 col-xl-4 m-auto  pt-3 h-80'>
        
        <Header/>

        <div className='mt-3'>
          <InputBox Mode="Edit" />
        </div>

        <ToDoList />

        <Filters />

        <p className='mt-3 small text-secondary text-center'>Drag and drop to reorder list</p>
      </div>

    </div>
  )
}

export default App
