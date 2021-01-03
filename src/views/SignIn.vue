<template>
  <v-row align="center" justify="center">
    <v-col cols="12" md="6" class="text-center">
      <my-example
        v-model="parentValue"
        counter="10"
        clearable
        @custom-event="customEventHandler"
      />
      <p class="display-1 py-12">
        サンプルアプリケーションにサインインする
      </p>
      <div>
        <v-btn
          width="300"
          large
          color="#1DA1F2"
          class="white--text text-none"
          @click="signIn"
        >
          Sign in with SNS1
        </v-btn>
      </div>
      <div class="mt-3">
        <v-btn
          width="300"
          large
          color="#DD2A7B"
          class="white--text text-none"
          @click="signIn"
        >
          Sign in with SNS2
        </v-btn>
      </div>
      <div class="mt-3">
        <v-btn
          width="300"
          large
          color="#3B5998"
          class="white--text text-none"
          @click="signIn"
        >
          Sign in with SNS3
        </v-btn>
      </div>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  toRefs,
  onMounted,
} from '@vue/composition-api';
import { profileStore } from '@/store/profile/profile';
import { MyExampleComponentParameter } from '@/components/MyExample.vue';

export default defineComponent({
  setup(prop, context) {
    const state = reactive({
      parentValue: {
        foo: 'foo',
        bar: 'bar',
      } as MyExampleComponentParameter,
    });

    const signIn = async () => {
      try {
        await profileStore.signInAsync();
        context.root.$router.push('/');
      } catch (error) {
        console.log('error: ', error);
      }
    };

    const customEventHandler = value => {
      console.log('value ', value);
    };

    return {
      ...toRefs(state),
      signIn,
      customEventHandler,
    };
  },
});
</script>
