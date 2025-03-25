import React, { useState } from 'react'
import { UseToDoItem } from '../../Hooks/UseToDoItem';

function Filters() {
  
  const [activeFilter,SetActiveFilter] = useState('All');
  const {items, applyFilters, removeAllCompleteditems} = UseToDoItem();

  return (
    <div className='bg-secondary d-flex px-3 justify-content-between align-items-center py-3'>
        <p className='small m-0 text-secondary ' >{items?.length||0} items left</p>
        <div className='d-flex gap-2'>
            <p 
                className={`small m-0  cursor-pointer ${activeFilter == 'All'?'text-primary':'text-hover-light'}`} 
                onClick={() => {
                    applyFilters("All");
                    SetActiveFilter('All');  
                }}
            >
                All
            </p>
            <p 
                className={`small m-0  cursor-pointer ${activeFilter == 'Active'?'text-primary':'text-hover-light'}`} 
                onClick={() => {
                    applyFilters("Active");
                    SetActiveFilter('Active');  
                }}
            >
                Active
            </p>
            <p 
                className={`small m-0  cursor-pointer ${activeFilter == 'Completed'?'text-primary':'text-hover-light'}`} 
                onClick={() => {
                    applyFilters("Completed");
                    SetActiveFilter('Completed');  
                }}
            >
                Completed
            </p>
        </div>
        <p className='small m-0 text-secondary text-hover-light cursor-pointer' onClick={() => {removeAllCompleteditems()}}>Clear Completed</p>
    </div>
  )
}

export default Filters