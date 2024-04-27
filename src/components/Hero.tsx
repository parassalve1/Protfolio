
import HeroContent from "./HeroContent";


export default function Hero() {
  return (
    <div className="relative flex flex-col h-full w-full ">
      <video 
      muted
      loop
      autoPlay
      className="rotate-180 absolute left-0 top-[-340px] h-full w-full z-[1] object-cover"
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <HeroContent />
    </div>
  )
}
