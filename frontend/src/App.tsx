import { Toaster } from "react-hot-toast"
import Header from "./components/Header"
import SalesCard from "./components/SalesCard"


function App() {
  return (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false} />
      <Header />
      <main>
        <section id="sales">
          <div className="dsmeta-container">
            <SalesCard />
          </div>
        </section>
      </main>
    </>
  )
}

export default App
