import Cmp1 from "./components/Cmp1/Cmp";
import Cmp2 from "./components/Cmp2/Cmp";
import Cmp3 from "./components/Cmp3/Cmp";

const App = () => {
  return (
    <RightSide />
  );
};

const RightSide = () => {
  return(
    <div className="flex flex-col bg-zinc-800 divide-slate-500 divide-y">
      <Cmp1 />
      <Cmp2 />
      <Cmp3 />
    </div>
  )
}

export default App;
