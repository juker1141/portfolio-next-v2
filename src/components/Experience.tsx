const Experience = ({ fullpageApi }: { fullpageApi: any }) => {
  return (
    <div className="section">
      <div className="container mx-auto flex justify-center items-center">
        <div className="w-full flex flex-col justify-center">
          <div className="w-full flex justify-center">
            <div className="flex mb-10 w-full lg:w-2/3">
              <div className="shrink-0 mr-10">
                <p className="text-3xl">Oct 2021 - Present</p>
              </div>
              <div className="flex flex-col justify-center">
                <div className="w-full flex flex-col">
                  <h3 className="text-5xl font-bold mb-2">
                    Frontend Developer
                  </h3>
                  <span className="text-lg flex justify-end mb-2">Company</span>
                  <p className="text-xl mb-10">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Beatae sunt maiores iusto! Itaque, nam odit doloremque
                    perspiciatis ducimus officia repellendus aliquam neque
                    mollitia libero rerum sapiente cum autem rem beatae.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <div className="flex w-full lg:w-2/3">
              <div className="shrink-0 mr-10">
                <p className="text-3xl">Oct 2021 - Present</p>
              </div>
              <div className="flex flex-col justify-center">
                <div className="w-full flex flex-col">
                  <h3 className="text-5xl font-bold mb-2">
                    Frontend & Backend Developer
                  </h3>
                  <span className="text-lg flex justify-end mb-2">Company</span>
                  <p className="text-xl mb-10">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Beatae sunt maiores iusto! Itaque, nam odit doloremque
                    perspiciatis ducimus officia repellendus aliquam neque
                    mollitia libero rerum sapiente cum autem rem beatae.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
