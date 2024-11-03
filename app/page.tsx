import { Present } from "./components/present"

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Present duration={1} y={20}>
        <h1 className="font-sans text-6xl">Collin Schaafsma</h1>
      </Present>
    </div>
  )
}
