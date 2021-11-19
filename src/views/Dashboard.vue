<template>
    <div class="dashboard theme" :class="appTheme">
        <app-header :theme="theme" :followers="followers" v-on:themeChanged="setTheme" />
        
    </div>
</template>

<script lang="ts">
import AppHeader from '@/components/AppHeader.vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  components: { AppHeader },
    setup: () => {
        const INITIAL_THEME = window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light";
        const theme = ref(INITIAL_THEME);
        const followers = ref(23004);

        const setTheme = (newTheme: string) => {
            theme.value = newTheme;
        };

        return {
            theme,
            followers,
            setTheme
        }
    },
    computed: {
        appTheme() {
            return `theme-${this.theme}`;
        }
    }
});
</script>