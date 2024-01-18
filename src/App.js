import "./App.css";
import Footer from "./components/Footer/Footer";
import Join from "./components/Join/Join";
import LandingPage from "./components/LandingPage/LandingPage";
import Plans from "./components/Plans/Plans";
import Programs from "./components/Programs/Programs";
import Reasons from "./components/Reasons/Reasons";
import ShopMini from "./components/ShopMini/ShopMini";
import Testimonials from "./components/Testimonials/Testimonials";
import {Link} from 'react-scroll'


function App() {
  return (
    <>
      <div className="App">
        <LandingPage />
        <Programs />
        <Reasons />
        <ShopMini/>
        <Plans/>
        <Testimonials/>
        <Join/>
        <Footer/>
     
        {/* scroll to top btn */}
        <div>
          <Link 
                className="topShortcut"
                to="landingPage"
                spy="true"
                smooth="true"
                ><i class="fa-solid fa-arrow-up"></i></Link>
        </div>
        
      </div>
    </>
  );
}

export default App;
