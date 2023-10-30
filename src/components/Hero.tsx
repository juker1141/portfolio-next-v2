const Hero = () => {
  return (
    <section className="h-screen w-full grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-10">
      <div className="flex flex-col justify-center">
        <h2 className="text-5xl font-bold mb-2">Hi! I&apos;m Ryu</h2>
        <p className="text-lg">
          Frontend Developer / Backend Developer / Proficient in using Docker
        </p>
      </div>
      <div className="flex flex-col justify-center">
        <div className="w-full flex justify-start">
          <div className="w-1/2">
            <h3 className="text-5xl font-bold mb-2">Frontend</h3>
            <p className="text-xl mb-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              sunt maiores iusto! Itaque, nam odit doloremque perspiciatis
              ducimus officia repellendus aliquam neque mollitia libero rerum
              sapiente cum autem rem beatae.
            </p>
          </div>
        </div>
        <div className="w-full flex justify-end">
          <div className="w-1/2">
            <h3 className="text-5xl font-bold mb-2">Backend</h3>
            <p className="text-xl mb-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              sunt maiores iusto! Itaque, nam odit doloremque perspiciatis
              ducimus officia repellendus aliquam neque mollitia libero rerum
              sapiente cum autem rem beatae.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
