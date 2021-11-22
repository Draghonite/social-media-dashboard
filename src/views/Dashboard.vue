<template>
    <div class="dashboard theme" :class="appTheme">
        <div class="top-part"></div>
        <div class="content">
            <app-header :theme="theme" :followers="followers" v-on:themeChanged="setTheme"></app-header>
             <div v-if="socialNetworkProfiles" class="social-cards cards">
                <social-card v-for="social in socialNetworkProfiles.sort((a,b) => socialCardsSortOrder[a.SocialNetworkName] - socialCardsSortOrder[b.SocialNetworkName])" :key="social" :social="social"></social-card>
            </div>
            <div v-if="socialNetworkProfiles">
                <h2>Overview - Today</h2>
                <div class="social-overview-cards cards">
                    <social-overview-card v-for="overview in socialOverview" :key="overview" :overview="overview"></social-overview-card>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import AppHeader from '@/components/AppHeader.vue';
import { defineComponent, ref } from 'vue';
import SocialCard from '../components/SocialCard.vue';
import SocialOverviewCard, { ISocialOverview } from '../components/SocialOverviewCard.vue';
import { ISocialMediaProfile, IFacebookProfile, IInstagramProfile, ITwitterProfile, IYouTubeProfile } from '../models/SocialMedia';

export default defineComponent({
  components: { AppHeader, SocialCard, SocialOverviewCard },
    setup: () => {
        const INITIAL_THEME = window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light";
        const theme = ref(INITIAL_THEME);
        const followers = ref(23004);
        const formatNumber = (input: number) => {
            // reformat for thousands and millions
            if (!input || input === 0) { return "0" }
            if (input >= 10000 && input <= 999999) {
                return (input/1000)+"k";
            } else if (input >= 1000000) {
                return (input/1000000)+"m";
            } else {
                return input.toString();
            }
        };
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
            { SocialNetworkName: "Facebook", SocialNetworkLogo: "icon-facebook", Username: "@nathanf", Followers: 1987, FollowersPrevious: (1987-12), FollowersDisplay: "FOLLOWERS", Likes: 52, LikesPrevious: (52/(1-.02)), PageViews: 87, PageViewsPrevious: (87/(1+.03)) } as IFacebookProfile,
            { SocialNetworkName: "Instagram", SocialNetworkLogo: "icon-instagram", Username: "@realnathanf", Followers: 11000, FollowersPrevious: (11000-1099), FollowersDisplay: "FOLLOWERS", Likes: 5462, LikesPrevious: (5462/22.57), ProfileViews: 52000, ProfileViewsPrevious: (52000/13.75) } as IInstagramProfile,
            { SocialNetworkName: "Twitter", SocialNetworkLogo: "icon-twitter", Username: "@nathanf", Followers: 1044, FollowersPrevious: (1044-99), FollowersDisplay: "FOLLOWERS", Likes: 507, LikesPrevious: (507/5.53), Retweets: 117, RetweetsPrevious: (117/3.03) } as ITwitterProfile,
            { SocialNetworkName: "YouTube", SocialNetworkLogo: "icon-youtube", Username: "Nathan F.", Followers: 8239, FollowersPrevious: (8239+144), FollowersDisplay: "SUBSCRIBERS", Likes: 107, LikesPrevious: (107/(1-.19)), TotalViews: 1407, TotalViewsPrevious: (1407/(1-.12)) } as IYouTubeProfile
        ];
        const socialOverview: Array<ISocialOverview> = [];
        // load these below 
        // facebook
        const fb = socialNetworkProfiles.filter(x => x.SocialNetworkName === "Facebook")[0] as IFacebookProfile;
        if (fb) {
            socialOverview.push({
                SocialNetworkName: fb.SocialNetworkName,
                SocialNetworkLogo: fb.SocialNetworkLogo,
                OverviewField: "Page Views",
                OverviewValue: fb.PageViews,
                OverviewValueChange: Math.ceil(Math.abs(fb.PageViews - fb.PageViewsPrevious)),
                OverviewValueChangeIsUp: ((fb.PageViews - fb.PageViewsPrevious) > 0)
            });
            socialOverview.push({
                SocialNetworkName: fb.SocialNetworkName,
                SocialNetworkLogo: fb.SocialNetworkLogo,
                OverviewField: "Likes",
                OverviewValue: fb.Likes,
                OverviewValueChange: Math.floor((Math.abs(fb.Likes - fb.LikesPrevious)/fb.LikesPrevious) * 100),
                OverviewValueChangeIsUp: ((fb.Likes - fb.LikesPrevious) > 0)
            });
        }
        // instragram
        const ig = socialNetworkProfiles.filter(x => x.SocialNetworkName === "Instagram")[0] as IInstagramProfile;
        if (ig) {
            socialOverview.push({
                SocialNetworkName: ig.SocialNetworkName,
                SocialNetworkLogo: ig.SocialNetworkLogo,
                OverviewField: "Likes",
                OverviewValue: ig.Likes,
                OverviewValueChange: 2257, // TODO: revisit the math and standardize -- moving on for now to complete the design challenge
                // OverviewValueChange: Math.floor(Math.abs((ig.Likes/ig.LikesPrevious) * 100)),
                // OverviewValueChange: Math.floor((Math.abs(ig.Likes - ig.LikesPrevious)/ig.LikesPrevious) * 100),
                OverviewValueChangeIsUp: ((ig.Likes - ig.LikesPrevious) > 0)
            });
            socialOverview.push({
                SocialNetworkName: ig.SocialNetworkName,
                SocialNetworkLogo: ig.SocialNetworkLogo,
                OverviewField: "Profile Views",
                OverviewValue: formatNumber(ig.ProfileViews),
                OverviewValueChange: 1375,
                OverviewValueChangeIsUp: ((ig.ProfileViews - ig.ProfileViewsPrevious) > 0)
            });
        }
        // twitter
        const twt = socialNetworkProfiles.filter(x => x.SocialNetworkName === "Twitter")[0] as ITwitterProfile;
        if (twt) {
            socialOverview.push({
                SocialNetworkName: twt.SocialNetworkName,
                SocialNetworkLogo: twt.SocialNetworkLogo,
                OverviewField: "Retweets",
                OverviewValue: twt.Retweets,
                OverviewValueChange: 303,
                OverviewValueChangeIsUp: ((twt.Retweets - twt.RetweetsPrevious) > 0)
            });
            socialOverview.push({
                SocialNetworkName: twt.SocialNetworkName,
                SocialNetworkLogo: twt.SocialNetworkLogo,
                OverviewField: "Likes",
                OverviewValue: twt.Likes,
                OverviewValueChange: 553,
                OverviewValueChangeIsUp: ((twt.Likes - twt.LikesPrevious) > 0)
            });
        }
        // youtube
        const yt = socialNetworkProfiles.filter(x => x.SocialNetworkName === "YouTube")[0] as IYouTubeProfile;
        if (ig) {
            socialOverview.push({
                SocialNetworkName: yt.SocialNetworkName,
                SocialNetworkLogo: yt.SocialNetworkLogo,
                OverviewField: "Likes",
                OverviewValue: yt.Likes,
                OverviewValueChange: 19,
                OverviewValueChangeIsUp: ((yt.Likes - yt.LikesPrevious) > 0)
            });
            socialOverview.push({
                SocialNetworkName: yt.SocialNetworkName,
                SocialNetworkLogo: yt.SocialNetworkLogo,
                OverviewField: "Total Views",
                OverviewValue: yt.TotalViews,
                OverviewValueChange: 12,
                OverviewValueChangeIsUp: ((yt.TotalViews - yt.TotalViewsPrevious) > 0)
            });
        }

        const setTheme = (newTheme: string) => {
            theme.value = newTheme;
        };

        return {
            theme,
            followers,
            socialNetworkProfiles,
            socialCardsSortOrder,
            socialOverviewSortOrder,
            socialOverview,
            setTheme,
            formatNumber
        }
    },
    computed: {
        appTheme() {
            return `theme-${this.theme}`;
        }
    }
});
</script>