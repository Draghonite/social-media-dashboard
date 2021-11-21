<template>
    <div class="dashboard theme" :class="appTheme">
        <div class="top-part"></div>
        <div class="content">
            <app-header :theme="theme" :followers="followers" v-on:themeChanged="setTheme"></app-header>
             <div v-if="socialNetworkProfiles" class="social-cards">
                <social-card v-for="social in socialNetworkProfiles.sort((a,b)=> socialCardsSortOrder[a.SocialNetworkName] - socialCardsSortOrder[b.SocialNetworkName])" :key="social" :social="social"></social-card>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import AppHeader from '@/components/AppHeader.vue';
import { defineComponent, ref } from 'vue';
import SocialCard from '../components/SocialCard.vue';
import { ISocialMediaProfile, IFacebookProfile, IInstagramProfile, ITwitterProfile, IYouTubeProfile } from '../models/SocialMedia';

export default defineComponent({
  components: { AppHeader, SocialCard },
    setup: () => {
        const INITIAL_THEME = window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light";
        const theme = ref(INITIAL_THEME);
        const followers = ref(23004);
        const socialCardsSortOrder = {
            "Facebook": 0,
            "Twitter": 1,
            "Instagram": 2,
            "YouTube": 3
        };
        const socialOverviewSortOrder = {
            "Facebook": 0,
            "Instagram": 1,
            "Twitter": 2,
            "YouTube": 3
        };
        const socialNetworkProfiles: Array<ISocialMediaProfile> = [
            { SocialNetworkName: "Facebook", SocialNetworkLogo: "icon-facebook", Username: "@nathanf", Followers: 1987, FollowersPrevious: (1987-12), Likes: 52, LikesPrevious: (52/(1+.02)), PageViews: 87, PageViewsPrevious: (87/(1-.03)) } as IFacebookProfile,
            { SocialNetworkName: "Instagram", SocialNetworkLogo: "icon-instagram", Username: "@realnathanf", Followers: 11000, FollowersPrevious: (11000-1099), Likes: 5462, LikesPrevious: (5462/22.57), ProfileViews: 52000, ProfileViewsPrevious: (52000/13.75) } as IInstagramProfile,
            { SocialNetworkName: "Twitter", SocialNetworkLogo: "icon-twitter", Username: "@nathanf", Followers: 1044, FollowersPrevious: (1044-99), Likes: 507, LikesPrevious: (507/5.53), Retweets: 117, RetweetsPrevious: (117/3.03) } as ITwitterProfile,
            { SocialNetworkName: "YouTube", SocialNetworkLogo: "icon-youtube", Username: "Nathan F.", Followers: 8239, FollowersPrevious: (8239+144), Likes: 107, LikesPrevious: (107/(1-.19)) } as IYouTubeProfile
        ];

        const setTheme = (newTheme: string) => {
            theme.value = newTheme;
        };

        return {
            theme,
            followers,
            socialNetworkProfiles,
            socialCardsSortOrder,
            socialOverviewSortOrder,
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