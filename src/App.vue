<template>
    <div id="app">
        <todo-list
                v-for="card in todoCards"
                :type="card[0]"
                :todos="card[1]"
        ></todo-list>
        <todo-button class="vue-bottom"></todo-button>

        <keep-alive>
            <component is="todo-add" @hide=""></component>
        </keep-alive>
    </div>
</template>

<script>

    import todoList from './todo/todo_list'
    import todoButton from './todo/todo_button';
    import todoAdd from './todo/add/todo_add';
    import service from './todo/js/todo_service';

    export default {
        name: "App",
        data() {
            return {
                todos: [
                    {
                        content: 'I wanna 1111111',
                        isImportant: true,
                        done: false
                    },
                    {
                        content: 'I wanna 222222222',
                        isImportant: false,
                        done: true
                    },
                    {
                        content: 'I wanna 33333333',
                        isImportant: false,
                        done: true
                    },
                ],
                todoCards: null
            }
        },
        mounted() {
            // let type = 'Movie';
            // this.todos.forEach(item => {
            //     item.type = type;
            //     service.addTodo(item)
            // });

            this.todoCards = service.getTodoCards();
            for (let p of this.todoCards.entries()) {
                console.log(p[0], p[1])
            }
        },
        components: {
            todoList,
            todoButton,
            todoAdd
        }
    }
</script>

<style scoped lang="scss">
    #app {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1.2rem 0;
        flex-direction: column;

        & > .todo-list {
            margin-bottom: 1.2rem;
        }

        .vue-bottom {
            right: .5rem;
            bottom: .5rem;
            position: fixed;
        }
    }

</style>