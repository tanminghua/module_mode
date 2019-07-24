<template>
    <div class="vue-switch" :class="classObject" :style="styleObject" @click="changeStatus">
        <div class="vue-circle"></div>
    </div>
</template>

<script>
    export default {
        name: "todo_switch",
        props: {
            theme: {
                type: String,
                default: 'chocolate'
            }
        },
        data() {
            return {
                isOpen: false,
            }
        },
        computed: {
            classObject() {
                return {
                    open: this.isOpen,
                }
            },
            styleObject() {
                return {
                    backgroundColor: this.isOpen ? this.theme : ''
                }
            }
        },
        methods: {
            changeStatus() {
                this.isOpen = !this.isOpen;
                this.$emit('change', this.isOpen);
            }
        }
    }
</script>

<style scoped lang="scss">

    $height: .5rem;

    .vue-switch {
        height: $height;
        width: $height * 2;
        border: 1px solid #dedede;
        border-radius: .25rem;
        background-color: #666666;
        box-shadow: 0 0 .3rem #333 inset;
        position: relative;
        display: inline-block;

        &.open {
            .vue-circle {
                -webkit-transform: translate(100%, -50%);
                -moz-transform: translate(100%, -50%);
                -ms-transform: translate(100%, -50%);
                -o-transform: translate(100%, -50%);
                transform: translate(100%, -50%);
            }
        }

        .vue-circle {
            content: '';
            height: $height;
            width: $height;
            border-radius: $height / 2;
            background-color: #dedede;
            border: 1px solid #dedede;

            position: absolute;
            top: 50%;
            left: -1px;
            transform: translateY(-50%);

            -webkit-transition: all .1s;
            -moz-transition: all .1s;
            -ms-transition: all .1s;
            -o-transition: all .1s;
            transition: all .1s;
        }
    }

</style>