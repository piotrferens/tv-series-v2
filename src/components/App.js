import React from "react";

import { inject, observer } from "mobx-react";

@inject("series")
@observer
export class App extends React.Component {
    componentDidMount() {
        this.props.series.loadSeries();
    }

    render() {
        return <div>{this.props.series.series.map(a => <p key={a.id}>{a.name}</p>)}</div>;
    }
}
