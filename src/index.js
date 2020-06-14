import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App'
import { BrowserRouter } from 'react-router-dom';
import ErrorBoundary from './hoc/ErrorBoundary'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './reducer/rootReducer'

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
