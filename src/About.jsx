import React from "react";

const About = ({ aboutRef }) => {
  return (
    <div className="w-5/6 m-auto mt-32 md:w-4/6">
      <h2
        ref={aboutRef}
        className="mb-12 text-3xl text-sky-200 relative after:content-[''] after:block after:w-12 after:h-0.5 after:bg-sky-200 after:mt-2 after:ml-0"
      >
        About
      </h2>

      <p className="text-sky-200">
        Welcome to our food recipes app, where cooking inspiration is just a tap
        away! Designed for food lovers of all skill levels, our app brings
        together a wide variety of delicious recipes, carefully organized into
        categories to help you find exactly what you’re craving. Whether you're
        planning a quick weekday meal or a special dinner for family and
        friends, we’ve got you covered.
      </p>
      <br />
      <p className="text-sky-200">
        Our app features an extensive collection of recipes from around the
        world, spanning different cuisines, dietary preferences, and occasions.
        Each recipe comes with clear, step-by-step instructions to guide you
        through the cooking process, making it easy to follow along even if
        you're new to the kitchen. We also provide a detailed list of
        ingredients for every recipe, ensuring you have everything you need to
        whip up a perfect dish.
      </p>
      <br />
      <p className="text-sky-200">
        What sets our app apart is its intuitive design and user-friendly
        experience. You can quickly browse through different categories such as
        appetizers, main courses, desserts, and more. With new recipes regularly
        added, you’ll never run out of ideas for your next culinary adventure.
        Start cooking today and explore the joy of making food at home!
      </p>
    </div>
  );
};

export default About;
