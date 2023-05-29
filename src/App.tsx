import { useTranslation } from "react-i18next";
import LayoutPage from "./components/user/layoutpage";
import Home from "./containers/user/Home";

function App() {
  const { t } = useTranslation();

  return (
    <LayoutPage>
      <Home />
    </LayoutPage>
  );
}

export default App;
