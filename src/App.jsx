import { useEffect, useState } from "react"
import LoadingScreen from "./components/LoadingScreen"
import MainMenu from "./components/MainMenu"
import RumusDanSifat from "./pages/RumusDanSifat"
import JaringJaring from "./pages/JaringJaring"

export default function App() {
  const [screen, setScreen] = useState("loading")

  useEffect(() => {
    const timer = setTimeout(() => setScreen("menu"), 2500)
    return () => clearTimeout(timer)
  }, [])

  if (screen === "loading") return <LoadingScreen />
  if (screen === "menu") return <MainMenu onSelect={setScreen} />
  if (screen === "rumus") return <RumusDanSifat onBack={() => setScreen("menu")} />
  if (screen === "jaring") return <JaringJaring onBack={() => setScreen("menu")} />
}
