import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <div>
      <SectionTitle heading="About Our Houses" />
      <div className="md:flex items-center">
        <div className="bg-gray-200 w-full md:w-1/2 rounded-lg p-6">
          <div className="flex p-2 gap-1">
            <div className="">
              <span className="bg-teal-500 inline-block w-3 h-3 rounded-full"></span>
            </div>
            <div className="circle">
              <span className="bg-orange-500 inline-block w-3 h-3 rounded-full"></span>
            </div>
            <div className="circle">
              <span className="bg-indigo-500 inline-block w-3 h-3 rounded-full"></span>
            </div>
          </div>
          <div className="card__content mt-4">
            <p className="text-gray-700">
              Explore our collection of over 20 premium houses, each offering a
              unique living experience. Our houses stand out with spacious rooms,
              modern amenities, and convenient features. With a variety of options,
              you're sure to find the perfect home that suits your lifestyle.
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2 md:ml-4">
          <img
            src={`https://i.ibb.co/jhHQ99V/eu-modern-european-complex-apartment-600nw-1445600369.webp`}
            alt=""
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>

      <div className="md:flex mt-4 items-center">
        <div className="w-full md:w-1/2 md:mr-4">
          <img
            src={`https://i.ibb.co/dtMMzLP/homepage-4-1274towson.jpg`}
            alt=""
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="bg-gray-200 w-full md:w-1/2 rounded-lg p-6">
          <div className="flex p-2 gap-1">
            <div className="">
              <span className="bg-teal-500 inline-block w-3 h-3 rounded-full"></span>
            </div>
            <div className="circle">
              <span className="bg-orange-500 inline-block w-3 h-3 rounded-full"></span>
            </div>
            <div className="circle">
              <span className="bg-indigo-500 inline-block w-3 h-3 rounded-full"></span>
            </div>
          </div>
          <div className="card__content mt-4">
            <p className="text-gray-700">
              Enjoy the comfort of our spacious houses, carefully designed to
              provide ample space for relaxation. Step onto the balcony and immerse
              yourself in the outdoors, taking advantage of the refreshing breeze and
              scenic views. Our houses offer top-notch water facilities, ensuring a
              seamless and convenient water supply for all residents. Experience
              larger dining areas, perfect for gatherings and shared meals. Each room
              is designed with a focus on providing a larger, open feel, creating a
              homely atmosphere you'll love.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
