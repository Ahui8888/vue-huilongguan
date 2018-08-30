<template>
    <div>
        <v-header></v-header>
        <router-link to="/goods">商品</router-link>
        <router-link to="/comments">评论</router-link>
        <router-link to="/sellers">商家</router-link>
        <router-view></router-view>
    </div>
</template>
<script>
import header from '@/components/header.vue'
export default {
    data () {
        return {
            msg: '222'
        }
    },
    methods: {

    },
    components: {
        'v-header': header  
    }
}
</script>
<style scoped>

</style>


