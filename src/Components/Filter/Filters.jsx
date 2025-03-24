import React, { useState } from 'react'

function Filters(props) {
  
  const [activeFilter,SetActiveFilter] = useState('All');
  

  return (
    <div className='bg-secondary d-flex px-3 justify-content-between align-items-center py-3'>
        <p className='small m-0 text-secondary ' >{props.totalItemsCount} items left</p>
        <div className='d-flex gap-2'>
            <p 
                className={`small m-0  cursor-pointer ${activeFilter == 'All'?'text-primary':'text-hover-light'}`} 
                onClick={() => {
                    props.applyFilters("All");
                    SetActiveFilter('All');  
                }}
            >
                All
            </p>
            <p 
                className={`small m-0  cursor-pointer ${activeFilter == 'Active'?'text-primary':'text-hover-light'}`} 
                onClick={() => {
                    props.applyFilters("Active");
                    SetActiveFilter('Active');  
                }}
            >
                Active
            </p>
            <p 
                className={`small m-0  cursor-pointer ${activeFilter == 'Completed'?'text-primary':'text-hover-light'}`} 
                onClick={() => {
                    props.applyFilters("Completed");
                    SetActiveFilter('Completed');  
                }}
            >
                Completed
            </p>
        </div>
        <p className='small m-0 text-secondary text-hover-light cursor-pointer' onClick={() => {props.removeCompleteditems()}}>Clear Completed</p>
    </div>
  )
}

export default Filters