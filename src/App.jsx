import { PokeGrid } from "./components/home/PokeGrid";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { PokeDetails } from "./components/details/PokeDetails";
import { Provider } from 'react-redux'

function App() {

    const router = createBrowserRouter([
    {
        path:'/',
        element: <PokeGrid/>
    },
    {
        path:'/details/:id',
        element: <PokeDetails />
    }
]);

  return (
      <div className="App">
        <RouterProvider router={router} />
      </div>
  );
}

export default App;
