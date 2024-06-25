import PhotoCards from "@/components/PhotoCards";
import { photosByCategory } from "@/server/types";

export function CategoryView({
  categories: categories,
}: {
  categories: photosByCategory;
}) {
  return (
    <main className="">
      <PhotoCards data={categories.photoNames} />
    </main>
  );
}
