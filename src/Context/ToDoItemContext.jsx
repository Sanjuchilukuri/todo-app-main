import { createContext, useState, useEffect } from "react";
import { getItems, addItem, editItem, removeItemById, removeCompleteditems } from "../Services/LocalStorage";

export const ToDoItemContext = createContext({});

export default function ToDoItemProvider({children}){

    const [items, SetItems] = useState([]);

    useEffect(()=>{
        let items = getItems();
        SetItems(items);
    },[])

    const addNewItem = (item) =>
    {
        addItem(item);
        SetItems(getItems());
    }

    const updateItem = (item) => {
        editItem(item);
        SetItems(getItems());
    }

    const removeItem = (id) => {
        removeItemById(id);
        SetItems(getItems());
    }

    const removeAllCompleteditems = () => {
        removeCompleteditems();
        SetItems(getItems());
    }

    const updateOrder = (items) => {
        SetItems(items);
    }

    const applyFilters = (action) => {
        let items = getItems();
        switch(action)
        {
        case 'All':
            SetItems(items);
            break;
        case 'Active':
            items = items.filter( item => !item.isCompleted );
            SetItems(items);
            break;
        case 'Completed':
            items = items.filter( item => item.isCompleted );
            SetItems(items);
            break;
        }
    }

    return(
        <ToDoItemContext.Provider value={{items, addNewItem, updateItem, removeItem, removeAllCompleteditems, updateOrder, applyFilters }}>
            {children}
        </ToDoItemContext.Provider>
    );
}