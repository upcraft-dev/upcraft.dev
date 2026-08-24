import { atProto } from "$lib/socials";
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
    return new Response(null, {
      status: 404,
    });
  }

  const response = routes[params.ref]();

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
