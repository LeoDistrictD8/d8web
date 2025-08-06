import Header from "@/components/Header";
import ImageCarousel from "@/components/ImageCarousel";
import { getImagePaths } from "@/utils/utils";

export default function Home() {
  async function HomePageWrapper() {
    const images = getImagePaths("carousel_images");
    return <ImageCarousel images={images} />;
  }

  return (
    <div className="">
      <Header />
      <HomePageWrapper />
    </div>
  );
}
