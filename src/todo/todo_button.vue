<template>
    <div>
        <button class="todo-button"></button>
    </div>
</template>

<script>
    export default {
        name: "todo_button"
    }
</script>

<style scoped lang="scss">
    .todo-button {
        border-radius: .2rem;
        height: 1rem;
        width: 1rem;
        background-color: #ffffff;
        border: .1rem solid chocolate;
        right: .5rem;
        bottom: .5rem;
        position: fixed;
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
            background-color: chocolate;
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
            background-color: chocolate;
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