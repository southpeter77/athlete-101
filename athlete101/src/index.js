import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from "./store/configureStore"
// import {ThemeProvider } from "@material-ui/core";

// const theme = createMuiTheme({
//   palette: {
//      primary: {
//         main: "#ff8f00" // This is an orange looking color
//                },
//      secondary: {
//         main: "#ffcc80" //Another orange-ish color
//                 }
//            }
// });

// const initial = {user:{token:{}, plan:[{}]}}

const store = configureStore();

ReactDOM.render(
  <React.StrictMode 
  // theme={theme}
  
  >
    {/* <ThemeProvider> */}
    <Provider store ={store}>
       <App />
    </Provider>
    {/* </ThemeProvider> */}
  </React.StrictMode>,
  document.getElementById('root')
);
