import { ItemAdded, ItemModified, ItemRemoved, RemoveCompletedItems, UpdateItemsOrder, ApplyFilter } from "../../Constants";

const initialState = {
  allItems: [],
  filterType: "All", // All | Active | Completed
  filteredItems: []
};

const filterItems = (items, filterType) => {
  switch (filterType) {
    case "Active":
      return items.filter(item => !item.isCompleted);
    case "Completed":
      return items.filter(item => item.isCompleted);
    default:
      return items;
  }
};

export default function TodoItemReducer(state = initialState, action) {
  let updatedAll;
  switch (action.type) {
    case ItemAdded:
      updatedAll = [...state.allItems, action.payload.item];
      return {
        ...state,
        allItems: updatedAll,
        filteredItems: filterItems(updatedAll, state.filterType)
      };

    case ItemRemoved:
      updatedAll = state.allItems.filter(item => item.id !== action.payload.id);
      return {
        ...state,
        allItems: updatedAll,
        filteredItems: filterItems(updatedAll, state.filterType)
      };

    case ItemModified:
      updatedAll = state.allItems.map(item =>
        item.id === action.payload.item.id
          ? { ...item, ...action.payload.item }
          : item
      );
      return {
        ...state,
        allItems: updatedAll,
        filteredItems: filterItems(updatedAll, state.filterType)
      };

    case RemoveCompletedItems:
      updatedAll = state.allItems.filter(item => !item.isCompleted);
      return {
        ...state,
        allItems: updatedAll,
        filteredItems: filterItems(updatedAll, state.filterType)
      };

    case UpdateItemsOrder:
      return {
        ...state,
        allItems: [...action.payload.items],
        filteredItems: filterItems(action.payload.items, state.filterType)
      };

    case ApplyFilter:
      return {
        ...state,
        filterType: action.payload.filterType,
        filteredItems: filterItems(state.allItems, action.payload.filterType)
      };

    default:
      return state;
  }
}
