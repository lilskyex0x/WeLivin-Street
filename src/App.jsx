import { NavBar } from "./components/Navbar"
import { Hero } from "./components/Hero"
import { Feature } from "./components/Feature/feature"
import { Buy } from "./components/Buy"
import { CarCards } from "./components/carCard"
import carData from "./components/carCard/carData"

const App = () => {
    console.log(carData)
    return (
    <>
      <NavBar />
      <Hero />
      <Buy />
      <div className="underLine">_</div>
      <CarCards />
      <Feature />
      <h1>Welcome to JDM Bitch!</h1>
    </>
  )
}

export default App
