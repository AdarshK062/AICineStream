import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Body from './components/Body';
import Login from './components/Login';
import './index.css';
import Browse from './components/Browse';

function App() {
  const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<Body />,
        children: [
          {
            path:"/",
            element:<Login/>
          },{
            path:"/browse",
            element:<Browse/>,
            errorElement:<Login/>
          }
        ]
    }
])
  return (
    <RouterProvider router={appRouter } />
  );
}

export default App;
