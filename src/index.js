// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Router>
//       <Routes>
//         {/* * because there is nested routes in the app */}
//       <Route path='/*' element={<App/>}/>
//       </Routes>
      
//     </Router>
    
//   </React.StrictMode>
// );

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {StoreProvider} from 'easy-peasy';
import store from './store';

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <Router>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </Router>
    </StoreProvider>
    
  </React.StrictMode>,
  document.getElementById('root')
);