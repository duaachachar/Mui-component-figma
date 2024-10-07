import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css';
import Header from './Mui-component/Header';
import HeroSection from "./Mui-component/HeroSection";

function App() {
  return (
   <div style={{backgroundColor:"#f5f5f5"}}>
   <Header/>
   <HeroSection/>

   </div>
  );
}

export default App;
