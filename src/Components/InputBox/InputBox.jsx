import React, { useEffect, useRef, useState } from 'react';
import crossIcon from '../../assets/icon-cross.svg';
import { MdEdit } from "react-icons/md";  
import {UseToDoItem} from "../../Hooks/UseToDoItem";
import { UniqueIdGenerator } from '../../Services/utils';
import {addItem, modifyItem, removeItem} from "../../Redux/Actions/actions";
import { useDispatch } from 'react-redux';


function InputBox(props) {
  
  const dispatch = useDispatch();
  const [removeIconVisbility, SetremoveIconVisbility] = useState(false);
  const InputRef = useRef();
  // const { addNewItem, updateItem, removeItem  } = UseToDoItem();

  const [item, SetItem] = useState({
    id:"",
    description:"",
    isCompleted:false
  });

  useEffect(() => {
    if (props?.item != null) {
      SetItem(props?.item);
    }
  }, [props?.item]); 


  const handleDescriptionChange = (e) => {
    SetItem(prev => ({
      ...prev,
      description: e.target.value
    }));
  };

  const handleIsCompletedChange = (e) => {
    if( props.Mode == "View" )
    {
      SetItem(prev => {
        const updatedItem = { ...prev, isCompleted: e.target.checked };
        // props.editItem(updatedItem);  
        dispatch(modifyItem(updatedItem));
        return updatedItem;
      });
    }
    else
    {
      SetItem(prev => ({
        ...prev,
        isCompleted:!prev.isCompleted
      }));
    }

  };


    const handleEnter = (e) => {
      if (e.key === "Enter") {
        if (props.Mode === "View") {
          // props.editItem(item);
          dispatch(modifyItem(item));
        } else {
          let newId = UniqueIdGenerator();
          const updatedItem = { ...item, id: newId };
          // props.addItem(updatedItem);
          // addNewItem(updatedItem);
          dispatch(addItem(updatedItem));
          SetItem({ id: "", description: "", isCompleted: false }); 
        }
      }
    };

  const handleRemoveItem = () => {
    // props.removeItem(item.id);
    dispatch(removeItem(item.id));  
  }
  
  const handleEditItem = () => {
    InputRef.current.disabled = false;
    InputRef.current.focus();
    InputRef.current.style.border = "1px solid white " ; 
    InputRef.current.style.fontWeight = "bold"; 
  };


  const handleDisableInput = (e) => {
    if( props.Mode == "View" )
    {
      InputRef.current.disabled = true;
      InputRef.current.style.fontWeight = "" ; 
    }
  }

  return (
    <div
      className='bg-secondary border-bottom px-3 d-flex gap-3 rounded-1'
      onMouseEnter={() => SetremoveIconVisbility(true)}
      onMouseLeave={() => SetremoveIconVisbility(false)}
      draggable= {props?.Mode == "View"}
      onDragStart={props.onDragStart}
      onDragOver={props.onDragOver}
      onDrop={props.onDrop}
    >
      <label htmlFor="checkbox" className='d-flex align-items-center position-relative'>
        <input 
          className='position-absolute custom-checkbox' 
          type="checkbox" 
          name="checkbox" 
          id={item.id}
          checked={item.isCompleted} 
          onChange={handleIsCompletedChange}
        />
        <div className='p-2 my-auto cursor-pointer rounded-circle border'></div>
      </label>
      <input
        className={`fs-18 py-3 cursor-pointer text-light w-100 outline-0 bg-transparent border-0 
        ${item?.isCompleted ? 'text-decoration-line-through text-secondary' : ''} 
        ${props.Mode === "View" ? "small" : ""}`}
        type="text"
        name="item"
        id="item"
        ref={InputRef}
        disabled={props.Mode === "View"}
        value={item?.description}
        onChange={handleDescriptionChange}
        onKeyDown={(e)=>handleEnter(e)}
        onBlur={(e)=>handleDisableInput(e)}
      />
      {props?.Mode === "View" && !item?.isCompleted && removeIconVisbility &&
        <>
          <span 
            style={{height:"30px",color:"rgb(64,67,95)"}}  
            className='my-auto cursor-pointer'
            onClick={handleEditItem}
          >
            <MdEdit/>
          </span>
          <img 
            height={15}
            className='my-auto cursor-pointer'
            src={crossIcon} 
            alt="remove-icon"
            onClick={handleRemoveItem} 
          />
        </>
      }
    </div>
  );
}

export default InputBox;
