import { getPhotosFromCategory } from "@/server/db/queries";
import CategoryView from "@/components/admin/CategoryView";
export const dynamic = "force-dynamic";

export default async function Home({ params }: { params: { name: string } }) {
  const photosByCategory = await getPhotosFromCategory(params.name);

  return (
    <div className="flex flex-col w-full space-y-4">
      <CategoryView photosByCategory={photosByCategory} />
    </div>
  );
}
