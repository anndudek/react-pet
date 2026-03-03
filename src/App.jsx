import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./components/MainLayout";
import { HomePage } from "./pages/HomePage";

function App() {
  //return <MainLayout />;
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/forbidden" element={<div>forbidden</div>}></Route>
          <Route path="/addquestion" element={<div>addQuestion</div>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
