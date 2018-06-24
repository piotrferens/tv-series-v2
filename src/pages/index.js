import React from "react";
import axios from "axios";
import { configure } from "mobx";
import { Provider } from "mobx-react";

import { App } from "../components/App";
import { series } from "../stores";

configure({ enforceActions: true });

const stores = {
    series,
};

export default () => (
    <Provider series={series}>
        <App />
    </Provider>
);
