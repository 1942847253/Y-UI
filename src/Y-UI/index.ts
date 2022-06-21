import Selector from './components/Selector/index.vue'
import Rotation from './components/Rotation/index.vue'
import Table from './components/Table/index.vue'
import RotationItem from './components/Rotation/RotationItem/RotationItem.vue'

import { App } from 'vue'

const components = {
    Selector,
    Rotation,
    RotationItem,
    Table,
}

export default {
    install(Vue: App<Element>) {
        Object.keys(components).forEach(key => {
            Vue.component(key, components[key]);
        })
    }
};