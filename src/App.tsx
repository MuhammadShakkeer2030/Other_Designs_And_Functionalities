import { FC } from "react";
import { Header,Onam,Onam2,Onam3,TrainDesign, VegDesign } from "./path";
import { Routes, Route } from "react-router-dom";

const App: FC = () => (
  <div className="w-[80%] m-auto ">
    <h1 className="text-3xl font-bold text-center underline">Other designs & Functionalities</h1>
    <Header/>
    <Routes>
      {/* <Route path="/" element={} /> */}
      <Route path="/train" element={<TrainDesign />} />
      <Route path="/veg" element={<VegDesign />} />
      <Route path="/onam" element={<Onam />} />
      <Route path="/onam2" element={<Onam2 />} />
      <Route path="/onam3" element={<Onam3 />} />
    </Routes>
    {/* image gradient */}
  </div>
);

export default App;
