import React from'react';

function UselocalStorage(item,initialValue){

    const itemLocalStorage = JSON.parse(localStorage.getItem(item));
    let itemDefault;

    if (!itemLocalStorage) {
        itemLocalStorage = localStorage.setItem(item,JSON.stringify(initialValue));
        itemDefault = JSON.parse(itemLocalStorage);
    }

    const {itemState,setItemState} = React.useState(itemDefault);
}