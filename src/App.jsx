import { NavBar } from "./components/Navbar"
import { Hero } from "./components/Hero"
import { Feature } from "./components/Feature/feature"
import { Buy } from "./components/Buy"
import { CarCard } from "./components/carCard/index"

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Buy />
      <CarCard />
      <Feature />
      <h1>Welcome to JDM Bitch!</h1>
    </>
  )
}

export default App
