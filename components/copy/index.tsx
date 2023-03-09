import Button2 from "../UI/button2"

export default function Copy() {
    return (
        <div className="z-10 h-full sm:h-screen w-screen relative bg-white text-black">
            <div className="text-left mt-3 mx-3">
                <h1 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold">We take hiring off the hands of Web3 security teams</h1>
            </div>
            <div className="flex flex-col justify-center items-center md:flex-row lg:space-x-10">
                <div className="text-center flex flex-col justify-center md:w-72 h-44 md:h-96 px-10 rounded md:shadow-xl mb-6">
                    <h2 className="text-xl md:text-3xl font-extrabold mb-3 mt-2"> Easy Onboarding </h2>
                    <p className="text-base md:text-2xl font-normal">Schedule a free consult session with our core team, walk us through your needs and you&apos;re good to go. </p>
                </div>
                <div className="text-center flex flex-col justify-center md:w-72 h-44 md:h-96 px-10 rounded md:shadow-xl mt-2 mb-6">
                    <h2 className="text-xl md:text-3xl font-extrabold mb-3"> Specialized Search </h2>
                    <p className="text-base md:text-2xl font-normal">Technical recruiters that can tech and culture align engineers and employers</p>
                </div>
                <div className="text-center flex flex-col justify-center md:w-72 h-44 md:h-96 px-10 rounded md:shadow-xl mt-2 mb-6">
                    <h2 className="text-xl md:text-3xl font-extrabold mb-3"> Custom Recruitment</h2>
                    <p className="text-base md:text-2xl font-normal">End to end recruitment support from sourcing, interviewing, onboarding, and tooling set up.</p>
                </div>   
            </div>
            <div className="mb-4 md:mb-28">
               < Button2/>
            </div>
        </div>
    )
}