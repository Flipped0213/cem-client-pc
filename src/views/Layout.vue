<template>
<!-- 顶部通栏 -->
<AppTopnav/>
<!-- 头部-->
  <AppHeader/>
<!-- 吸顶头部 -->
<AppHeaderSticky />
<div class="app-body">
  <!-- 二级路由 -->
  <RouterView />
</div>
  <!-- 底部 -->
   <AppFooter/>
</template>

<script>
import { useStore } from 'vuex'
import AppTopnav from '@/components/app-navbar'
import AppHeader from '@/components/app-header'
import AppFooter from '@/components/app-footer'
import AppHeaderSticky from '@/components/app-header-sticky'
export default {
  name: 'xtx-layout',
  components: { AppTopnav, AppHeaderSticky, AppHeader, AppFooter },
  // 获取下分类数据
  setup () {
    const store = useStore()
    store.dispatch('category/getList')
  }
}

</script>

<style scoped lang='less'>
.app-body {
  min-height: 600px;
}
</style>
