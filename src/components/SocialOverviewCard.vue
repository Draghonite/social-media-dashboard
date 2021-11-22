<template>
    <div class="social-overview-card card">
        <div class="card-header">
            <span class="field-name">{{overview.OverviewField}}</span>
            <span class="logo" :class="overview.SocialNetworkLogo"></span>
        </div>
        <div class="card-body">
            <span class="field-value">{{overview.OverviewValue}}</span>
            <div class="change" :class="changeStyle">
                <span class="icon" :class="changeIcon"></span> {{overview.OverviewValueChange}}%
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export interface ISocialOverview {
    SocialNetworkName: string
    SocialNetworkLogo: string
    OverviewField: string
    OverviewValue: number|string
    OverviewValueChange: number
    OverviewValueChangeIsUp: boolean
}

export default defineComponent({
    props: {
        overview: {
            type: Object as PropType<ISocialOverview>,
            required: true
        }
    },
    setup(props) {
        return {

        }
    },
    computed: {
        changeIcon() {
            return this.overview.OverviewValueChangeIsUp ? "icon-arrow-up" : "icon-arrow-down";
        },
        changeStyle() {
            return this.overview.OverviewValueChangeIsUp ? "change-up" : "change-down";
        },
        socialColor() {
            if (/facebook/i.test(this.overview.SocialNetworkName)) {
                return "facebook";
            } else if (/insta/i.test(this.overview.SocialNetworkName)) {
                return "instagram";
            } else if (/twitter/i.test(this.overview.SocialNetworkName)) {
                return "twitter";
            } else if (/youtube/i.test(this.overview.SocialNetworkName)) {
                return "youtube";
            }
            return "";
        }
    }
})
</script>