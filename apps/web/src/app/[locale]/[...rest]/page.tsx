import { notFound } from "next/navigation";

export default function CatchAllUnknownRoutes() {
  // This triggers the closest not-found.tsx UI component inside [locale]
  notFound();
}