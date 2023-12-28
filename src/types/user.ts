export interface IGitHubUsers  {
    login: string;
    id: number;
    avatar_url: string;
    name: string;
    company: string | null;
    blog: string;
    location: string;
    bio: string;
    twitter_username: string | null;
    public_repos: number;
    followers: number;
    following: number;
    created_at: string;
}

export interface IGitHubError {
    message: string;
    documentation_url: string;
}