<template>
    <div>
        商品    
        <div v-for="(item,index) in goods" :key="index">
            <h4>{{item.name}}</h4>
            <ul v-for="(val,key) in item.foods" :key="key">
                <li>{{val.name}}-----价格{{val.price}}</li>
            </ul>
        </div>    
    </div>
</template>
<script>
export default {
    data() {
        return {
            goods: []
        }
    },
    methods: {
        init() {
            let that = this
            this.$axios.get('http://ustbhuangyi.com/sell/api/goods').then(function(msg){
                that.goods = msg.data.data
                console.log(that.goods)
            })
        }
    },
    mounted() {
        this.init()
    }
}
</script>
<style scoped>
ul li{
    list-style: none;
    text-align: left;
}
</style>


