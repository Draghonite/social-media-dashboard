export interface ISocialMediaProfile {
    SocialNetworkName: string
    SocialNetworkLogo: string
    Username: string
    Followers: number
    FollowersPrevious: number
    FollowersDisplay: string
    Likes: number
    LikesPrevious: number
}

export interface IFacebookProfile extends ISocialMediaProfile {
    PageViews: number
    PageViewsPrevious: number
}

export interface IInstagramProfile extends ISocialMediaProfile {
    ProfileViews: number
    ProfileViewsPrevious: number
}

export interface ITwitterProfile extends ISocialMediaProfile {
    Retweets: number
    RetweetsPrevious: number
}

export interface IYouTubeProfile extends ISocialMediaProfile {
    TotalViews: number
    TotalViewsPrevious: number
}