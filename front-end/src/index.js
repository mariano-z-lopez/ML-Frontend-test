import React from "react"
import {render} from "react-dom"
import HomePage from "./layout/HomePage";
import "./style/MLGeneral.sass"
import {Provider} from "react-redux";
import {categoriesStore} from "./store";

render(
    <Provider store={categoriesStore}>
        <HomePage/>
    </Provider>,
    document.getElementById("app")
);