

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Components/About/About";
import NavFooter from "./Components/Template/NavFooter";
import Gallery from "./Pages/Gallery";
import ContactPage from "./Pages/ContactPage";
import DonationPage from "./Pages/DonationPage"
import MerchandisePage from "./Pages/MerchandisePage";

import styles from "./App.module.css";

function App() {
  const router = createBrowserRouter(
    [
      {
        path: '/', element: <NavFooter />,
        children: [
          { path: '/', element: <Home /> },
          { path: 'about', element: <About /> },
          { path: 'gallery', element: <Gallery /> },
          { path: 'contact', element: <ContactPage /> },
          { path: 'donation', element: <DonationPage /> },
          { path: 'merchandise', element: <MerchandisePage /> },
        ]
      },

    ]
  )
  return (
    <RouterProvider router={router} />
  );
}

export default App;
