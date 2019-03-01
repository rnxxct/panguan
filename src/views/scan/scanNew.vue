<template>
  <div>
    <iframe src="../../static/scan/scanNew.html" ref="iframe" width="800px" height="1000px" frameborder="3"
            scrolling="auto"></iframe>
  </div>
</template>
<script>
  import QS from 'qs'
  import {getList} from '@/api/scan/scan'
  import ElOption from "../../../node_modules/element-ui/packages/select/src/option";
  import ElCheckbox from "../../../node_modules/element-ui/packages/checkbox/src/checkbox";
  import ElSelectDropdown from "../../../node_modules/element-ui/packages/select/src/select-dropdown";
  import ElButton from "../../../node_modules/element-ui/packages/button/src/button";
  export default{

    created(){

    },
    data(){
      return {}
    },
    methods: {}
  }
</script>
