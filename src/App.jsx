import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
function App() {

  return (
    <>
      <div className="bg-amber-50 min-h-screen px-4 py-3 flex flex-col gap-14 md:px-8 md:py-7 md:justify-between lg:px-6 lg:py-5">
        <Header />
        <Body />
        <Footer />
      </div>

    </>
  )
}

export default App
