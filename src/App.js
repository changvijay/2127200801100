//import logo from './logo.svg';
import './App.css';


const url1 = "http://104.211.219.98/train/trains";
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODgxMzc5MjIsImNvbXBhbnlOYW1lIjoidmlqYXkiLCJjbGllbnRJRCI6IjhmYTE2M2JjLTBlMGEtNGM2MS1iZTcyLWMwMjhhYmU3Yzk0MiIsIm93bmVyTmFtZSI6IiIsIm93bmVyRW1haWwiOiIiLCJyb2xsTm8iOiIxMDAwMDAwIn0.Lork6Ft0maVSh9RgKz1xs79UfkjAMjG1f_KSy1CtvKg";
// resolve: {
//   fallback: {
//     path: require.resolve('path-browserify')
//   }
// }


// resolve: {
//   fallback: {
//     path: false
//   }
// }

let time ;
fetch(url1, {
  headers: {
    Authorization: `Bearer ${token}`
  }
})
  .then(response => {
    console.log('Response status:', response.status);
    return response.json();
  })
  .then(data => {
    // Handle the response data
    time = data;
  })
  .catch(error => {
    // Handle any errors
    console.error(error);
  });



function App() {
  return (
    <pre>
    {JSON.stringify(time, null, 2)}
  </pre>
  );
}

export default App;
