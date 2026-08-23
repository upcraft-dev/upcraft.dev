import { redirect } from "@sveltejs/kit";
import type { EntryGenerator, RequestHandler } from "./$types";
import { allSocials, type SocialsProfile } from "$lib/socials";

export const entries: EntryGenerator = () => {
  return getSocials().keys().map((key) => ({
      ref: key,
    })).toArray();
};

export const GET: RequestHandler = ({ params }) => {
  const ref = params.ref;
  const target = getSocials().get(ref);

  if (target === undefined) {
    redirect(302, "/links?error=notfound");
  }

  redirect(302, target.url);
};

function getSocials(): Map<string, SocialsProfile> {
  const map = new Map<string, SocialsProfile>();
  allSocials.forEach(profile => {
    profile.aliases.forEach(alias => {
      map.set(alias, profile);
    });
  });
  return map;
}