<template>
  <v-app>
    <v-container>
      <v-content>
        <v-container fluid pt-0>
          <router-view />
        </v-container>
      </v-content>
      <Footer-Component />
    </v-container>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import FooterComponent from '@/components/Footer.vue';

export default defineComponent({
  components: {
    FooterComponent,
  },
});
</script>
