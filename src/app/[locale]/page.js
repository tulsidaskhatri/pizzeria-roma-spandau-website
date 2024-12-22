import { HomeContent } from "@/components/home-content";

export default async function Home({ params }) {
  const { locale } = await params;
  return <HomeContent locale={locale} />;
}
