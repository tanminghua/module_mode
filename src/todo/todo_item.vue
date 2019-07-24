<template>
    <div class="todo-item" :class="{ done: isDone, 'todo-important': isImportant }">
        <div class="todo-content ">{{content}}</div>
        <img class="is-important" v-if="isImportant" src="../images/icon.png" alt="">
        <label for="todo-done">
            <input type="checkbox" v-model="isDone" id="todo-done" class="todo-done">
        </label>
    </div>
</template>

<script>
    export default {
        name: "todo_item",
        props: {
            content: String,
            isImportant: {
                default: false,
                type: Boolean
            },
            done: {
                default: false,
                type: Boolean
            }
        },
        data() {
            return {
                isDone: this.done
            }
        }
    }
</script>

<style lang="scss" scoped>

    $iconSize: .6rem;
    .todo-item {
        display: flex;
        justify-content: center;
        align-items: center;
        line-height: 1rem;

        &.todo-important {
            font-weight: bold;
            font-size: .43rem;
        }

        &.done {
            .todo-content {
                text-decoration: line-through;
                text-decoration-width: 1px;
                color: #666666;
            }
        }
    }

    .todo-content {
        flex: 1;
    }

    .is-important {
        height: $iconSize;
        width: $iconSize;
    }

    .todo-done {
        height: $iconSize / 2;
        width: $iconSize / 2;
        -webkit-transform: scale(.5);
        -moz-transform: scale(.5);
        -ms-transform: scale(.5);
        -o-transform: scale(.5);
        transform: scale(.5);
        margin: 0 .1rem;
    }

    .todo-done::after {
        box-sizing: content-box;
        content: '';
        background: #ffffff;
        border: .05rem solid chocolate;
        border-radius: 100%;
        display: inline-block;
        height: $iconSize / 2;
        width: $iconSize / 2;
        transform: translate(-10%, -10%) scale(2);
    }

    .todo-done:checked::after {
        background-color: chocolate;
    }
</style>