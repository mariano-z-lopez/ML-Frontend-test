import React from "react"
import {render} from "react-dom"
import "../styles/styles.sass"
import Button from "@material-ui/core/Button";

const App = () => {
    return (
        <>
            <h1>Hello from React</h1>
            <Button color="primary">Hello World</Button>
        </>
    )
};

render(<App/>, document.getElementById("app"));