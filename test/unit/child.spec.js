import Vue from 'vue'
import child from '../../src/components/child.vue'

/* function getRenderedText (Component, propsData) {
    //Child是Vue的子类，通过propsData可以给props参数赋值
    const Child = Vue.extend(Component)
    const vm = new Child({ propsData }).$mount()
    return vm;
}

describe('child', () => {
    it('renders correctly with different props', () => {
        const vm = getRenderedText(child, {msg: 'Hello'});
        expect(vm.msg).toBe('Hello')
    })
}) */