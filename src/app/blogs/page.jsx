"use client";
import { useSearchParams } from "next/navigation";

const Article = () => {
  const searchParams = useSearchParams();
  const blogId = searchParams?.get("id") || false;

  const blogPosts = [
    {
      id: 1,
      date: "Jan 01, 2024",
      title: "Clever ways to invest in product to organize your portfolio",
      description:
        "Discover smart investment strategies to streamline and organize your portfolio.",
      imageUrl: "https://pagedone.io/asset/uploads/1696244317.png",
    },
    {
      id: 2,
      date: "Feb 15, 2024",
      title: "How to grow your profit through systematic investment with us",
      description:
        "Unlock the power of systematic investment with us and watch your profits soar. Our...",
      imageUrl: "https://pagedone.io/asset/uploads/1696244340.png",
    },
    {
      id: 3,
      date: "Mar 04, 2024",
      title: "How to analyze every holdings of your portfolio",
      description:
        "Our comprehensive guide will equip you with the tools and insights needed to...",
      imageUrl: "https://pagedone.io/asset/uploads/1696244356.png",
    },
  ];
  return (
    <>
      {blogId == 1 && (
        <main className="pt-8 pb-6 lg:pt-16  bg-white dark:bg-gray-900 antialiased">
          <div className="flex justify-between px-4 mx-auto max-w-screen-xl">
            <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
              <header className="mb-4 lg:mb-6 not-format">
                <address className="flex items-center mb-6 not-italic">
                  <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                    <img
                      className="mr-4 w-16 h-16 rounded-full"
                      src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                      alt="Jese Leos"
                    />
                    <div>
                      <a
                        href="#"
                        rel="author"
                        className="text-xl font-bold text-gray-900 dark:text-white"
                      >
                        Jese Leos
                      </a>
                      <p className="text-base text-gray-500 dark:text-gray-400">
                        Planning To Visit Bali Soon? Read Our Detailed Guide To
                        Know...
                      </p>
                      <p className="text-base text-gray-500 dark:text-gray-400">
                        <time
                          pubdate
                          dateTime="2022-02-08"
                          title="February 8th, 2022"
                        >
                          Jan 01, 2023
                        </time>
                      </p>
                    </div>
                  </div>
                </address>
                <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                  Planning To Visit Bali Soon? Read Our Detailed Guide To Know
                  All The Essential Details For A Fun-Filled Vacation 2024 &
                  2025
                </h1>
              </header>
              <p className="lead pb-4">
                Bali is often known to be the most hyped destination in the
                world, especially when it comes to planning your honeymoon. But
                with our Bali travel guide, you will get to know that Bali has a
                lot to offer to everyone than just the honeymoon couples.
                Located to the west of Java, in the Lesser Sunda Islands, it
                offers an unadulterated scenic view of the rich rice terraces,
                serene beaches, sky-high waterfalls, coral reefs, culinary
                expertise, and spiritual and cultural abundance. To top up all
                the serene landscape of this paradisiac island, Bali also boasts
                itself as a hub for adventurous and water sports activities. If
                you are planning to give this hot destination a visit, it’s
                crucial to know some important information about the place to
                make your holidays a comfortable one. This is why we have
                undergone various research (so you don’t have to devote hours on
                searching about Bali anymore!) and come up with this detailed
                Bali travel guide to give you all the details on this tropical
                destination at one go. So, without any delay, keep reading!
              </p>
              <figure>
                <img
                  src="https://www.oyorooms.com/blog/wp-content/uploads/2019/09/bali.jpg"
                  alt="Digital art"
                  className="w-full"
                />
                <figcaption className="text-[30px] font-bold mt-2">
                  Digital art by Rehal Keenar
                </figcaption>
              </figure>
              <h2>Best Time to Visit Bali</h2>
              <p>
                Bali is considered to be a year-round destination and can be
                visited during any time of the year. However, according to our
                Bali travel guide, you can consider the period of April to
                September to be the ideal time to visit. During this time, there
                are hardly any rains in Bali and thus, the surroundings remain
                dry to explore. Our curators have suggested this period to be
                ideal in the Bali Tour Guide because the water level remains in
                control and you can indulge yourself in a number of water sports
                and activities like scuba diving, snorkeling, boating and a lot
                more. Though the above period is considered to be ideal
                (weather-wise), the peak months to visit Bali falls in July,
                August, late January, and early December. During these times,
                the hotel prices hike up a lot and it becomes very difficult to
                find accommodation during these months. Thus, the first thing
                that you can do after going through our Bali trip guide, is
                pre-booking your Packages To Bali, to avoid later mishaps.
              </p>
            </article>
          </div>
        </main>
      )}

      {blogId == 2 && (
        <main className="pt-8 pb-6 lg:pt-16  bg-white dark:bg-gray-900 antialiased">
          <div className="flex justify-between px-4 mx-auto max-w-screen-xl">
            <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
              <header className="mb-4 lg:mb-6 not-format">
                <address className="flex items-center mb-6 not-italic">
                  <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                    <img
                      className="mr-4 w-16 h-16 rounded-full"
                      src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                      alt="Jese Leos"
                    />
                    <div>
                      <a
                        href="#"
                        rel="author"
                        className="text-xl font-bold text-gray-900 dark:text-white"
                      >
                        Moiles Morals
                      </a>
                      <p className="text-base text-gray-500 dark:text-gray-400">
                        This villa in Goa is based on communal living, so no
                        matter which bed you’re sleeping on, you can still talk
                        to your friends in the other room. Perfect for those
                        long nights of giggling in the dark. And it’s a short
                        walk away from the beach.
                      </p>
                      <p className="text-base text-gray-500 dark:text-gray-400">
                        <time
                          pubdate
                          dateTime="2022-02-08"
                          title="February 8th, 2022"
                        >
                          Feb 15, 2024
                        </time>
                      </p>
                    </div>
                  </div>
                </address>
                <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                  Girls’ Trip, Nostalgic Or Luxury: 10 RoomstayxDesign Homes For
                  All Sorts Of Trips With Friends
                </h1>
              </header>
              <p className="lead pb-4">
                Friendship Day is all about celebrating your true friends – the
                ones who stay through thick and thin, and never leave your side,
                no matter how cranky you get. So, we thought there’s no better
                way to celebrate your epic friends than to plan a trip with
                them. While you’ll still have to do the boring logistical part
                of booking tickets and getting everyone together in one place,
                we’ve sorted one aspect for you – your holiday home. Whether you
                and your group of friends are wannabe singers, or you’re
                reuniting with your girls on a trip, we’ve found the perfect
                OYOxDesign home for you.
              </p>
              <figure>
                <img
                  src="https://www.oyorooms.com/blog/wp-content/uploads/2019/08/Banner-Image.jpg"
                  alt="Digital art"
                  className="w-full"
                />
                <figcaption className="text-[30px] font-bold mt-2">
                  Digital art by Sourabh Jeet
                </figcaption>
              </figure>
              <h2>Getting started with Roomstay</h2>
              <p>
                Ladies, we haven’t forgotten about your much-needed girls’ trip,
                away from the worries of the world. Get together with your girls
                and plan a trip to Goa, just to stay in this gorgeous home. A
                short walk away from the beach, and in the centre of all the
                action, this home has gorgeous views and interiors.
              </p>
            </article>
          </div>
        </main>
      )}

      {blogId == 3 && (
        <main className="pt-8 pb-6 lg:pt-16  bg-white dark:bg-gray-900 antialiased">
          <div className="flex justify-between px-4 mx-auto max-w-screen-xl">
            <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
              <header className="mb-4 lg:mb-6 not-format">
                <address className="flex items-center mb-6 not-italic">
                  <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                    <img
                      className="mr-4 w-16 h-16 rounded-full"
                      src="https://www.oyorooms.com/blog/wp-content/uploads/2019/07/shutterstock_1445767742.jpg"
                      alt="Jese Leos"
                    />
                    <div>
                      <a
                        href="#"
                        rel="author"
                        className="text-xl font-bold text-gray-900 dark:text-white"
                      >
                        Henry Jaiswal
                      </a>
                      <p className="text-base text-gray-500 dark:text-gray-400">
                        Heard about space crunch in the Capital? Well, atleast
                        not while you’re staying at this classy homestay in
                        Delhi. Stay close to RK Marg Ashram Metro Station for
                        uninterrupted and cheap transportation options to any
                        corner of the city.
                      </p>
                      <p className="text-base text-gray-500 dark:text-gray-400">
                        <time
                          pubdate
                          dateTime="2022-02-08"
                          title="February 8th, 2022"
                        >
                          Mar 04, 2024
                        </time>
                      </p>
                    </div>
                  </div>
                </address>
                <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                  Our comprehensive guide will equip you with the tools and
                  insights needed to...
                </h1>
              </header>
              <p className="lead pb-4">
                The capital city of our country isn’t just a place, it’s a vibe,
                it’s a way of living, it’s electricity. Each state represents
                its own specific culture, tradition and cuisine but Delhi is one
                such city that presents an amalgamation of the entire country.
                You needn’t necessarily have lived in the city all your life to
                feel a sense of belonging. There is magic in the air of Delhi
                that immediately makes you feel at home. Delhi, Dilli or more
                commonly known as Dillwalon ka sheher is a city known for
                attracting people from across the country. The city leaves no
                stone unturned when it comes to providing warmth and care to
                whoever decides to seek shelter here. Whether you’re here for a
                day, a month, a year or a lifetime, there is so much to see, to
                do and live that you won’t fall short of options. In order to
                explore the city at its best, it’s recommended that you try a
                homestay in Delhi to explore the finest that the city can offer.
                Whether you’re travelling alone or with friends or families,
                pick a homestay that offers amenities suited to your preferences
                and in areas in sync with your itinerary. OYO Home is definitely
                your best bet to make memories in your own way!
              </p>
              <figure>
                <img
                  src="https://www.oyorooms.com/blog/wp-content/uploads/2019/07/shutterstock_1445767742.jpg"
                  alt="Digital art"
                  className="w-full"
                />
                <figcaption className="text-[30px] font-bold mt-2">
                  Digital art by Sehjwal
                </figcaption>
              </figure>
              <h2>Getting started with Roomstay</h2>
              <p>
                This well-furnished studio in Chhatarpur is perfect for those
                who love their privacy. The home comes with full-time staff who
                is there cater to your needs. For easy transportation, Qutub
                Minar Metro Station can be reached with a quick ride. The
                facilities in the homestay ensure that you stay stress-free with
                all provisions for entertainment and comfort.
              </p>
              <h3>Type classification</h3>
              <p>
                There are several typeface classifications, and each
                classification has unique characteristics.
              </p>
            </article>
          </div>
        </main>
      )}

      <Newsletter />
    </>
  );
};

export default Article;

const Newsletter = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md sm:text-center">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Sign up for our newsletter
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-gray-500 md:mb-12 sm:text-xl dark:text-gray-400">
            Stay up to date with the roadmap progress, announcements, and
            exclusive discounts by signing up with your email.
          </p>
          <form action="#">
            <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
              <div className="relative w-full">
                <label
                  htmlFor="email"
                  className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Email address
                </label>
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 16"
                  >
                    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                  </svg>
                </div>
                <input
                  className="block p-3 pl-9 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Enter your email"
                  type="email"
                  id="email"
                  required
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="py-3 px-5 w-full text-sm font-medium text-center text-white bg-blue-500 rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Subscribe
                </button>
              </div>
            </div>
            <div className="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer dark:text-gray-300">
              We care about the protection of your data.{" "}
              <a
                href="#"
                className="font-medium text-primary-600 dark:text-primary-500 hover:underline"
              >
                Read our Privacy Policy
              </a>
              .
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
