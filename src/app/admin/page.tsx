import { redirect } from "next/navigation";

export default function EmptyPage() {
  redirect("/admin/categories");
}
