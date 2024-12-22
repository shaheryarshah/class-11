import Car from './components/page';

const cars = [
  {
    carImage: '/corola.jpg',
    carName: 'corola',
    carPrice: '$25,000',
    carReviews: '4.5/5',
  },
  {
    carImage: '/alto.jpg',
    carName: 'alto Accord',
    carPrice: '$24,000',
    carReviews: '4.7/5',
  },
  {
    carImage: '/santro.jpg',
    carName: 'santro',
    carPrice: '$35,000',
    carReviews: '4.8/5',
  },
  {
    carImage: '/mehran.jpg',
    carName: 'Mehram',
    carPrice: '$28,000',
    carReviews: '4.6/5',
  }
];

function App() {
  return (
    <div className="App">
          {cars.map((car, index) => (
        <Car
          key={index}
          carImage={car.carImage}
          carName={car.carName}
          carPrice={car.carPrice}
          carReviews={car.carReviews}
        />
      ))}
    </div>
  );
}

export default App;

   
  
