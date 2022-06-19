import Selector from './components/Selector/index.vue'
import Rotation from './components/Rotation/index.vue'
import RotationItem from './components/Rotation/RotationItem/RotationItem.vue'

let YUI: any = {}
YUI.install = function (Vue) {
    Vue.component(Selector.name, Selector);
    Vue.component(Rotation.name, Rotation);
    Vue.component(RotationItem.name, RotationItem);
}

export default YUI;