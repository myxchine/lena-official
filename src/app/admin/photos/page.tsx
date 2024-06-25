import { getPhotos, getCategories } from "@/server/db/queries";
import PhotoView from "./photos";
export const dynamic = "force-dynamic";

export default async function Home() {
  const photos = await getPhotos();
  const categories = await getCategories();

  return <PhotoView photos={photos} categories={categories} />;
}
