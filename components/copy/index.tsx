import Button2 from "../UI/button2";

export default function Copy() {
    return (
        <div className="z-10 w-screen relative bg-white text-black">
            <div className="text-left py-28 px-3 md:px-16 lg:px-28 max-w-6xl">
                <h1 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold">We take hiring off the hands of Web3 security teams.</h1>
            </div>
            <div className="px-3 md:px-16 lg:px-28">
                <video autoPlay loop muted>
                <source src="/glitch.mp4"/>
                </video>
            </div>
            <div className="flex flex-col justify-center items-center md:flex-row lg:space-x-10 pt-5 md:pt-20">
                <div className="text-center flex flex-col justify-center md:justify-start md:w-72 lg:w-96 h-44 md:h-[500px] px-10 rounded md:shadow-xl md:pt-10 pb-6">
                    <h2 className="text-xl md:text-3xl font-extrabold mb-3"> Easy Onboarding </h2>
                    <p className="text-base md:text-2xl font-normal">Schedule a free consult session with our core team, walk us through your needs and you&apos;re good to go. </p>
                </div>
                <div className="text-center flex flex-col justify-center md:justify-start md:w-72 lg:w-96 h-44 md:h-[500px] px-10 rounded md:shadow-xl md:pt-10 pb-6">
                    <h2 className="text-xl md:text-3xl font-extrabold mb-3"> Specialized Search </h2>
                    <p className="text-base md:text-2xl font-normal">Technical recruiters that can tech and culture align engineers and employers</p>
                </div>
                <div className="text-center flex flex-col justify-center md:justify-start md:w-72 lg:w-96 h-44 md:h-[500px] px-10 rounded md:shadow-xl md:pt-10 pb-6">
                    <h2 className="text-xl md:text-3xl font-extrabold mb-3"> Custom Recruitment</h2>
                    <p className="text-base md:text-2xl font-normal">End to end recruitment support from sourcing, interviewing, onboarding, and tooling set up.</p>
                </div>   
            </div>
            <div className="md:mb-28 pt-5 md:pt-20">
               < Button2/>
            </div>
        </div>
    )
}