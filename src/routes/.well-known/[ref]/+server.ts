import { atProto } from "$lib/socials";
import { error } from "@sveltejs/kit";
import type { RequestHandler, EntryGenerator } from "./$types";
import securityTxt from "./security.txt?raw";

type Supplier<T = void> = () => T;
interface Routes {
  [key: string]: Supplier<string>;
}

const routes: Routes = {
  "atproto-did": () => atProto.did,
  "security.txt": () => securityTxt,
};

export const GET: RequestHandler = ({ params }) => {
  if (params.ref === undefined) {
    error(404);
  }

  const route = routes[params.ref];
  if(route === undefined) {
    error(404);
  }
  const response = route();

  return new Response(response, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
};

export const entries: EntryGenerator = () => {
  return [
    ...Object.keys(routes).map((key) => ({
      ref: key,
    })),
  ];
};
