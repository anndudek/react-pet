import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./components/MainLayout";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";

function App() {
  //return <MainLayout />;
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/forbidden" element={<div>forbidden</div>}></Route>
          <Route path="/addquestion" element={<div>addQuestion</div>}></Route>
          <Route path="/question/:id" element={<div>Question Page</div>}></Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
