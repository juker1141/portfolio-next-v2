const Experience = ({ fullpageApi }: { fullpageApi: any }) => {
  return (
    <div className="section">
      <div className="container h-full mx-auto flex justify-center items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-5 gap-14 lg:gap-10">
          <div className="lg:col-span-2 font-amatic-sc font-bold text-8xl flex items-center">
            Experience
          </div>
          <div className="lg:col-span-3 flex flex-col">
            <div className="flex flex-col">
              <p className="text-xl">Oct 2021 - Present</p>
              <h3 className="text-2xl font-bold mb-2">Frontend Developer</h3>
              <span className="text-lg flex justify-end mb-2">
                RealTime Ltd.
              </span>
              <p className="text-lg mb-10">
                Responsible for layout and JavaScript. I participated in two
                Next blockchain projects, a backstage management system by
                Vue.js and a real-time chat robot with a backstage page by
                React.js.
                <br />
                <br />I usually play a leader in how to develop the project and
                discuss with developers to solve the problem. Also, I introduced
                Functional Programming, TypeScript, and Unit Test to improve
                development flow, reduce bugs and maintain costs.
              </p>
            </div>

            <div className="flex flex-col">
              <p className="text-xl">Oct 2022 - Present</p>
              <h3 className="text-2xl font-bold mb-2">Backend Developer</h3>
              <span className="text-lg flex justify-end mb-2">
                RealTime Ltd.
              </span>
              <p className="text-lg mb-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                sunt maiores iusto! Itaque, nam odit doloremque perspiciatis
                ducimus officia repellendus aliquam neque mollitia libero rerum
                sapiente cum autem rem beatae.
              </p>
            </div>
          </div>
        </div>
        {/* <div className="w-full flex flex-col justify-center">
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
        </div> */}
      </div>
    </div>
  );
};

export default Experience;
