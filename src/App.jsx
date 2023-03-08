import { PokeGrid } from "./components/home/PokeGrid";
import { DataProvider } from "./context/DataContext";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { PokeDetails } from "./components/details/PokeDetails";

function App() {

    const router = createBrowserRouter([
    {
        path:'/',
        element: <PokeGrid/>
    },
    {
        path:'/details',
        element: <PokeDetails />
    }
]);

  return (
    <DataProvider>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </DataProvider>
  );
}

export default App;
