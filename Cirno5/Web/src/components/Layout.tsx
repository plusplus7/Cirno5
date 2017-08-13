import * as React from "react";
import Nav from './Nav';

export class Layout extends React.Component<undefined> {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <Nav />
                    </div>
                    <div className="col-md-9">
                    </div>
                </div>
            </div>
        );
    }
}
