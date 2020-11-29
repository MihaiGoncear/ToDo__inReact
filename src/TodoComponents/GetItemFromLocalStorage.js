export function GetItemFromLocalStorage() {
    return JSON.parse(localStorage.getItem('todos'))
}

export function GetDoneTodosCounterFromLocalStorage() {
    return JSON.parse(localStorage.getItem('doneTodosCounter'))
}