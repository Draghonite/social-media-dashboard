<template>
    <div class="social-card card" :class="socialColor">
        <div class="card-header">
            <span class="logo" :class="social.SocialNetworkLogo"></span>
            <span class="user-name">{{social.Username}}</span>
        </div>
        <div class="followers">
            <span class="value">{{formatNumber(social.Followers)}}</span>
            <span class="label">{{social.FollowersDisplay}}</span>
        </div>
        <div class="change" :class="followersChangeStyle">    
            <span class="icon" :class="followersChangeIcon"></span> {{Math.abs(followersChangeAmount)}} Today
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { ISocialMediaProfile } from '../models/SocialMedia';

export default defineComponent({
    props: {
        social: { 
            type: Object as PropType<ISocialMediaProfile>,
            required: true
        }
    },
    setup(props) {
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
        return {
            formatNumber
        }
    },
    computed: {
        followersChangeIcon() {
            return this.followersChangeAmount > 0 ? "icon-arrow-up" : "icon-arrow-down";
        },
        followersChangeStyle() {
            return this.followersChangeAmount > 0 ? "change-up" : "change-down";
        },
        followersChangeAmount() {
            return this.social.Followers - this.social.FollowersPrevious;
        },
        socialColor() {
            if (/facebook/i.test(this.social.SocialNetworkName)) {
                return "facebook";
            } else if (/insta/i.test(this.social.SocialNetworkName)) {
                return "instagram";
            } else if (/twitter/i.test(this.social.SocialNetworkName)) {
                return "twitter";
            } else if (/youtube/i.test(this.social.SocialNetworkName)) {
                return "youtube";
            }
            return "";
        }
    }
})
</script>