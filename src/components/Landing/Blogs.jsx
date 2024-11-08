import React from "react";

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      date: "Jan 01, 2024",
      title: "Planning To Visit Bali Soon? Read Our Detailed Guide To Know",
      description:
        "Discover smart investment strategies to streamline and organize your portfolio.",
      imageUrl:
        "https://www.oyorooms.com/blog/wp-content/uploads/2019/09/bali.jpg",
    },
    {
      id: 2,
      date: "Feb 15, 2024",
      title: "Girls’ Trip, Nostalgic Or Luxury: 10 OYOxDesign Homes For Al...",
      description:
        "The musical decor of this house will put a tune to your lips the moment you step in. So, if you and your friends jam together, this holiday home in Goa is the perfect setting for you.",
      imageUrl:
        "https://www.oyorooms.com/blog/wp-content/uploads/2019/08/Banner-Image.jpg",
    },
    {
      id: 3,
      date: "Mar 04, 2024",
      title: "15 Homestays In Delhi To Make You Fall In Love With The City!",
      description:
        "Whether you’re in Delhi for a business trip or looking for a quick and comfortable stopover in the city, here’s a list of 15 homestays in Delhi  with modern amenities for utmost comfort...",
      imageUrl:
        "https://www.oyorooms.com/blog/wp-content/uploads/2019/07/shutterstock_1445767742.jpg",
    },
  ];

  return (
    <section className="py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-manrope text-4xl font-bold text-gray-900 text-center mb-16">
          Our latest blog
        </h2>
        <div className="flex justify-center gap-y-8 lg:gap-y-0 flex-wrap lg:flex-nowrap lg:justify-between lg:gap-x-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="group w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl hover:scale-105 ease-in-out duration-500"
            >
              <div className="flex items-center">
                <img
                  src={post.imageUrl}
                  alt="Blog post"
                  className="rounded-t-2xl w-full object-cover"
                />
              </div>
              <div className="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl group-hover:bg-gray-50">
                <span className="text-indigo-600 font-medium mb-3 block">
                  {post.date}
                </span>
                <h4 className="text-xl text-gray-900 font-medium leading-8 mb-5">
                  {post.title}
                </h4>
                <p className="text-gray-500 leading-6 mb-10">
                  {post.description}
                </p>
                <a
                  href={`/blogs?id=${post.id}`}
                  className="cursor-pointer text-lg text-indigo-600 font-semibold"
                >
                  Read more...
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
