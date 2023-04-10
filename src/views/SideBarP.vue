<template>
  <div>
    <HeaderComponent/>
    <body>
      <div>
        <SideBarComponent/>
      </div>
    </body>
    <FooterComponent/>
  </div>
</template>
<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import SideBarComponent from '@/components/sidebar/SideBarComponent.vue'

export default {
    components: {
      HeaderComponent,
      FooterComponent,
      SideBarComponent,
    },
}
</script>


