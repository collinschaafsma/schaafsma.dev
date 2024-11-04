import { ModeToggle } from "./components/mode-toggle"
import { Present } from "./components/present"
import RollingText from "./components/rolling-text"

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col items-center pt-32">
      <Present duration={1} y={20}>
        <h1 className="font-sans text-4xl md:text-6xl">Collin Schaafsma</h1>
      </Present>
      <Present duration={1} y={12} delay={0.5}>
        <div className="mt-1 flex w-[134px] gap-1">
          <div className="w-fit">
            <span>I build</span>
          </div>
          <RollingText
            words={[
              "products",
              "companies",
              "teams",
              "software",
              "frontends",
              "backends",
            ]}
          />
        </div>
      </Present>
      <div className="absolute bottom-4 right-4">
        <ModeToggle />
      </div>
    </div>
  )
}
