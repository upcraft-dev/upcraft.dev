<script lang="ts">
  import MdiExternalLink from "~icons/mdi/external-link";
  import MdiHeart from "~icons/mdi/heart";
  import SimpleIconsBluesky from "~icons/simple-icons/bluesky";
  import SimpleIconsDiscord from "~icons/simple-icons/discord";
  import SimpleIconsGithub from "~icons/simple-icons/github";
  import SocialLink from "$components/SocialLink.svelte";
  import Meta from "$components/Meta.svelte";
  import Footer from "$components/Footer.svelte";
  import "$css/fonts/gisha.css";
</script>

<svelte:head>
  <link
    rel="preload"
    href="/images/profile_picture_128x.webp"
    as="image"
    media="screen"
  />
  <link rel="preload" href="/images/hero_bg.webp" as="image" media="screen" />
  <link
    rel="preload"
    href="/fonts/gisha.woff2"
    as="font"
    type="font/woff2"
    crossorigin="anonymous"
  />
</svelte:head>

<Meta title="Home" />
<div class="flex flex-col items-center justify-center w-full min-h-screen">
  <div
    class="relative flex flex-col items-center justify-center w-11/12 m-auto bg-center bg-cover bg-[url('/images/hero_bg.webp')] h-[88lvh] rounded-xl text-gray-50 mt-3 xl:mt-auto"
  >
    <div class="space-y-2 text-center font-gisha">
      <img
        src="/images/profile_picture_128x.webp"
        width="128"
        height="128"
        class="hidden m-auto rounded-xl md:inline"
        alt="Profile"
      />
      <div class="m-auto text-xl font-medium text-center">
        <h1 class="text-5xl italic">Up</h1>
        <h2 class="tracking-wide">Indie game developer</h2>
        <h2 class="tracking-tight">Java, C#, Web</h2>
      </div>
      <hr class="pb-1" />
      <SocialLink name="Donate on Ko-fi" target="ko-fi">
        <h3 class="inline-flex items-center gap-1 text-2xl font-medium">
          <MdiHeart class="w-6 h-6 text-pink-500" tabindex={-1} />
          <p class="group-hover:underline group-focus:underline">Support me!</p>
          <MdiExternalLink class="w-4 h-4" tabindex={-1} />
        </h3>
      </SocialLink>
    </div>
    <div
      class="absolute flex flex-row items-end justify-end gap-2 text-base bottom-2"
    >
      <SocialLink name="GitHub" target="github">
        <SimpleIconsGithub
          class="w-7 h-7 rounded-full group-hover:text-gray-950 group-focus:text-gray-950 group-hover:bg-slate-50 group-focus:bg-slate-50"
          tabindex={-1}
        />
      </SocialLink>
      <SocialLink name="Discord" target="discord">
        <SimpleIconsDiscord
          class="w-7 h-7 group-hover:text-[#738ADB] group-focus:text-[#738ADB]"
          tabindex={-1}
        />
      </SocialLink>
      <SocialLink name="Bluesky" target="bluesky">
        <SimpleIconsBluesky
          class="w-7 h-7 group-hover:text-sky-500 group-focus:text-sky-500"
          tabindex={-1}
        />
      </SocialLink>
    </div>
  </div>
  <Footer />
</div>
