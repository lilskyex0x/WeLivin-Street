import { NavBar } from "./components/Navbar"
import { Hero } from "./components/Hero"
import { Feature } from "./components/Feature/feature"
import { Buy } from "./components/Buy"
const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Buy />
      <Feature />
      <h1>Welcome to JDM Bitch!</h1>
    </>
  )
}

export default App
