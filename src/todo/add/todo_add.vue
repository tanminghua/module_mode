<template>
    <div class="todo-add">
        <div class="todo-add-content">
            <input type="text" class="todo-content">
            <div class="todo-type">
                <todo-type-card
                        v-bind="typeCard"
                />

            </div>
        </div>
    </div>
</template>

<script>
    import todoService from '../js/todo_service'
    import todoTypeCard from './todo-type-card'
    export default {
        name: "todo_add",
        data() {
            return {
                typeCard: {
                    theme: 'chocolate',
                    type: 'To Do',
                    isActive: false
                }
            }
        },
        created() {
            todoService.getTypeEnum().forEach((item, index) => {
                console.log(item, index)
                return item
            })
        },
        computed: {
            todos() {
                let todoTypes = [];
                todoService.getTypeEnum().forEach((item, index) => {
                    console.log(item, index)
                })
            }
        },
        components: {
            todoTypeCard
        }
    }
</script>

<style scoped lang="scss">

    .chocolate {
        color: chocolate;

        &.active {
            background-color: chocolate;
            color: #ffffff;
        }
    }

    .cadetblue {
        color: cadetblue;

        &.active {
            background-color: cadetblue;
            color: #ffffff;
        }
    }

    .cornflowerblue {
        color: cornflowerblue;

        &.active {
            background-color: cornflowerblue;
            color: #ffffff;
        }
    }

    .indianred {
        color: indianred;

        &.active {
            background-color: indianred;
            color: #ffffff;
        }
    }

    .todo-add {
        font-size: .45rem;
        content: '';
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, .7);
        z-index: auto;

        & > .todo-add-content {
            background-color: #fff;
            position: fixed;
            top: 1rem;
            min-height: 50%;
            left: .5rem;
            right: .5rem;
            border-radius: .2rem;
            padding: .5rem;

            & .todo-content {
                outline: none;
                box-sizing: border-box;
                padding: .3rem 0 .2rem;
                width: 95%;
                font-size: .5rem;
                border: none;
                border-bottom: 1px solid #dedede;
            }
        }

        & .todo-type {
            display: flex;
            margin-top: .5rem;

            & li {
                padding: .15rem .3rem;
                border: .05rem solid chocolate;
                margin-right: .1rem;
                border-radius: .2em;
            }
        }
    }
</style>