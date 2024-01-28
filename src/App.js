import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Body from './components/Body';
import Login from './components/Login';
import './index.css';
import Browse from './components/Browse';
import appStore from './utils/appStore';
import { Provider } from 'react-redux';

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
]);

  return (
    
    <Provider store={appStore}>
    <RouterProvider router={appRouter } />
    </Provider>
  );
}

export default App;
