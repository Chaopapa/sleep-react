import React,{Suspense} from 'react';
import './App.css';
import TabBar from "@/layout/tabBar/index";
import { BrowserRouter,Redirect } from "react-router-dom";
import renderRoute from "@/routes/renderRoute";
import routes from "@/routes"


const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<h1>(´・ω・｀)正在加载...</h1>}>
            <Redirect from="/" exact to="/home"></Redirect>
            {renderRoute(routes)}
        </Suspense>
        <TabBar />
      </BrowserRouter>
    </div>
  );
}

export default App;
