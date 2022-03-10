import Cmp1 from "./components/Cmp1/Cmp";
import Cmp2 from "./components/Cmp2/Cmp";

const App = () => {
  return (
    <div className="flex flex-col divide-slate-500 divide-y">
      <Cmp1 />
      <Cmp2 />
    </div>
  );
};

export default App;
