import YSelector from './components/Selector/index.vue'
import YRotation from './components/Rotation/index.vue'
import YTable from './components/Table/index.vue'
import YTag from './components/Tag/index.vue'
import YButton from './components/Button/index.vue'
import YSwitch from './components/Switch/index.vue'
import YRotationItem from './components/Rotation/RotationItem/RotationItem.vue'

import { App } from 'vue'

const components = {
    YSelector,
    YRotation,
    YRotationItem,
    YTable,
    YTag,
    YButton,
    YSwitch,
}

export default {
    install(Vue: App<Element>) {
        Object.keys(components).forEach(key => {
            Vue.component(key, components[key]);
        })
    }
};