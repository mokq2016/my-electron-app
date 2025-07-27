import React, { Suspense } from 'react';
import './reset.css';
import './App.css';
import './assets/iconfont/iconfont.css';
import Header from './components/header';
import FooterBar from './components/footer-bar';
import Menu from './components/menu';
import { HashRouter  as Router, Routes, Route } from 'react-router-dom';
import routes from './routes';
import { LayoutProvider, useLayout } from './context/LayoutContext';

const App: React.FC = () => {

  return (
    <LayoutProvider>
      <Router>
        <AppContent />
      </Router>
    </LayoutProvider>
  );
};
function renderRoutes(routes: any[]) {
  return routes.map(route => {
    if (route.children) {
      return (
        <Route key={route.path} path={route.path} element={route.element}>
          {renderRoutes(route.children)}
        </Route>
      );
    }
    return (
      <Route key={route.path} path={route.path} element={route.element} />
    );
  });
}
const AppContent: React.FC = () => {
  const { showFooter } = useLayout();
  const footerHeight = showFooter ? 100 : 0;
  return (

    <div style={{ height: '100%' }}>
      <Header />
      <main style={{ height: `calc(100% - 90px - ${footerHeight}px)`, display: 'flex' }}>
        <Menu />
        <div className="app-content" style={{ flex: 1 }}>
          <Suspense fallback={<div>加载中...</div>}>
            <Routes>
              {renderRoutes(routes)}
            </Routes>
          </Suspense>
        </div>
      </main>
      {showFooter && <FooterBar />}
    </div>
  );
};
export default App;
