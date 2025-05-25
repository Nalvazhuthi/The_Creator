import "./style/main.scss"
import Home from "./pages/home"
import Partnerships from "./pages/partnerships"
import IllusionPage from "./pages/illusionPage"
import WhatWeDo from "./pages/whatWeDo"
import Strategy from "./pages/strategy"
import ReviewSection from "./pages/reviewSection"
import Charity from "./pages/charity"
import Footer from "./pages/footer"

const App = () => {
  return (
    <div className="content-container">
      <Home />
      <Partnerships />
      <IllusionPage />
      <WhatWeDo />
      <Strategy />
      <ReviewSection />
      <Charity />
      <Footer />
    </div>
  )
}

export default App