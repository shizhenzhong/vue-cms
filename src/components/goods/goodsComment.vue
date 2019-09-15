<template>
   <cmt :id="$route.params.id"></cmt>
</template>
<script>
import cmt from '../subComponents/comment.vue'
export default {
    components:{
        cmt
    }
}
</script>
<style lang="scss">
    
</style>