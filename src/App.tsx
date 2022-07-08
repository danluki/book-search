import React from "react";
import { Route, Routes } from "react-router-dom";
import Bookshelf from "./components/Bookshelf";
import FullBook from "./components/FullBook";
import Header from "./components/Header";
import MainLayout from "./components/MainLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout/>}>
        <Route path="" element={<Bookshelf/>}/>
        <Route path="/book/:id" element={<FullBook/>}/>
        <Route
          path="/*"
          element={
            <React.Suspense fallback={<div>Загрузка...</div>}>
              <div>Не найдено</div>
            </React.Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
