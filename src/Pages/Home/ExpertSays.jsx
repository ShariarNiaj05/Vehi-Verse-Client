import member1 from '/member1.jpg'
import member2 from '/member2.jpg'
import member3 from '/member3.jpg'

const ExpertSays = () => {
  return (
      <div>
          <h2 className=" text-center mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal  antialiased">What Our Experts Say  🎙️</h2>
          <div className=" max-w-screen-2xl flex flex-wrap mx-auto p-10 gap-16">
      <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-2xl p-3 shadow-sky-200">
        <div className="relative flex items-center gap-4 pt-0 pb-8 mx-0 mt-4 overflow-hidden text-gray-700 bg-transparent rounded-xl bg-clip-border">
          <img
            src={member1}
            alt="tania andrew"
            className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
          />
          <div className="flex w-full flex-col gap-0.5">
            <div className="flex items-center justify-between">
              <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Jane Doe
              </h5>
              <div className="flex items-center gap-0 5"></div>
            </div>
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-blue-gray-900">
            Chief Auto Analyst
            </p>
          </div>
        </div>
        <div className="p-0 mb-6">
          <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
          At Vehiverse, our seasoned automotive experts constantly examine the evolving landscape of vehicles, delivering their insights to keep you informed and ahead of the curve.
          </p>
        </div>
              </div>
              

              <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-2xl p-3 shadow-sky-50">
        <div className="relative flex items-center gap-4 pt-0 pb-8 mx-0 mt-4 overflow-hidden text-gray-700 bg-transparent rounded-xl bg-clip-border">
          <img
            src={member2}
            alt="tania andrew"
            className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
          />
          <div className="flex w-full flex-col gap-0.5">
            <div className="flex items-center justify-between">
              <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              John Smith
              </h5>
              <div className="flex items-center gap-0 5"></div>
            </div>
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-blue-gray-900">
            Car Historian
            </p>
          </div>
        </div>
        <div className="p-0 mb-6">
          <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
          he transition from fuel to electric is more than just a technological shift. It's a new chapter in automotive history, promising a cleaner, more efficient future. At Vehiverse, we're excited to be part of this journey.
          </p>
        </div>
              </div>
              


              <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-2xl p-3 shadow-sky-200">
        <div className="relative flex items-center gap-4 pt-0 pb-8 mx-0 mt-4 overflow-hidden text-gray-700 bg-transparent rounded-xl bg-clip-border">
          <img
            src={member3}
            alt="tania andrew"
            className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
          />
          <div className="flex w-full flex-col gap-0.5">
            <div className="flex items-center justify-between">
              <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Emily Brown
              </h5>
              <div className="flex items-center gap-0 5"></div>
            </div>
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-blue-gray-900">
            Future Tech Specialist
            </p>
          </div>
        </div>
        <div className="p-0 mb-6">
          <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
          Understanding the past is crucial for shaping the future. Classic cars are not just vehicles; they are stories, legacies. They remind us of the roads traveled and inspire the paths ahead.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ExpertSays;
