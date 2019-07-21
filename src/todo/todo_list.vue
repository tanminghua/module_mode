<template>
    <div class="todo-list">
        <todo-type></todo-type>
        <todo-item
                v-for="item in todos.data"
                v-bind="item"
        >{{item}}</todo-item>
    </div>
</template>

<script>
    import todoType from './todo_type';
    import todoItem from './todo_item';

    export default {
        name: "todu_item",
        props: {
            type: String,
            todos: Object
        },
        components: {
            todoType,
            todoItem,
        }
    }
</script>

<style scoped lang="scss">
    .todo-list {
        color: #333;
        box-sizing: border-box;
        font-size: .45rem;
        background-color: #ffffff;
        width: 9rem;
        min-height: 3rem;
        border-radius: .2rem;
        box-shadow: #999 0 .3rem .35rem;
        padding: 0 .2rem .5rem .3rem;
    }
</style>