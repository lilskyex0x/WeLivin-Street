import { NavBar } from "./components/Navbar"
import { Hero } from "./components/Hero"
import { Feature } from "./components/Feature/feature"
import { Buy } from "./components/Buy"
import { CarCard } from "./components/carCard/index"
import carData from "./components/carCard/carData"

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Buy />
      <div className="carCard">
        {carData.map(car => (
          <CarCard
            key={car.id}
            image={car.image}
            id={car.id} // Add all the required props here
            name={car.name}
            price={car.price}
            totalSale={car.totalSale}
            rating={car.rating}
            timeLeft={car.timeLeft}
          />
        ))}
      </div>
      <Feature />
      <h1>Welcome to JDM Bitch!</h1>
    </>
  )
}

export default App
