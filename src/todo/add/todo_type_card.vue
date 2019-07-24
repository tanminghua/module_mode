<template>
    <div class="todo-type-card" @click="returnType" :class="classObject">
        {{type}}
    </div>
</template>

<script>
    export default {
        name: "todo-type-card",
        props: ['type', 'theme', 'isActive'],
        data() {
            return {
            }
        },
        methods: {
            returnType() {
                this.$emit('change')
            }
        },
        computed: {
            classObject() {
                return {
                    active: this.isActive,
                    [this.theme]: true
                }
            }
        },
    }
</script>

<style scoped lang="scss">
    .todo-type-card {
        border: .05rem solid;
        padding: .15rem .3rem;
        border-radius: .2rem;
        color: red;
        user-select: none;

        -webkit-transition: background .2s;
        -moz-transition: background .2s;
        -ms-transition: background .2s;
        -o-transition: background .2s;
        transition: background .2s;

        &.active {
            background-color: inherit;
            color: #ffffff;
        }
    }

    @each $color in chocolate, cadetblue, cornflowerblue, indianred {
        .#{$color} {
            color: $color;
            &.active {
                background-color: $color;
                border-color: $color;
                color: #fff;
            }
        }
    }
</style>