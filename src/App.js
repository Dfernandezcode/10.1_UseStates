import './App.css';
import React from 'react';
import BankAccount from './components/BankAccount/BankAccount';
import Counter from './components/Counter/Counter';
import ImageSlider from './components/ImageSlider/ImageSlider';
import TeacherName from './components/TeacherName/TeacherName';
import ThunderObservatory from './components/ThunderObservatory/ThunderObservatory';
import Auction from './components/Auction/Auction';


function App() {

  //ImageArray and functions
const imagesOne = [
  "https://picsum.photos/id/204/400/200",
  "https://picsum.photos/id/1002/400/200",
  "https://picsum.photos/id/1003/400/200",
  "https://picsum.photos/id/1004/400/200",
  "https://picsum.photos/id/1005/400/200",
  "https://picsum.photos/id/999/400/200",
  "https://picsum.photos/id/998/400/200",
  "https://picsum.photos/id/997/400/200",
  "https://picsum.photos/id/996/400/200",
  "https://picsum.photos/id/995/400/200",
];

const imagesTwo = [
  "https://picsum.photos/id/237/400/200",
  "https://picsum.photos/id/802/400/200",
  "https://picsum.photos/id/815/400/200",
  "https://picsum.photos/id/803/400/200",
  "https://picsum.photos/id/884/400/200",
  "https://picsum.photos/id/885/400/200",
  "https://picsum.photos/id/886/400/200",
  "https://picsum.photos/id/887/400/200",
  "https://picsum.photos/id/888/400/200",
  "https://picsum.photos/id/889/400/200",
];


//ThunderArray and Functions
const [thunderList, setThunderList] = React.useState([new Date()]);

const addThunder = () => {
  const newThunderList = [...thunderList, new Date()];
  //no need for push, element added during creation.
  //newThunderList.push(new Date();)
  setThunderList(newThunderList);
}
  //Bidding
  const [auctionBid, setAuctionBid] = React.useState([0]);

  return (
    <div className="main-content">
      
      <h2>Auction list</h2>
      <ul>

      </ul>
        <Auction name= "Pedro wants to bid $5"></Auction>
        <Auction name= "Gonzalo wants to bid $5"></Auction>
        <Auction name= "Edu wants to bid $5"></Auction>
      <h2>Bank Account:</h2>
      <BankAccount></BankAccount>

      <h2>Thunder Observatory</h2>
      <ul>
        {thunderList.map(thunder => <li key={thunder.getTime}>{thunder.toString()}</li>)}
      </ul>
      <ThunderObservatory addThunder={addThunder} name="Madrid"></ThunderObservatory>
      <ThunderObservatory addThunder={addThunder} name="Barcelona"></ThunderObservatory>
      <ThunderObservatory addThunder={addThunder} name="Valencia"></ThunderObservatory>

      <h2 className="counter__title">Image Slider</h2>
      <Counter></Counter>

      <h2 className="greeting__title">Image Slider</h2>
      <TeacherName></TeacherName>

      <h2 className="image-slider__title">Image Slider</h2>
      <ImageSlider images={imagesOne}></ImageSlider>
      <ImageSlider images={imagesTwo}></ImageSlider>
      
    </div>
  );
}

export default App;
