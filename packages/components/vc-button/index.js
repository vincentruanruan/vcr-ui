// 导入组件，组件必须声明 name
import VCButton from './main.vue'

// 为组件添加 install 方法，用于按需引入
VCButton.install = function (Vue) {
    Vue.component(VCButton.name, VCButton)
}

export default VCButton