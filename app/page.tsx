import { Present } from "./components/present"
import RollingText from "./components/rolling-text"

export default function Home() {
  return (
    <div className="mt-32 flex min-h-screen flex-col items-center">
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
    </div>
  )
}
