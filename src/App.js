import './App.css';
import Header from "./components/header"
import Item from './components/item'
import Accessories from './assets/Desktop-Accessories.jpg'
import Model3 from './assets/Desktop-Model3.jpeg'
import ModelS from './assets/Desktop-ModelS.jpeg'
import ModelY from './assets/Desktop-ModelY.jpeg'
import ModelX from './assets/Desktop-ModelX.jpeg'
import SolarPanels from './assets/Desktop-SolarPanels.jpeg'
import SolarRoofs from './assets/Desktop-SolarRoof.jpeg'


function App() {
  return (
    <div className="App">
      
          <Header/>
          <div className = "app_itemContainer">

            <Item 
              title = 'Model S'
              desc = '401 Unauthorized'
               backgroundImg = {ModelS}
               leftBtnTxt = 'Custom Order'
               leftBtnlink = '#'
               rightBtnTxt ='Learn More'
               rightBtnlink = '#'
               twoButtons = {true}
               first
                
            />

            <Item 
              title = 'Model 3'
              desc = '402 Payment Required'
              backgroundImg = {Model3}
               leftBtnTxt = 'Custom Orders'
               leftBtnlink = '#'
               rightBtnTxt ='Learn More'
               rightBtnlink = '#'
               twoButtons = {true}
               
            />

            <Item 
              title = 'Model X'
              desc = '403 Forbidden"'
               backgroundImg = {ModelX}
               leftBtnTxt = 'Custom Orders'
               leftBtnlink = '#'
               rightBtnTxt ='Learn More'
               rightBtnlink = '#'
               twoButtons = {true}
               
            />

            <Item 
              title = 'Model Y'
              desc = '404 Not Found'
               backgroundImg = {ModelY}
               leftBtnTxt = 'Custom Orders'
               leftBtnlink = '#'
               rightBtnTxt ='Learn More'
               rightBtnlink = '#'
               twoButtons = {true}
                
            />

            <Item 
              title = ' Solar Panels'
              desc = 'unm4sk-pt1.tc'
               backgroundImg = {SolarPanels}
               leftBtnTxt = 'Order Now'
               leftBtnlink = '#'
               rightBtnTxt ='Learn More'
               rightBtnlink = '#'
               twoButtons = {true}
                
            
            />

            <Item 
              title = 'Solar Roof'
              desc = 'unm4sk-pt2.tc'
               backgroundImg = {SolarRoofs}
               leftBtnTxt = 'Order Now'
               leftBtnlink = '#'
               rightBtnTxt ='Learn More'
               rightBtnlink = '#'
               twoButtons = {true}
               
            />

            <Item 
              title = 'Accessories'
              desc = '_h1dden-pr0cess.axx'
               backgroundImg = {Accessories}
               leftBtnTxt = 'Custom Orders'
               leftBtnlink = '#'
               rightBtnTxt ='Learn More'
               rightBtnlink = '#'
               twoButtons = {false}
               
            />


          </div>

    </div>
  );
}

export default App;
