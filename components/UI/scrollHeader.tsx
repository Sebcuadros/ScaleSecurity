export default function ScrollHeader() {
    return<div>
        <div className="scroll-parent py-3 px-3 my-4 hidden sm:block">
            <div className="scroll-element primary overflow-hidden text-clip font-black text-neutral-100">SCALE SECURITY CONNECT WITH WEB3 SECURITY EXPERTS</div>
            <div className="scroll-element secondary overflow-hidden text-clip font-black text-neutral-100">SCALE SECURITY CONNECT WITH WEB3 SECURITY EXPERTS</div>
        </div>
        <div className="scroll-parent-mobile py-3 my-4 sm:hidden">
            <div className="scroll-element primary text-clip font-black text-neutral-100 text-l">&nbsp;WEB3 SECURITY HIRES</div>
            <div className="scroll-element secondary text-clip font-black text-neutral-100 text-l">&nbsp;WEB3 SECURITY HIRES</div>
        </div>
    </div>
}