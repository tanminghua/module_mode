<template>
    <div>
        <button class="todo-button" :style="bgColorObject" @click="doSubmit"></button>
    </div>
</template>

<script>
    export default {
        name: "todo_button",
        props: {
            theme: {
                type: String,
                default: 'chocolate'
            }
        },
        computed: {
            bgColorObject() {
                return {
                    backgroundColor: this.theme,
                    borderColor: this.theme
                }
            }
        },
        methods: {
            doSubmit() {
                this.$emit('click')
            }
        }
    }
</script>

<style scoped lang="scss">
    .todo-button {
        border-radius: .2rem;
        height: 1rem;
        width: 1rem;
        border: .1rem solid;
        position: relative;
        box-shadow: #999 -.05rem .2rem .2rem;
        outline: none;

        &:active {
            -webkit-transform: translateY(.05rem);
            -moz-transform: translateY(.05rem);
            -ms-transform: translateY(.05rem);
            -o-transform: translateY(.05rem);
            transform: translateY(.05rem);
        }

        &::before {
            content: '';
            position: absolute;
            border-radius: .1rem;
            height: .1rem;
            width: .6rem;
            background-color: #fff;
            left: 50%;
            top: 50%;
            -webkit-transform: translate(-50%, -50%);
            -moz-transform: translate(-50%, -50%);
            -ms-transform: translate(-50%, -50%);
            -o-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);

        }

        &::after {
            content: '';
            position: absolute;
            border-radius: .1rem;
            width: .1rem;
            height: .6rem;
            background-color: #fff;
            left: 50%;
            top: 50%;
            -webkit-transform: translate(-50%, -50%);
            -moz-transform: translate(-50%, -50%);
            -ms-transform: translate(-50%, -50%);
            -o-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);

        }
    }
</style>