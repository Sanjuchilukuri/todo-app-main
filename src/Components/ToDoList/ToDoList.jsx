import React, { useEffect, useState } from 'react';
import InputBox from '../InputBox/InputBox';
import { getItems } from '../../Services/LocalStorage';
import { UseToDoItem } from '../../Hooks/UseToDoItem';

export default function ToDoList() {

  const {items, updateOrder} = UseToDoItem();

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

    const updatedItems = [...items];
    const draggedItemContent = updatedItems[draggedItem];

    // Remove the dragged item and insert it at the new position
    updatedItems.splice(draggedItem, 1);
    updatedItems.splice(index, 0, draggedItemContent);

    updateOrder(updatedItems);
    // setItems(updatedItems);
    setDraggedItem(null);
  };

  return (
    <div className='mt-3'>
      {items?.map((item, index) => (
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
