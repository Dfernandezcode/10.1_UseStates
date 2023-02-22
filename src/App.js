import './App.css';
import BankAccount from './components/BankAccount/BankAccount';
import Counter from './components/Counter/Counter';
import ImageSlider from './components/ImageSlider/ImageSlider';
import TeacherName from './components/TeacherName/TeacherName';

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
  "https://picsum.photos/id/801/400/200",
  "https://picsum.photos/id/803/400/200",
  "https://picsum.photos/id/884/400/200",
  "https://picsum.photos/id/885/400/200",
  "https://picsum.photos/id/886/400/200",
  "https://picsum.photos/id/887/400/200",
  "https://picsum.photos/id/888/400/200",
  "https://picsum.photos/id/889/400/200",
];

function App() {
  return (
    <div className="main-content">
      <h2>Bank Account:</h2>
      <BankAccount></BankAccount>
      
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
