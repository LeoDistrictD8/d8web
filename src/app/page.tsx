import Header from "@/components/Header";
import ImageCarousel from "@/components/ImageCarousel";
import { getImagePaths } from "@/utils/utils";

export default function Home() {
  async function HomePageWrapper() {
    const images = getImagePaths("carousel_images");
    return (
      <ImageCarousel
        images={images}
        title="Leading with Humanity Serving with Pride"
      />
    );
  }

  return (
    <div className="">
      <Header />
      <HomePageWrapper />
      <div className="px-24 pt-10 flex item-center">
        <div className="">
          <h1 className="text-4xl text-center pb-10">Leo District 306 D8</h1>
          <p className="text-justify">
            Leo District 306 D8 is a vibrant and forward-thinking youth movement
            under the umbrella of Lions Clubs International, the world’s largest
            service organization. As the youngest district in the Leo Multiple
            District 306 of Sri Lanka, we bring fresh energy, innovation, and
            unity into the Leoism landscape, driven by a shared commitment to
            service, leadership, and fellowship. Our district is home to a
            diverse network of Leo Clubs led by passionate youth leaders who are
            determined to create lasting, positive change in their communities.
            From grassroots service initiatives to district-wide youth
            empowerment programs, every project we undertake is guided by our
            core values: Leadership, Experience, and Opportunity. We believe in
            nurturing future leaders by providing them with the tools, exposure,
            and mentorship they need to thrive—both within the movement and in
            the world beyond. Through collaborative efforts with local and
            international organizations, we foster a culture of innovation,
            empathy, and civic responsibility.
          </p>
          <div className="flex flex-row justify-evenly font-semibold pt-10 px-30 text-primary">
            <div className="flex flex-col items-center">
              <h2 className="text-3xl">2</h2>
              <p className="text-xl">Regions</p>
            </div>
            <div className="flex flex-col items-center">
              <h2 className="text-3xl ">150+</h2>
              <p className="text-xl">Projects</p>
            </div>
            <div className="flex flex-col items-center">
              <h2 className="text-3xl">1200</h2>
              <p className="text-xl">Leos</p>
            </div>
            <div className="flex flex-col items-center">
              <h2 className="text-3xl">32</h2>
              <p className="text-xl">Clubs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
