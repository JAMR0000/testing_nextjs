import { getHomePage } from '@/lib/strapi';
import { HeroSection } from '@/components/hero-section';

export async function generateMetadata() {
  const strapiData = await getHomePage();
  const { title, description } = strapiData;
  return {
    title,
    description,
  };
}

export default async function Home() {
  const strapiData = await getHomePage();
  const { title, description } = strapiData;
  const [heroSection] = strapiData?.sections || [];
  return (
    <main className='container mx-auto py-6'>
      <h1 className='text-3xl font-bold'>{title}</h1>
      <p className='text-lg'>{description}</p>
      <HeroSection data={heroSection} />
    </main>
  );
}
