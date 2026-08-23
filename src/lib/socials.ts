import SimpleIconsBluesky from "~icons/simple-icons/bluesky";
import SimpleIconsCurseforge from "~icons/simple-icons/curseforge";
import SimpleIconsDiscord from "~icons/simple-icons/discord";
import SimpleIconsGithub from "~icons/simple-icons/github";
import SimpleIconsModrinth from "~icons/simple-icons/modrinth";
import type { Component } from "svelte";
import type { SvelteHTMLElements } from "svelte/elements";

export interface SocialsProfile {
  readonly url: string;
  readonly avatarUrl?: string;
  readonly color?: string;
  readonly aliases: string[];
}

export const atProto = {
  did: "did:plc:77uzn2lx2zhtdgr5zfvzumji"
};
export const bluesky: SocialsProfile = {
  url: `https://bsky.app/profile/${atProto.did}`,
  aliases: ["bsky", "bluesky"]
};

// TODO discord
export const discordProfile = {
  snowflake: "137502892167921664"
};
export const discord: SocialsProfile = {
  url: "https://mods.upcraft.dev/discord",
  aliases: ["discord"]
};

export const kofi: SocialsProfile = {
  url: "https://ko-fi.com/upcraftlp",
  aliases: ["ko-fi", "kofi"]
};

export const twitch: SocialsProfile = {
  url: "https://twitch.tv/upcraftlp",
  aliases: ["twitch"]
};

export const youtube: SocialsProfile = {
  url: "https://youtube.com/@upcraft_",
  aliases: ["youtube", "yt"]
};

export const steam: SocialsProfile = {
  url: "https://steamcommunity.com/profiles/76561198101277934",
  aliases: ["steam"]
}

export const github: SocialsProfile = {
  url: "https://github.com/upcraftlp",
  aliases: ["github", "gh"]
};

export const medium: SocialsProfile = {
  url: "https://medium.com/@up_",
  aliases: ["medium"]
}

// modding
export const curseforge: SocialsProfile = {
  url: "https://www.curseforge.com/members/upcraftlp/projects",
  aliases: ["curseforge", "cf"]
};
export const modrinth: SocialsProfile = {
  url: "https://modrinth.com/user/Ef5Yk50C",
  aliases: ["modrinth", "mr"]
};
export const moddingDiscord: SocialsProfile = {
  url: "https://mods.upcraft.dev/discord",
  aliases: ["discord-modding"]
};

// games
export const games: SocialsProfile = {
  url: "https://up-does.games",
  aliases: ["games", "gaming"]
};
export const itchIO = {
  url: "https://upcraftlp.itch.io",
  aliases: ["itch", "itchio", "itch-io"]
};

export const visibleSocials: SocialsProfile[] = [
  bluesky,
  github,
  curseforge,
  modrinth
];

export const allSocials: SocialsProfile[] = [
  bluesky,
  discord,
  kofi,
  twitch,
  youtube,
  steam,
  github,
  medium,
  curseforge,
  modrinth,
  moddingDiscord,
  games,
  itchIO
];

export interface SocialListing {
  readonly id: string;
  readonly displayName?: string;
  readonly icon?: Component<SvelteHTMLElements['svg']>;
  readonly colorDark?: string;
  readonly colorLight?: string;
}

export const socialListings: SocialListing[] = [
  {
    id: "bluesky",
    displayName: "BlueSky",
    icon: SimpleIconsBluesky,
    colorLight: "hover:text-sky-500"
  },
  {
    id: "discord",
    displayName: "Discord",
    icon: SimpleIconsDiscord,
    colorLight: "hover:text-[#738ADB]"
  },
  {
    id: "curseforge",
    displayName: "CurseForge",
    icon: SimpleIconsCurseforge,
    colorLight: "hover:text-amber-600",
  },
  {
    id: "modrinth",
    displayName: "Modrinth",
    icon: SimpleIconsModrinth,
    colorLight: "hover:text-emerald-400",
  },
  {
    id: "github",
    displayName: "GitHub",
    icon: SimpleIconsGithub,
    colorLight: "hover:text-gray-950",
  },
];
