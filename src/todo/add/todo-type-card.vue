<template>
    <div class="todo-type-card" :class="classObject">
        {{type}}
    </div>
</template>

<script>
    export default {
        name: "todo-type-card",
        props: ['type', 'theme', 'isActive'],
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
    }
</style>