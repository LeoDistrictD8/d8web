import Header from "@/components/Header";
import ImageCarousel from "@/components/ImageCarousel";
import { getImagePaths } from "@/utils/utils";
import Image from "next/image";

export default function Home() {
  async function HomePageWrapper({
    path,
    title,
    height,
    subtitle,
  }: {
    title?: string;
    path: string;
    height: string;
    subtitle?: string;
  }) {
    const images = getImagePaths(path);
    return (
      <ImageCarousel
        images={images}
        height={height}
        title={title}
        subtitle={subtitle}
      />
    );
  }

  return (
    <div className="">
      <Header />
      <HomePageWrapper
        height="500px"
        path="carousel_images"
        title={`Leading with Humanity <br/> Serving with Pride`}
      />
      <div className="px-16 pt-10 flex item-center">
        <div className="">
          {/* Intro Section */}
          <div>
            <h1 className="text-4xl text-center pb-10">Leo District 306 D8</h1>
            <p className="text-justify">
              Leo District 306 D8 is a vibrant and forward-thinking youth
              movement under the umbrella of Lions Clubs International, the
              world’s largest service organization. As the youngest district in
              the Leo Multiple District 306 of Sri Lanka, we bring fresh energy,
              innovation, and unity into the Leoism landscape, driven by a
              shared commitment to service, leadership, and fellowship. Our
              district is home to a diverse network of Leo Clubs led by
              passionate youth leaders who are determined to create lasting,
              positive change in their communities. From grassroots service
              initiatives to district-wide youth empowerment programs, every
              project we undertake is guided by our core values: Leadership,
              Experience, and Opportunity. We believe in nurturing future
              leaders by providing them with the tools, exposure, and mentorship
              they need to thrive—both within the movement and in the world
              beyond. Through collaborative efforts with local and international
              organizations, we foster a culture of innovation, empathy, and
              civic responsibility.
            </p>
            <div className="flex flex-row justify-evenly font-semibold pt-12 px-30 text-primarytextColor">
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

          {/* Mission & Vision */}

          <div className="grid grid-cols-5 mt-24 h-[460px]">
            <div className="flex flex-col justify-between col-span-3">
              <div className="">
                <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
                <p className="mb-4 font-semibold">
                  To build a generation of passionate youth who lead with
                  empathy and serve with purpose.
                </p>
                <p className="text-justify text-sm">
                  We envision a future where the youth of Leo District 306 D8
                  emerge as dynamic leaders and compassionate citizens
                  individuals who do not just dream of change but actively drive
                  it. Our goal is to nurture a generation that embraces
                  diversity, values human dignity, and channels their passions
                  into impactful service.
                </p>
              </div>
              <div className="">
                <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                <p className="mb-4 font-semibold">
                  To provide the youth of District 306 D8 with platforms to
                  grow, connect, and inspire change through meaningful service
                  and leadership opportunities.
                </p>
                <p className="text-justify text-sm">
                  Our mission is to empower the youth of our district by
                  creating inclusive and dynamic spaces where they can explore
                  their potential, develop leadership skills, and contribute to
                  society through structured service. Through hands-on projects,
                  leadership roles, international exposure, and community
                  collaborations, we aim to cultivate confident, responsible,
                  and visionary youth.
                </p>
              </div>
            </div>
            <div className="col-span-2 flex justify-end pr-10 items-center h-full">
              <Image
                src={"/md_map.png"}
                alt="MD Map"
                width={260}
                height={260}
              />
            </div>
          </div>

          {/* Clubs Under District */}
          <div>
            <h1 className="text-3xl mt-25 text-primarytextColor font-semibold mb-10">
              Clubs Under Our District
            </h1>
            <div className="grid grid-cols-4 gap-2 grid-rows-6 h-[520px]">
              <div className="col-span-2 row-span-4">
                <Image
                  src={"/carousel_images/carouselImage1.jpg"}
                  alt="MD Map"
                  width={160}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-secondary col-span-1 row-span-2 px-5 py-5">
                <div className="text-white text-sm text-center">
                  <h2 className="text-center font-semibold mb-4">Region B</h2>
                  <ul>
                    <li className="text-center">Leo Club of Baddegama</li>
                    <li className="text-center">Leo Club of Baddegama</li>
                    <li className="text-center">Leo Club of Baddegama</li>
                    <li className="text-center">Leo Club of Baddegama</li>
                    <li className="text-center">Leo Club of Baddegama</li>
                  </ul>
                </div>
              </div>
              <div className="col-span-1 row-span-4">
                <Image
                  src={"/carousel_images/carouselImage1.jpg"}
                  alt="MD Map"
                  width={160}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="col-span-1 row-span-4">
                <Image
                  src={"/carousel_images/carouselImage1.jpg"}
                  alt="MD Map"
                  width={180}
                  height={1160}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-secondary col-span-1 row-span-2 flex flex-col px-5 justify-center ">
                <p className="text-white text-xs text-center">
                  Leo District 306 D8 proudly leads a growing network of Leo
                  Clubs across the region. Each club serves as a beacon of youth
                  leadership and community transformation.
                </p>
                <div className="px-1 text-center py-1 bg-accent rounded-2xl mx-8 mt-4 text-sm">
                  Meet Our Clubs
                </div>
              </div>
              <div className="bg-secondary col-span-1 row-span-2 px-5 py-5">
                <div className="text-white text-sm text-center">
                  <h2 className="text-center font-semibold mb-4">Region A</h2>
                  <ul>
                    <li className="text-center">Leo Club of Baddegama</li>
                    <li className="text-center">Leo Club of Baddegama</li>
                    <li className="text-center">Leo Club of Baddegama</li>
                    <li className="text-center">Leo Club of Baddegama</li>
                    <li className="text-center">Leo Club of Baddegama</li>
                  </ul>
                </div>
              </div>

              <div className="bg-secondary col-span-1 row-span-2">
                <p className="text-white text-xs px-4 text-center py-5">
                  Leo District 306 D8 is home to a dynamic and diverse community
                  of Leo Clubs united by a shared passion for service and
                  leadership. Each club operates with its unique spirit and
                  strengths while collectively contributing to the district’s
                  vision of empowering youth and uplifting communities.
                </p>
              </div>
            </div>
          </div>

          {/* Core Pillers */}
          <div className="bg-accent2 mt-16 px-12 py-8 flex flex-col items-center">
            <h2 className="font-semibold text-primarytextColor">Our Pillers</h2>
            <h1 className="text-xl font-semibold mt-1">Our Core Pillers</h1>
            <div className="flex flex-row gap-5 mt-5">
              <div className="bg-accent px-5 py-5 flex flex-col items-center">
                <h1 className="font-semibold text-sm mb-2">
                  Leadership Development
                </h1>
                <p className="text-center text-sm">
                  Fostering tomorrow’s leaders through hands-on experience and
                  mentorship.
                </p>
              </div>
              <div className="bg-accent px-5 py-5 flex flex-col items-center">
                <h1 className="font-semibold text-sm mb-2">
                  Service to Humanity
                </h1>
                <p className="text-center text-sm">
                  Fostering tomorrow’s leaders through hands-on experience and
                  mentorship.
                </p>
              </div>
              <div className="bg-accent px-5 py-5 flex flex-col items-center">
                <h1 className="font-semibold text-sm mb-2">
                  Youth Empowerment
                </h1>
                <p className="text-center text-sm">
                  Fostering tomorrow’s leaders through hands-on experience and
                  mentorship.
                </p>
              </div>
              <div className="bg-accent px-5 py-5 flex flex-col items-center">
                <h1 className="font-semibold text-sm mb-2">
                  Global Connection
                </h1>
                <p className="text-center text-sm">
                  Fostering tomorrow’s leaders through hands-on experience and
                  mentorship.
                </p>
              </div>
            </div>
          </div>

          {/* District President Message */}
          <div className="grid grid-cols-2 mt-12">
            <div className="flex flex-col justify-center">
              <h1 className="col-span-1 text-primarytextColor mb-8 text-2xl font-semibold">
                A Message from the District President
              </h1>
              <p className="text-sm">
                "As Leos, we are the change we wish to see in the world. Leo
                District 306 D8 is not just a community it's a family of
                changemakers. Let us ignite passion, embrace service, and leave
                a legacy that inspires generations. As Leos, we are the change
                we wish to see in the world. Leo District 306 D8 is not just a
                community it's a family of changemakers. Let us ignite passion,
                embrace service, and leave a legacy that inspires generations."
              </p>
              <div className="col-span-1 w-full flex justify-end text-sm mt-6">
                <div className="flex flex-col">
                  <p>- Leo Anushka Liyanage -</p>
                  <p>District President 306 D8</p>
                </div>
              </div>
            </div>
            <div className="pl-8 h-[300px]">
              <Image
                src={"/carousel_images/carouselImage1.jpg"}
                alt="MD Map"
                width={600}
                height={600}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Lower Image Carousal */}
      <div className="mx-16 overflow-hidden rounded-lg mt-16 mb-10">
        <HomePageWrapper
          path="carousel_images"
          subtitle="Leadership, Experience, Opprtunity"
          height="300px"
        />
      </div>
    </div>
  );
}
