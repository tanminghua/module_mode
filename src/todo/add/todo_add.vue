<template>
    <div class="todo-add">
        <div class="todo-add-content">
            <input type="text" class="todo-content" :style="colorObject">
            <div class="todo-type">
                <todo-type-card
                        v-for="type in types"
                        v-bind="type"
                        @change="cardActived(type, types)"
                />
            </div>
            <todo-button class="add-button" :theme="activeTheme"></todo-button>
            <div class="vue-bottom" :style="colorObject">
                <todo-switch :theme="activeTheme" @change="isMarkImportant"></todo-switch>
                <span class="mark-important">标记为重要</span>
            </div>
        </div>
    </div>
</template>

<script>
    import todoService from '../js/todo_service'
    import todoTypeCard from './todo_type_card'
    import todoSwitch from './todo_switch'
    import todoButton from '../todo_button'
    export default {
        name: "todo_add",
        data() {
            return {
                types: [],
            }
        },
        created() {
            let count = 0;
            todoService.getTypeEnum().forEach((value, key) => {
                console.log(value, key);
                this.types.push({
                    theme: value,
                    type: key,
                    isActive: !count ? true : false
                });
                count++
                return value
            })
        },
        computed: {
            colorObject() {
                console.log(111)
                let color = this.activeTheme;
                console.log(color)

                return {
                    color
                };
            },
            activeTheme() {
                let theme;
                this.types.forEach(item => {
                    if(item.isActive) {
                        theme = item.theme
                    }
                })

                return theme;
            }
        },
        methods: {
            cardActived(type, types) {
                types.forEach(item => {
                    if(item === type) {
                        item.isActive = true;
                    } else {
                        item.isActive = false;
                    }
                })
            },
            isMarkImportant(isImportant) {
                console.log(isImportant)
            }
        },
        components: {
            todoTypeCard,
            todoSwitch,
            todoButton,
        }
    }
</script>

<style scoped lang="scss">

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

        .todo-add-content {
            background-color: #fff;
            position: fixed;
            top: 1rem;
            left: .5rem;
            right: .5rem;
            border-radius: .2rem;
            padding: .5rem;

            .todo-content {
                outline: none;
                box-sizing: border-box;
                padding: .3rem 0 .2rem;
                width: 95%;
                font-size: .5rem;
                border: none;
                border-bottom: .03rem solid;
            }

            .vue-bottom {
                bottom: .5rem;
                display: flex;
                align-items: center;
                margin-top: .5rem;

                * + * {
                    margin-left: .2rem;
                }

            }

            .add-button {
                float: right;
            }

        }

        & .todo-type {
            display: flex;
            margin-top: .5rem;
            flex-wrap: wrap;

            & .todo-type-card {
                margin-right: .1rem;
                margin-bottom: .1rem;
            }
        }

    }
</style>