import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Router/Router';


function App() {
  return (
    <div className='container' >
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
