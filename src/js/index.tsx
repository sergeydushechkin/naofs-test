import * as React from "react";
import * as ReactDOM from "react-dom";
import {createStore, applyMiddleware, compose} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";

import JsonData from "./mock";
import {createAPI} from "./api";
import {reducer} from "./reducer/reducer";

import App from "./components/app";

const api = createAPI(JsonData);

const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        window[`__REDUX_DEVTOOLS_EXTENSION__`] ? window[`__REDUX_DEVTOOLS_EXTENSION__`]() : (f) => f
    )
);

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
