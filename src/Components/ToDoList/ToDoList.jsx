import React, { useEffect, useState } from 'react';
import InputBox from '../InputBox/InputBox';
import { getItems } from '../../Services/LocalStorage';

export default function ToDoList(props) {
//   const [items, setItems] = useState([
    // { id: 1, isCompleted: true, description: "Completed Online JavaScript Course" },
    // { id: 2, isCompleted: false, description: "Jog around the park 3X" },
    // { id: 3, isCompleted: false, description: "10 minutes meditation" },
    // { id: 4, isCompleted: false, description: "Read 1 hour" },
    // { id: 5, isCompleted: false, description: "Pick up groceries" },
    // { id: 6, isCompleted: false, description: "Completed Todo App on Frontend Mentor" },
//   ]);

//   useEffect(()=>{
//     let items = getItems();
//     setItems(items);
//   },[])

  const [draggedItem, setDraggedItem] = useState(null);

  // When dragging starts, store the dragged item
  const handleDragStart = (index) => {
    setDraggedItem(index);
  };

  // Allow drop by preventing default behavior
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  // Swap items when dropped
  const handleDrop = (index) => {
    if (draggedItem === null) return;

    const updatedItems = [...props?.items];
    const draggedItemContent = updatedItems[draggedItem];

    // Remove the dragged item and insert it at the new position
    updatedItems.splice(draggedItem, 1);
    updatedItems.splice(index, 0, draggedItemContent);

    props.updateOrder(updatedItems);
    // setItems(updatedItems);
    setDraggedItem(null);
  };

  return (
    <div className='mt-3'>
      {props?.items?.map((item, index) => (
        <InputBox
          key={item.id}
          Mode="View"
          item={item}
          draggable
          onDragStart={() => handleDragStart(index)}
          onDragOver={handleDragOver}
          onDrop={() => handleDrop(index)}
          editItem = {(item) => props.editItem(item)}
          removeItem = {(id) => props.removeItem(id)}
        />
      ))}
    </div>
  );
}
