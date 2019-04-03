import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../_helpers';
import { alertActions } from '../_actions';
import { IndexPage } from '../IndexPage';
import { AuthedPage } from '../AuthedPage';

class App extends React.Component {
    constructor(props) {
        super(props);

        const { dispatch } = this.props;
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }

    render() {
        const { alert } = this.props;
        return (
            <div className="container">
                <div id="disp" className="col">
                    {alert.message &&
                            <div className={`alert ${alert.type}`}>{alert.message}</div>
                    }
                </div>
                <Router history={history}>
                    <div>
                        <Route exact path="/" component={IndexPage} />
                        <Route path="/authed" component={AuthedPage} />
                    </div>
                </Router>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App }; 
