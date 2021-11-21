<template>
    <div class="social-card" :class="socialColor">
        <div class="card-header">
            <span class="logo" :class="social.SocialNetworkLogo"></span>
            <span class="user-name">{{social.Username}}</span>
        </div>
        <div class="followers">
            <span class="value">{{social.Followers}}</span>
            <span class="label">FOLLOWERS</span>
        </div>
        <div class="change" :class="followersChangeStyle">    
            <span class="icon" :class="followersChangeIcon"></span> {{followersChangeAmount}} Today
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { ISocialMediaProfile } from '../models/SocialMedia';

export default defineComponent({
  components: { },
    props: {
        social: { 
            type: Object as PropType<ISocialMediaProfile>,
            required: true
        }
    },
    setup(props, {emit}) {
        return {
            
        }
    },
    computed: {
        followersChangeIcon() {
            return this.followersChangeAmount > 1 ? "icon-arrow-up" : "icon-arrow-down";
        },
        followersChangeStyle() {
            return this.followersChangeAmount > 1 ? "change-up" : "change-down";
        },
        followersChangeAmount() {
            // TOOD: calculate change betwen Followers and FollowersPrevious
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