import { useSelector } from "react-redux";
import Routes from "./Routes"
import { RootState } from "./store";
// import { RootState } from "../../../storey";

const App = () => {
  const language = useSelector((state: RootState) => state.language.language);

  return (
    <div className="" dir={language === "en" ? 'ltr' : 'rtl'}>
      <Routes />
    </div>
  )
}

export default App