import YSelector from './components/Selector/index.vue'
import YRotation from './components/Rotation/index.vue'
import YRotationItem from './components/Rotation/RotationItem/RotationItem.vue'
import YTable from './components/Table/index.vue'
import YTag from './components/Tag/index.vue'
import YButton from './components/Button/index.vue'
import YSwitch from './components/Switch/index.vue'
import YRadio from './components/Radio/index.vue'
import YRadioGroup from './components/Radio/RadioGroup/RadioGroup.vue'
import YCheckbox from './components/CheckBoxGroup/CheckBox/CheckBox.vue'
import YCheckboxGroup from './components/CheckBoxGroup/CheckBoxGroup.vue';
import { App } from 'vue'

const components = {
    YSelector,
    YRotation,
    YRotationItem,
    YTable,
    YTag,
    YButton,
    YSwitch,
    YRadio,
    YRadioGroup,
    YCheckbox,
    YCheckboxGroup
}

export default {
    install(Vue: App<Element>) {
        Object.keys(components).forEach(key => {
            Vue.component(key, components[key]);
        })
    }
};