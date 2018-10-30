import Vue from 'vue';
import app from '../../src/App.vue';

//对app组件属性的变化进行测试
/* describe("测试App组件", ()=>{
    it("组件加载后, test的值应该是ccc", ()=>{
        let vm = new Vue(app).$mount();
        //断言
        expect(vm.test).toEqual('ccc');
    })
}) */

//对app组件方法进行测试  参入test
/* describe("测试App组件的方法", ()=>{
    it("调用setMassage方法后, test的值应该等于test", ()=>{
        let vm = new Vue(app).$mount();
        vm.setMessage("test");
        //断言
        expect(vm.test).toEqual('test');
    })
}) */

//测试filter
/* describe("测试App组件中的filter", ()=>{
    it("调用toUpperCaseFilter(aaaa)方法后, aaa的值应该等于AAA", ()=>{
        let after = app.filters.toUpperCaseFilter('aaa');
        //断言
        expect(after).toBe('AAA');
    })
}) */

//测试异步更新DOM
describe("异步更新DOM", () =>{
    it("DOM", (done) =>{
        let vm = new Vue(app).$mount();
        vm.test = "huangss";
        //DOM更新之前，用该方法获取更新后的DOM结构
        vm.$nextTick(()=>{
            expect(vm.$el.textContent).toBe('huangss');
            //结束
            done()
        })
    })
})