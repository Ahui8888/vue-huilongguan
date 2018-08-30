<template>
    <div>
        {{name}}
    </div>
</template>
<script>
export default {
    data () {
        return {
            name: ''
        }
    },
    methods: {
        init() {
            let that = this
            this.$axios.get('http://ustbhuangyi.com/sell/api/seller').then(function(msg){
                that.name = msg.data.data.name
            })
        }
    },
    mounted() {
        this.init()
    }
}
</script>
<style scoped>

</style>
