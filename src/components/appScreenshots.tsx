import Observer from "../framer";

const AppScreenshots = () => {
  const screenshots = [
    {
      src: "/Mockups/Checklist_page.png",
      alt: "Settlement Checklist",
      title: "Settlement Checklist",
    },
    {
      src: "/Mockups/Business_page.png",
      alt: "Find Business",
      title: "Find Local Businesses",
    },
    {
      src: "/Mockups/Grocery_page.png",
      alt: "Grocery Guide",
      title: "Grocery Guide",
    },
    {
      src: "/Mockups/Tips_page.png",
      alt: "Tips & Guide",
      title: "Tips & Guides",
    },
  ];

  return (
    <Observer>
      <section id="how-it-works" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">See UniSettle in Action</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              Explore the intuitive interface designed specifically for
              newcomers to Alberta.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 sm:max-w-full md:max-w-[90%] mx-auto">
            {screenshots.map((screenshot, index) => (
              <div key={index} className="group">
                <div className="rounded-2xl p-4 shadow-card hover:shadow-elegant transition-all duration-300 group-hover:scale-105">
                  <img
                    src={screenshot.src}
                    alt={screenshot.alt}
                    className="w-full h-auto rounded-xl"
                  />
                </div>
                <p className="text-center mt-3 text-sm font-medium text-gray-500">
                  {screenshot.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Observer>
  );
};

export default AppScreenshots;
