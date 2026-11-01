<script lang="ts">
  import { browser } from '$app/env';
  import type { ChangeEventHandler } from "svelte/elements";
  import Footer from "#components/Footer";
  import Meta from "#components/Meta";

  function formSubmit(event: SubmitEvent) {
    event.preventDefault();

    // re-render, just in case
    renderImage().then(() => {
      const canvas = document.querySelector(
        "#preview-canvas"
      ) as HTMLCanvasElement;
      const form = document.querySelector("#input-form") as HTMLFormElement;
      const inputImage = form.querySelector("#input-image") as HTMLInputElement;
      const image = inputImage.files?.item(0);
      if (!image) {
        return;
      }
      const filename = image.name.replace(/\.[^/.]+$/, "");

      const link = document.createElement("a");
      const quality: number = 0.92;
      link.href = canvas.toDataURL("image/webp", quality);
      link.download = `april-fools-${filename}.webp`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  }

  async function renderPart(ctx: CanvasRenderingContext2D, part: string) {
    const img = new Image();
    const promise = new Promise<void>((resolve, reject) => {
      img.onload = () => resolve();
      img.onerror = () => reject(new Error(`Failed to load ${part} image`));
    });
    img.src = part;
    await promise;
    ctx.drawImage(img, 0, 0, ctx.canvas.width, ctx.canvas.height);
  }

  async function renderImage() {
    const form = document.querySelector("#input-form") as HTMLFormElement;
    const canvas = document.querySelector(
      "#preview-canvas"
    ) as HTMLCanvasElement;
    const inputImage = form.querySelector("#input-image") as HTMLInputElement;
    const image = inputImage.files?.item(0);

    const ctx = canvas.getContext("2d")!;

    // step 0: clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // step 1: draw the uploaded icon over it, using a mask
    if (image !== null && image !== undefined) {
      ctx.save();
      await renderPart(ctx, "/april-fools-2024/icon_mask.png");
      ctx.globalCompositeOperation = "source-in";
      await renderPart(ctx, URL.createObjectURL(image));
      ctx.restore();
    }

    // step 2: draw the background layer
    ctx.save();
    ctx.globalCompositeOperation = "destination-over";
    await renderPart(ctx, "/april-fools-2024/base_layer.png");
    ctx.restore();

    // step 3: draw the foreground layer
    await renderPart(ctx, "/april-fools-2024/foreground_layer.png");
  }

  const selectImage: ChangeEventHandler<HTMLInputElement> = () => {
    renderImage();
  };

  if (browser) {
    renderImage();
  }
</script>

<Meta title="April Fools 2024 Logo Generator" noindex />
<div class="flex flex-col items-center justify-center w-full min-h-screen">
  <div
    class="relative flex flex-col items-center w-11/12 m-auto bg-center bg-purple-300 min-h-[92vh] rounded-xl text-gray-600 mt-3 xl:mt-auto"
  >
    <div class="p-12 pt-8 w-full h-full">
      <a href="/" class="hover:underline focus:underline m-auto pt-3">Home</a>
      <div class="flex flex-col mx-auto w-fit">
        <h1 class="text-5xl">April Fools 2024 Logo Generator</h1>
        <p class="text-lg mt-1">
          Generate your own April Fools 2024 Mushroom Logo!
        </p>
      </div>
      <div
        class="mt-8 md:mt-24 flex items-center justify-center w-full flex-col"
      >
        <canvas
          id="preview-canvas"
          width="1024"
          height="1024"
          class="bg-white p-4 w-64 h-64 md:w-96 md:h-96 border border-gray-300 rounded-xl"
        >Your browser does not support the HTML5 canvas tag.</canvas>

        <form
          id="input-form"
          onsubmit={formSubmit}
          class="w-fit"
        >
          <label for="input-image" class="block mt-4">Upload your Image:</label>
          <input
            type="file"
            id="input-image"
            name="image"
            accept="image/*"
            class="mt-2"
            required
            onchange={selectImage}
          />
          <button
            type="submit"
            class="mt-4 bg-slate-800 text-white px-4 py-2 hover:bg-gray-700"
          >
            Save!
          </button>
        </form>
      </div>
    </div>
    <a href="/links/kofi" class="hover:underline focus:underline m-auto mb-4"
      >Support me on Ko-fi 💜</a
    >
  </div>
  <Footer />
</div>
