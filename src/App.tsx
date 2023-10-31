import { MantineProvider } from "@mantine/core";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/globals/Layout";
import { AppRoutes } from "./pages/routes";
import "./global.css";
import "@mantine/carousel/styles.css";
import "@mantine/core/styles.css";
function App() {
  return (
    <MantineProvider>
      <BrowserRouter>
        <Layout>
          <AppRoutes />
        </Layout>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
