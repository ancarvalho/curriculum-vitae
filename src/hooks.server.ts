import type { Handle } from "@sveltejs/kit";

export const handle = (async ({ event, resolve, }) => {

  // const local = event.cookies.get("local") as string | undefined
  // if (!local) {
  //   event.cookies.set("local", "pt")
  // }
  // event.locals.local = local

  const response = await resolve(event);
  return response;
}) satisfies Handle;