import './css/index.scss'
import App from './App.vue';
import Vue from 'vue';
import deviceWidth from './js/device_width';

window.onresize = window.onload = function(e) {
    deviceWidth.setFontSize();
};
// deviceWidth.setFontSize();

var app = new Vue({
    el: '#app',
    // render: h => h(App) // 这边是需要一个返回值的
    render: h => {
        // 别忘了return
        return h(App);
    }
});


if(module.hot) {
    module.hot.accept();
}

