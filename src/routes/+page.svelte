<script lang="ts">
    import {
        ArrowUpRightFromSquareOutline,
        GithubSolid,
        HeartSolid,
        TwitterSolid,
        XCompanySolid,
    } from "flowbite-svelte-icons";
    import SocialLink from "../components/SocialLink.svelte";
    import Meta from "../components/Meta.svelte";
    import Footer from "../components/Footer.svelte";
</script>

<Meta title="Home" />
<div class="flex flex-col items-center justify-center w-full min-h-screen">
    <div
        class="relative flex flex-col items-center justify-center w-11/12 m-auto bg-center bg-cover bg-[url('/images/hero-bg.gif')] h-[92vh] rounded-xl text-gray-50 mt-3 xl:mt-auto"
    >
        <div class="space-y-2 text-center font-gisha">
            <img
                src="/images/profile_picture.webp"
                width="128"
                height="128"
                class="hidden m-auto rounded-xl md:inline"
                alt="Profile"
            />
            <div class="m-auto text-xl font-medium text-center">
                <h1 class="text-5xl italic">Up</h1>
                <h2 class="tracking-wide">Indie game developer</h2>
                <h2 class="tracking-tight">Java, C#, Web</h2>
                <h2 class="italic pt-2">
                    for mod commissions contact "up" on discord
                </h2>
            </div>
            <hr class="pb-1" />
            <SocialLink name="Donate on Ko-fi" target="ko-fi">
                <h3 class="inline-flex items-center gap-1 text-2xl font-medium">
                    <HeartSolid class="w-6 h-6 text-pink-500" tabindex="-1" />
                    <p class="group-hover:underline group-focus:underline">
                        Support me!
                    </p>
                    <ArrowUpRightFromSquareOutline
                        class="w-4 h-4"
                        tabindex="-1"
                    />
                </h3>
            </SocialLink>
        </div>
        <div
            class="absolute flex flex-row items-end justify-end gap-2 text-base bottom-2"
        >
            <SocialLink name="GitHub" target="github">
                <GithubSolid
                    class="w-6 h-6 rounded-full group-hover:text-gray-950 group-focus:text-gray-950 group-hover:bg-slate-50 group-focus:bg-slate-50"
                    tabindex="-1"
                />
            </SocialLink>
            <SocialLink name="X / Twitter" target="x">
                <XCompanySolid
                    class="w-6 h-6 group-hover:text-slate-900 group-focus:text-slate-950"
                    tabindex="-1"
                />
            </SocialLink>
            <SocialLink name="Bluesky" target="bluesky">
                <div
                    class="inline-flex items-center gap-1 group-hover:text-sky-300 group-focus:text-sky-300 group-hover:underline group-focus:underline"
                >
                    <p>Bluesky</p>
                    <ArrowUpRightFromSquareOutline
                        class="w-4 h-4"
                        tabindex="-1"
                    />
                </div>
            </SocialLink>
        </div>
    </div>
    <Footer />
</div>
