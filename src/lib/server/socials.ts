export interface SocialsList {
    readonly [key: string]: string | undefined;
}

export const socials: SocialsList = {
    // not a valid URL yet
    // at: "at://did:plc:77uzn2lx2zhtdgr5zfvzumji",
    bluesky: "https://bsky.app/profile/did:plc:77uzn2lx2zhtdgr5zfvzumji",
    curseforge: "https://www.curseforge.com/members/upcraftlp/projects",
    //TODO discord
    discord: "https://mods.upcraft.dev/discord",
    games: "https://up-does.games",
    github: "https://github.com/upcraftlp",
    itch: "https://upcraftlp.itch.io",
    kofi: "/links/ko-fi",
    'ko-fi': "https://ko-fi.com/upcraftlp",
    medium: "https://medium.com/@up_",
    modrinth: "https://modrinth.com/user/Up",
    steam: "https://steamcommunity.com/id/upcraftlp",
    twitch: "https://twitch.tv/upcraftlp",
    youtube: "https://youtube.com/@upcraft_",
};