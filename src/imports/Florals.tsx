import imgFloral61 from "figma:asset/b52af2471c2d5cbc4003d48c8f572a6e2f1b5928.png";
import imgFlorals51 from "figma:asset/85e435182000fe2a210dfa46faf61ec3049ba5d1.png";

export default function Florals() {
  return (
    <div className="relative size-full" data-name="florals">
      <div className="absolute h-[1024px] left-0 top-0 w-[1536px]" data-name="floral6 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgFloral61} />
      </div>
      <div className="absolute h-[1024px] left-0 top-[1024px] w-[1536px]" data-name="florals5 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgFlorals51} />
      </div>
    </div>
  );
}