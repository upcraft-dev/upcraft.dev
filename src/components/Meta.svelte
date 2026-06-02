<script lang="ts">
  import { MetaTags } from "svelte-meta-tags";
  import { page } from "$app/stores";

  const hostname = $page.url.hostname;
  const baseUrl = $page.url.origin;

  interface Props {
    title: string;
    description?: string | undefined;
    noindex?: boolean;
  }

  let { title, description = $bindable(undefined), noindex = false }: Props = $props();

  const twitterHandle = "@upcraftlp";

  const siteName = hostname;

  const currentPageUrl: string = $page.url.toString();
  description = description || "Indie game developer, Java, C#, Web";

  const image = `${baseUrl}/images/profile_picture.webp`;
  const imageAlt = "Up's profile picture";
  const imageSize = { width: 1080, height: 1080 };

  const formattedTitle = () => `${title} - ${siteName}`;
</script>

<MetaTags
  {title}
  titleTemplate={`%s - ${hostname}`}
  {description}
  canonical={currentPageUrl}
  twitter={{
    cardType: "summary",
    site: twitterHandle,
    title: formattedTitle(),
    description: description,
    image,
    imageAlt,
    creator: twitterHandle,
  }}
  openGraph={{
    url: currentPageUrl,
    title: formattedTitle(),
    description: description,
    images: [
      {
        url: image,
        width: imageSize.width,
        height: imageSize.height,
        alt: imageAlt,
      },
    ],
    siteName: siteName,
  }}
/>
<svelte:head>
  {#if noindex}
    <meta name="robots" content="noindex" />
  {/if}
</svelte:head>
