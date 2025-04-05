// import { } from "../../Constants"
import {TOGGLE_THEME,ItemAdded, ItemModified, ItemRemoved, RemoveCompletedItems, UpdateItemsOrder, ApplyFilter } from "../../Constants";

export const toggleTheme = () => ({
    type:TOGGLE_THEME
});

export const addItem = (item) => (
{
    type: ItemAdded,
    payload: {item}
});

export const removeItem = (id) => ({
    type: ItemRemoved,
    payload: { id }
});

export const modifyItem = (item) => ({
    type: ItemModified,
    payload: { item }
});

export const removeCompletedItems = () => ({
    type: RemoveCompletedItems
});

export const updateOrder = (items) => ({
    type:UpdateItemsOrder,
    payload:{items}
})

export const applyFilter = (filterType) => ({
  type: ApplyFilter,
  payload: { filterType }
});
