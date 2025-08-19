import Header from "@/components/Header";
import ImageCarousel from "@/components/ImageCarousel";
import Footer from "@/components/Footer";
import { getImagePaths } from "@/utils/utils";
import Image from "next/image";


export default function Home() {
  const basePath = process.env.NODE_ENV === "production" ? '/d8web' : '';
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
        height="300px"
        path="carousel_images"
        title={`Leading with Humanity <br/> Serving with Pride`}
      />
      <div className="px-4 sm:px-8 md:px-12 lg:px-16 pt-6 sm:pt-8 md:pt-10 flex item-center">
        <div className="w-full">
          {/* Intro Section */}
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl text-center pb-6 sm:pb-8 md:pb-10">
              Leo District 306 D8
            </h1>
            <p className="text-justify text-sm sm:text-base">
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
            <div className="flex flex-col sm:flex-row justify-evenly font-semibold pt-8 sm:pt-10 md:pt-12 px-4 sm:px-8 md:px-30 text-primarytextColor gap-4 sm:gap-0">
              <div className="flex flex-col items-center">
                <h2 className="text-2xl sm:text-3xl">2</h2>
                <p className="text-lg sm:text-xl">Regions</p>
              </div>
              <div className="flex flex-col items-center">
                <h2 className="text-2xl sm:text-3xl">150+</h2>
                <p className="text-lg sm:text-xl">Projects</p>
              </div>
              <div className="flex flex-col items-center">
                <h2 className="text-2xl sm:text-3xl">1200</h2>
                <p className="text-lg sm:text-xl">Leos</p>
              </div>
              <div className="flex flex-col items-center">
                <h2 className="text-2xl sm:text-3xl">32</h2>
                <p className="text-lg sm:text-xl">Clubs</p>
              </div>
            </div>
          </div>

          {/* Mission & Vision */}

          <div className="grid grid-cols-1 lg:grid-cols-5 mt-16 sm:mt-20 md:mt-24 gap-6 lg:gap-0">
            <div className="flex flex-col justify-between lg:col-span-3 space-y-6 lg:space-y-0">
              <div className="">
                <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
                  Our Vision
                </h2>
                <p className="mb-3 sm:mb-4 font-semibold text-sm sm:text-base">
                  To build a generation of passionate youth who lead with
                  empathy and serve with purpose.
                </p>
                <p className="text-justify text-xs sm:text-sm">
                  We envision a future where the youth of Leo District 306 D8
                  emerge as dynamic leaders and compassionate citizens
                  individuals who do not just dream of change but actively drive
                  it. Our goal is to nurture a generation that embraces
                  diversity, values human dignity, and channels their passions
                  into impactful service.
                </p>
              </div>
              <div className="">
                <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
                  Our Mission
                </h2>
                <p className="mb-3 sm:mb-4 font-semibold text-sm sm:text-base">
                  To provide the youth of District 306 D8 with platforms to
                  grow, connect, and inspire change through meaningful service
                  and leadership opportunities.
                </p>
                <p className="text-justify text-xs sm:text-sm">
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
            <div className="lg:col-span-2 flex justify-center lg:justify-end lg:pr-10 items-center h-full">
              <Image
                src={`${basePath}/md_map.png`}
                alt="MD Map"
                width={260}
                height={260}
                className="w-48 sm:w-56 md:w-64 lg:w-auto"
              />
            </div>
          </div>

          {/* Clubs Under District */}
          <div>
            <h1 className="text-2xl sm:text-3xl mt-16 sm:mt-20 md:mt-25 text-primarytextColor font-semibold mb-6 sm:mb-8 md:mb-10">
              Clubs Under Our District
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-2 grid-rows-auto lg:grid-rows-6 h-auto lg:h-[520px]">
              <div className="col-span-1 sm:col-span-2 lg:col-span-2 row-span-1 sm:row-span-2 lg:row-span-4">
                <Image
                  src={`${basePath}/carousel_images/carouselImage1.jpg`}
                  alt="MD Map"
                  width={160}
                  height={80}
                  className="w-full h-32 sm:h-40 lg:h-full object-cover"
                />
              </div>
              <div className="bg-secondary col-span-1 row-span-1 sm:row-span-2 px-3 sm:px-5 py-3 sm:py-5">
                <div className="text-white text-xs sm:text-sm text-center">
                  <h2 className="text-center font-semibold mb-1 text-sm sm:text-base">
                    Region B
                  </h2>
                  <ul className="">
                    <li className="text-center">Leo Club of Baddegama</li>
                    <li className="text-center">Leo Club of Baddegama</li>
                    <li className="text-center">Leo Club of Baddegama</li>
                    <li className="text-center">Leo Club of Baddegama</li>
                    <li className="text-center">Leo Club of Baddegama</li>
                  </ul>
                </div>
              </div>
              <div className="col-span-1 row-span-1 sm:row-span-2 lg:row-span-4">
                <Image
                  src={`${basePath}/carousel_images/carouselImage1.jpg`}
                  alt="MD Map"
                  width={160}
                  height={80}
                  className="w-full h-32 sm:h-40 lg:h-full object-cover"
                />
              </div>
              <div className="col-span-1 row-span-1 sm:row-span-2 lg:row-span-4">
                <Image
                  src={`${basePath}/carousel_images/carouselImage1.jpg`}
                  alt="MD Map"
                  width={180}
                  height={1160}
                  className="w-full h-32 sm:h-40 lg:h-full object-cover"
                />
              </div>
              <div className="bg-secondary col-span-1 row-span-1 sm:row-span-2 flex flex-col px-4 sm:px-5 justify-center ">
                <p className="text-white text-xs sm:text-sm py-4 md:py-1 text-center">
                  Leo District 306 D8 proudly leads a growing network of Leo
                  Clubs across the region. Each club serves as a beacon of youth
                  leadership and community transformation.
                </p>
                {/* <div className="px-2 sm:px-1 text-center py-2 sm:py-1 bg-accent rounded-2xl mx-12 sm:mx-8 mt-4 text-sm">
                  Meet Our Clubs
                </div> */}
              </div>
              <div className="bg-secondary col-span-1 row-span-1 sm:row-span-2 px-3 sm:px-5 py-3 sm:py-5">
                <div className="text-white text-xs sm:text-sm text-center">
                  <h2 className="text-center font-semibold text-sm sm:text-base">
                    Region A
                  </h2>
                  <ul className="">
                    <li className="text-center">Leo Club of Baddegama</li>
                    <li className="text-center">Leo Club of Baddegama</li>
                    <li className="text-center">Leo Club of Baddegama</li>
                    <li className="text-center">Leo Club of Baddegama</li>
                    <li className="text-center">Leo Club of Baddegama</li>
                  </ul>
                </div>
              </div>

              <div className="bg-secondary col-span-1 row-span-1 sm:row-span-2">
                <p className="text-white text-xs sm:text-sm px-2 text-center py-4 sm:py-5">
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
          <div className="bg-accent2 mt-12 sm:mt-16 px-6 sm:px-12 py-6 sm:py-8 flex flex-col items-center">
            <h2 className="font-semibold text-primarytextColor">Our Pillers</h2>
            <h1 className="text-lg sm:text-xl font-semibold mt-1">
              Our Core Pillers
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mt-4 sm:mt-5 w-full sm:w-auto">
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
          <div className="grid grid-cols-1 md:grid-cols-2 mt-10 md:mt-12">
            <div className="flex flex-col justify-center order-2 md:order-1 mt-6 md:mt-0">
              <h1 className="col-span-1 text-primarytextColor mb-4 md:mb-8 text-xl md:text-2xl font-semibold">
                A Message from the District President
              </h1>
              <p className="text-sm">
                &ldquo;As Leos, we are the change we wish to see in the world.
                Leo District 306 D8 is not just a community it&apos;s a family
                of changemakers. Let us ignite passion, embrace service, and
                leave a legacy that inspires generations. As Leos, we are the
                change we wish to see in the world. Leo District 306 D8 is not
                just a community it&apos;s a family of changemakers. Let us
                ignite passion, embrace service, and leave a legacy that
                inspires generations.&rdquo;
              </p>
              <div className="col-span-1 w-full flex justify-end text-sm mt-4 md:mt-6">
                <div className="flex flex-col">
                  <p>- Leo Anushka Liyanage -</p>
                  <p>District President 306 D8</p>
                </div>
              </div>
            </div>
            <div className="pl-0 md:pl-8 h-[220px] sm:h-[260px] md:h-[300px] order-1 md:order-2">
              <Image
                src={`${basePath}/carousel_images/carouselImage1.jpg`}
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
      <div className="mx-4 sm:mx-8 md:mx-12 lg:mx-16 overflow-hidden rounded-lg mt-10 sm:mt-16 mb-8 sm:mb-10">
        <HomePageWrapper
          path="carousel_images"
          subtitle="Leadership, Experience, Opprtunity"
          height="300px"
        />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
