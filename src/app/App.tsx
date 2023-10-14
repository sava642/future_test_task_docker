import "./styles/index.scss"
import { useTheme } from './theme/useTheme';
import classNames from 'classnames';
import { Switch } from 'shared/components/Switch/Switch';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import React from "react";


const MainPage = React.lazy(() => import('pages/MainPage'));
const CardDetailsPage = React.lazy(() => import('pages/CardDetailsPage'));


function App() {

  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app wrapper", {}, [theme])}>
      <Switch toggleTheme={toggleTheme} />
      <BrowserRouter basename='/future_test_task_docker'>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <MainPage />
              </Suspense>
            }
          />
          <Route
            path="/books/:bookId"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <CardDetailsPage />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;

