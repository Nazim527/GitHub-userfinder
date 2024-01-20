import { IGitHubUsers } from './../types/user';

export const isGitHubUser = (user: IGitHubUsers) => "id" in user