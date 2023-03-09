export default function ScrollHeader() {
    return<div>
        <div className="scroll-parent py-3 px-3 my-4 hidden sm:block">
            <div className="scroll-element primary overflow-hidden text-clip font-black text-neutral-100">&nbsp;Sourcing, Recruiting, and Tool setup for <span className="text-lime-300">Web3</span> orgs</div>
            <div className="scroll-element secondary overflow-hidden text-clip font-black text-neutral-100">&nbsp;Sourcing, Recruiting, and Tool setup for <span className="text-lime-300">Web3</span> orgs</div>
        </div>
        <div className="scroll-parent-mobile py-3 my-4 sm:hidden">
            <p className="scroll-element primary text-clip font-black overflow-hidden text-neutral-100 text-l">&nbsp;End to end <span className="text-lime-300">Web3</span> recruiting</p>
            <p className="scroll-element secondary text-clip font-black overflow-hidden text-neutral-100 text-l">&nbsp;End to end <span className="text-lime-300">Web3</span> recruiting</p>
        </div>
    </div>
}