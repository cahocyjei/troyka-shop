import React from'react';

function UselocalStorage(item,initialValue){

    const itemLocalStorage = JSON.parse(localStorage.getItem(item));
    let itemDefault;

    if (!itemLocalStorage) {
        itemDefault = localStorage.setItem(item,initialValue);
    }
}