import { PokeGrid } from "./components/home/PokeGrid";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { PokeDetails } from "./components/details/PokeDetails";
import { Provider } from 'react-redux'
import store from './store'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <PokeGrid />
    },
    {
      path: '/details/:id',
      element: <PokeDetails />
    }
  ]);

  return (
    <Provider store={ store }>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </Provider>
  );
}

export default App;
