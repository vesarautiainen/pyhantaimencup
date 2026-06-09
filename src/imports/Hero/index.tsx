import imgImg87371 from "./334d900913ab30b6c0528bc378475bd0ed23edc6.png";

function Frame() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute content-stretch drop-shadow-[0px_0px_5px_rgba(0,0,0,0.8)] flex flex-col font-['Fraunces:SemiBold',sans-serif] font-semibold gap-[32px] items-start left-[calc(50%+0.5px)] text-center text-white top-1/2 w-[538px]">
      <p className="leading-[1.3] relative shrink-0 text-[34px] w-full" style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}>
        Pyhäjärven Taimen Cup 2026
      </p>
      <p className="leading-[1.8] relative shrink-0 text-[30px] w-full" style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}>
        15.6. - 31.10.2026
      </p>
    </div>
  );
}

export default function Hero() {
  return (
    <div className="bg-black relative size-full" data-name="Hero">
      <div className="-translate-x-1/2 absolute aspect-[1171/299.99993896484375] bottom-[-7.69%] flex items-center justify-center left-1/2 top-[-7.69%]" style={{ containerType: "size" }}>
        <div className="-scale-x-100 flex-none h-[100cqw] rotate-90 w-[100cqh]">
          <div className="relative size-full" data-name="IMG_8737 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-full left-[-85.58%] max-w-none top-0 w-[292.75%]" src={imgImg87371} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-gradient-to-b from-[46.154%] from-[rgba(0,0,0,0.3)] inset-0 to-[86.538%] to-[rgba(0,0,0,0)]" />
      <Frame />
    </div>
  );
}