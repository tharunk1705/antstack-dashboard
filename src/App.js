import Base from "./layout/Base";
import Dashboard from "./pages/Dashboard";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <Base>
      <Dashboard />
      <Toaster position="top-center" reverseOrder={false} />
    </Base>
  );
};

export default App;
