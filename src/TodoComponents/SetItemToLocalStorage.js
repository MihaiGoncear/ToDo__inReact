
export function SetItemToLocalStorage(item) {
    localStorage.setItem('todos', JSON.stringify(item))
} 
    
export function SetDoneTodosCounterToLocalStorage(item) {
    localStorage.setItem('doneTodosCounter', JSON.stringify(item))
} 
