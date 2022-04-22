import './App.css';
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import store from './Store';
import { Provider } from 'react-redux';
import Form from './Components/Form';
import NavigationBar from './Components/NavigationBar';

function App() {
  return (
    <>
    <NavigationBar/>
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Form} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
