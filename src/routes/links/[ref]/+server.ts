import { redirect } from "@sveltejs/kit";
import type { EntryGenerator, RequestHandler } from "./$types";
import { lookup } from "$lib/socials";

export const entries: EntryGenerator = () => {
  return lookup().keys().map((key) => ({
      ref: key,
    })).toArray();
};

export const GET: RequestHandler = ({ params }) => {
  const ref = params.ref;
  const target = lookup().get(ref);

  if (target === undefined) {
    redirect(302, "/links?error=notfound");
  }

  redirect(302, target.url);
};

