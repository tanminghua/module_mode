
let cardName = 'todoCards',
    todoName = 'todos';

export default {

    getTodoCards() {
        let mapArray = localStorage.getItem(cardName);
        return new Map(JSON.parse(mapArray));
    },

    setTodoCards(todoCards) {
        let mapArray = [];
        for(let [key, value] of todoCards.entries()) {
            mapArray.push([key, value]);
        }
        localStorage.setItem(cardName, JSON.stringify(mapArray))
    }

}