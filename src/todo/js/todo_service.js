
import db from './todo_db';

let data = [
    ['To Do', {
        class: 'todo',
        data: [
            {content: '吃晚餐', isImportant: false, done: true},
            {content: '吃早餐', isImportant: false, done: false},
            {content: '吃午餐', isImportant: false, done: true},
        ]
    }],
    ['Movie To Watch', {
        class: 'movie',
        data: [
            {content: '蜘蛛侠', isImportant: true, done: false},
            {content: '蝙蝠侠', isImportant: false, done: true},
            {content: '钢铁侠', isImportant: true, done: true},
        ]
    }],
];

let typeEnum = [
    ['To Do', 'chocolate'],
    ['Movie', 'cadetblue'],
    ['Job', 'cornflowerblue'],
    ['Book', 'indianred'],
];

let map = new Map(data);
let typeMap = new Map(typeEnum);

export default {
    getTypeEnum() {
        return typeMap
    },
    /**
     * 创建 todo卡片
     * @param type (String)
     */
    createTodoCard(type) {
        let cards = db.getTodoCards();
        if(cards.has(type)) {
            let warn = '该类型的卡片已经存在'
            return alert(warn);
        }

        cards.set(type, {
            class: typeMap.get(type),
            data: []
        });

        db.setTodoCards(cards);
    },

    getTodoCards() {
        return db.getTodoCards();
    },

    /**
     * 删除 todo卡片
     * @param todoID
     */
    deleteTodoCard(todoID) {
        // let cards = db.getTodoCards();
        // cards.splice(cards.findIndex(item => item.id === todoID), 1);
        // db.setTodoCards(cards);
    },

    /**
     * 添加 todo
     * @param type
     * @param content
     * @param isImportant
     */
    addTodo({content = new this.TodoError('需要写入待完成内容'), type = 'To Do', isImportant = false} = {}) {
        let cards = db.getTodoCards();
        let card = cards.get(type);
        console.log(type, card);

        if(!card) {
            card = {
                class: typeMap.get(type),
                data: []
            };

            cards.set(type, card)
        }

        let todos = card.data,
            len = todos.length;

        todos.push({
            id: len+1,
            content: content,
            isImportant: isImportant,
            done: false
        });

        db.setTodoCards(cards);
    },

    /**
     * 修改 todo内容
     * @param todoID
     * @param content
     * @param done
     */
    updateTodo({todoID = new this.TodoError('需要传入待修改的todoID'), content = '', done = false}) {
    },

    /**
     * 删除 todo
     * @param todoID
     */
    removeTodo(todoID) {
        let cards = db.getTodoCards();
        let todos = db.getTodos();

    },

    TodoError(msg = '在操作todo时发生错误') {
        throw new Error(msg);
    }

}