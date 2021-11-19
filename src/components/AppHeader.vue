<template>
    <header>
        <div>
            <h1>Social Media Dashboard</h1>
            <h2>Total Followers: {{totalFollowers}}</h2>
        </div>
        <div class="theme-switcher">
            <label v-on:click="toggleTheme" for="theme-chooser">Dark Mode</label>
            <input ref="themeChooser" id="theme-chooser" :value="currentTheme" v-on:change="onThemeChanged" type="range" min="1" aria-valuemin="1" max="2" aria-valuemax="2" aria-label="Theme Options" />
        </div>
    </header>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    props: {
        followers: Number,
        theme: null
    },
    computed: {
        currentTheme() {
            return /dark/.test(this.$props.theme) ? 1 : 2;
        },
        totalFollowers() {
            return this.followers?.toLocaleString();
        }
    },
    setup(props, {emit}) {
        const onThemeChanged = (e: any) => {
            emit("themeChanged", +e.target.value == 2 ? "light" : "dark");
        };

        const toggleTheme = () => {
            emit("themeChanged", /light/.test(props.theme) ? "dark" : "light");
        };

        return {
            toggleTheme,
            onThemeChanged
        }
    }
})
</script>
