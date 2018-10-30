<template>
  <div id="app">
    <img src="./assets/logo.png">
    {{test | toUpperCaseFilter}}
    <v-child :msg="test"/>
  </div>
</template>

<script>
import vChild from './components/child'

export default {
    name: 'App',
    components: {
       vChild
    },
    data(){
        return {
            test: "bbb"
        }
    },
    mounted() {
        this.test = "aaa";
    },
    methods:{
        setMessage(msg){
            this.test = msg;
        }
    },
    filters:{
        toUpperCaseFilter(param){
            return param.toUpperCase();
        }
    }
}
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
