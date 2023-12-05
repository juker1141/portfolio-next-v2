import Image from "next/image";

const Experience = ({ fullpageApi }: { fullpageApi: any }) => {
  return (
    <div className="section experience">
      <div className="container h-screen mx-auto flex justify-center items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-5 gap-14 lg:gap-10">
          <div className="lg:col-span-2 font-amatic-sc font-bold text-8xl flex flex-col justify-center items-center relative">
            <div className="relative">
              <Image
                width={430}
                height={430}
                src="images/ex-main.svg"
                alt="ex-main"
              />
              <Image
                width={100}
                height={100}
                className="absolute bottom-1 -left-12 animate-breath"
                src="images/ex-main-wind.svg"
                alt="ex-main-wind"
              />
            </div>
            <Image
              width={120}
              height={120}
              className="absolute -top-8 -right-0 dutation-500 animate-fix-0.7 delay-500"
              src="images/element/e-9.svg"
              alt="e-9-cloud"
            />
            <ul className="speed-lines absolute top-1/2 translate-y-1/2 -left-10 animate-fix-0.5">
              <li className="animate-speed origin-bottom-right h-0.5 my-7 bg-secondary"></li>
              <li className="animate-speed origin-bottom-right h-0.5 my-7 bg-secondary"></li>
              <li className="animate-speed origin-bottom-right h-0.5 my-7 bg-secondary"></li>
            </ul>
          </div>
          <div className="lg:col-span-3 flex flex-col">
            <div className="flex flex-col relative">
              <Image
                width={120}
                height={120}
                className="absolute top-20 right-20 cloud duration-300 animate-fix-0.9"
                src="images/element/e-9.svg"
                alt="e-9-cloud"
              />
              <h4 className="text-8xl font-amatic-sc font-bold mb-6">
                Experience
              </h4>
              <p className="text-lg font-light">Oct 2021 - Present</p>
              <h3 className="text-2xl font-bold mb-2">Frontend Developer</h3>
              <span className="flex justify-end mb-2">RealTime Ltd.</span>
              <p className="text-lg mb-10">
                Responsible for layout and JavaScript. I participated in two
                Next.js & Web3 blockchain projects, two backstage management
                system by Vue.js and a real-time chat robot with a backstage
                page by React.js.
                {/* <br />
                <br />I usually play a leader in how to develop the project and
                discuss with developers to solve the problem. Also, I introduced
                Functional Programming, TypeScript, and Unit Test to improve
                development flow, reduce bugs and maintain costs. */}
              </p>
            </div>

            <div className="flex flex-col">
              <p className="text-lg font-light">Oct 2022 - Present</p>
              <h3 className="text-2xl font-bold mb-2">
                Frontend & Backend Developer
              </h3>
              <span className="flex justify-end mb-2">RealTime Ltd.</span>
              <p className="text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                sunt maiores iusto! Itaque, nam odit doloremque perspiciatis
                ducimus officia repellendus aliquam neque mollitia libero rerum
                sapiente cum autem rem beatae.
                {/* 因應公司發展方向，我開始往後端的領域發展，主要幫助在線的專案開發新的 API 並且修復 Bug，並且自己學習 Docker & nginx 來部署測試站，又或是與 MIS 一同研究專案部署方式。當然，我仍然有在開發前端頁面的增修，幫助同事解決前端渲染問題。 */}
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
