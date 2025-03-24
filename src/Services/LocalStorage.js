import { LocalStorageKey } from "../Constants"

export function getItems()
{
    const items = localStorage.getItem(LocalStorageKey);
    return JSON.parse(items)||[];
}

export function addItem(item)
{
    let existedItems = getItems();
    existedItems?.push(item);
    localStorage.setItem(LocalStorageKey, JSON.stringify(existedItems));
}

export function editItem(updatedItem)
{
    let existedItems = getItems();
    existedItems = existedItems?.filter( item => item.id != updatedItem.id );
    existedItems?.push(updatedItem);
    localStorage.setItem(LocalStorageKey,JSON.stringify(existedItems));
}

export function removeItemById(id)
{
    let existedItems = getItems();
    existedItems = existedItems?.filter( item => item.id != id );
    localStorage.setItem(LocalStorageKey, JSON.stringify(existedItems));
}

export function removeCompleteditems()
{
    let existedItems = getItems();
    existedItems = existedItems?.filter( item => !item.isCompleted  );
    localStorage.setItem(LocalStorageKey, JSON.stringify(existedItems));
}