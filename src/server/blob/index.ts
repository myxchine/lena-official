"use server";

import { put } from "@vercel/blob";

export async function Upload(arrayBuffer: Blob, filename: string) {
  const { url } = await put(filename, arrayBuffer, {
    access: "public",
  });

  return url;
}
