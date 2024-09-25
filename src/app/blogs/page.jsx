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
                        Clever ways to invest in product to organize your
                        portfolio
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
                  Discover smart investment strategies to streamline and
                  organize your portfolio
                </h1>
              </header>
              <p className="lead">
                Flowbite is an open-source library of UI components built with
                the utility-first classes from Tailwind CSS. It also includes
                interactive elements such as dropdowns, modals, and datepickers.
              </p>
              <p>
                Before going digital, you might benefit from scribbling down
                some ideas in a sketchbook. This way, you can think things
                through before committing to an actual design project.
              </p>
              <p className="mb-4">
                But then I found a{" "}
                <a href="https://flowbite.com">
                  component library based on Tailwind CSS called Flowbite
                </a>
                . It comes with the most commonly used UI components, such as
                buttons, navigation bars, cards, form elements, and more.
              </p>
              <figure>
                <img
                  src="https://pagedone.io/asset/uploads/1696244317.png"
                  alt="Digital art"
                  className="w-full"
                />
                <figcaption className="text-[30px] font-bold mt-2">
                  Digital art by Rehal Keenar
                </figcaption>
              </figure>
              <h2>Getting started with Flowbite</h2>
              <p>
                First of all you need to understand how Flowbite works. This
                library is not another framework. Rather, it is a set of
                components based on Tailwind CSS that you can just copy-paste
                from the documentation.
              </p>
              <p>
                It also includes a JavaScript file that enables interactive
                components, such as modals, dropdowns, and datepickers which you
                can optionally include into your project via CDN or NPM.
              </p>
              <h3>Laying the groundwork for best design</h3>
              <p>
                Before going digital, you might benefit from scribbling down
                some ideas in a sketchbook. This way, you can think things
                through before committing to an actual design project.
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
                        Unlock the power of systematic investment with us and
                        watch your profits soar. Our...
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
                  Our comprehensive guide will equip you with the tools and
                  insights needed to...
                </h1>
              </header>
              <p className="lead">
                Flowbite is an open-source library of UI components built with
                the utility-first classes from Tailwind CSS. It also includes
                interactive elements such as dropdowns, modals, and datepickers.
              </p>
              <p>
                Before going digital, you might benefit from scribbling down
                some ideas in a sketchbook. This way, you can think things
                through before committing to an actual design project.
              </p>
              <p className="mb-4">
                But then I found a{" "}
                <a href="https://flowbite.com">
                  component library based on Tailwind CSS called Flowbite
                </a>
                . It comes with the most commonly used UI components, such as
                buttons, navigation bars, cards, form elements, and more.
              </p>
              <figure>
                <img
                  src="https://pagedone.io/asset/uploads/1696244340.png"
                  alt="Digital art"
                  className="w-full"
                />
                <figcaption className="text-[30px] font-bold mt-2">
                  Digital art by Rehal Keenar
                </figcaption>
              </figure>
              <h2>Getting started with Flowbite</h2>
              <p>
                First of all you need to understand how Flowbite works. This
                library is not another framework. Rather, it is a set of
                components based on Tailwind CSS that you can just copy-paste
                from the documentation.
              </p>
              <p>
                It also includes a JavaScript file that enables interactive
                components, such as modals, dropdowns, and datepickers which you
                can optionally include into your project via CDN or NPM.
              </p>
              <h3>Laying the groundwork for best design</h3>
              <p>
                Before going digital, you might benefit from scribbling down
                some ideas in a sketchbook. This way, you can think things
                through before committing to an actual design project.
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

      {blogId == 3 && (
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
                        Henry Jaiswal
                      </a>
                      <p className="text-base text-gray-500 dark:text-gray-400">
                        How to analyze every holdings of your portfolio
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
              <p className="lead">
                Flowbite is an open-source library of UI components built with
                the utility-first classes from Tailwind CSS. It also includes
                interactive elements such as dropdowns, modals, and datepickers.
              </p>
              <p>
                Before going digital, you might benefit from scribbling down
                some ideas in a sketchbook. This way, you can think things
                through before committing to an actual design project.
              </p>
              <p className="mb-4">
                But then I found a{" "}
                <a href="https://flowbite.com">
                  component library based on Tailwind CSS called Flowbite
                </a>
                . It comes with the most commonly used UI components, such as
                buttons, navigation bars, cards, form elements, and more.
              </p>
              <figure>
                <img
                  src="https://pagedone.io/asset/uploads/1696244356.png"
                  alt="Digital art"
                  className="w-full"
                />
                <figcaption className="text-[30px] font-bold mt-2">
                  Digital art by Sehjwal
                </figcaption>
              </figure>
              <h2>Getting started with Flowbite</h2>
              <p>
                First of all you need to understand how Flowbite works. This
                library is not another framework. Rather, it is a set of
                components based on Tailwind CSS that you can just copy-paste
                from the documentation.
              </p>
              <p>
                It also includes a JavaScript file that enables interactive
                components, such as modals, dropdowns, and datepickers which you
                can optionally include into your project via CDN or NPM.
              </p>
              <h3>Laying the groundwork for best design</h3>
              <p>
                Before going digital, you might benefit from scribbling down
                some ideas in a sketchbook. This way, you can think things
                through before committing to an actual design project.
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
