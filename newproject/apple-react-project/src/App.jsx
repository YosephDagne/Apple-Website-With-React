import Header from "./components/header/header";
import Mackbook from "./components/Mackbook/Mackbook";
import IPhone11_pro from "./components/Iphone11pro/IPhone11_pro";
import Iphone11 from "./components/iPhone 11/Iphone11";
import Watch from "./components/watch/Watch";
import AirPods from "./components/airPods/AirPods";
import Ipad from "./components/ipad/Ipad";

import Footer from "./components/Footer/Footer";
import "./components/css/style.css";
function App() {
  return (
    <>
      <Header />
      <Mackbook />
      <IPhone11_pro />
      <Iphone11 />
      <Watch />
      <AirPods />
      <Ipad/>
      <Footer />
    </>
  );
}

export default App;
