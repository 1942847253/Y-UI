import Selector from './components/Selector/index.vue'


let YUI: any = {}
YUI.install = function (Vue) {
    Vue.component(Selector.name, Selector);
}

export default YUI;