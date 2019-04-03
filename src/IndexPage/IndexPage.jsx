import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';

class IndexPage extends React.Component {
    constructor(props) {
        super(props);

        // reset login status
        this.props.dispatch(userActions.logout());

        this.state = {
            username: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password } = this.state;
        const { dispatch } = this.props;
        if (username && password) {
            dispatch(userActions.login(username, password));
        }
    }

    render() {
        const { username, password, submitted } = this.state;
        return (
            <div className="row">
                <div className="col" id="register">
                    <div className="mx-4 my-5">
                        <h5>Welcome to the Tasmanian Government Online Application Service for
                            international students</h5>
                        <p>Internatinal applicants for Tasmanian Government Schools and TasTAFE
                            should apply here. Applications will be processed by Government
                            Education and Training Internatinal(GETI).</p>
                        <p>Registered users can save and submit applications to their chosen
                            courses, and submit enquiries directly lto GETI.</p>
                        <br/>
                        <br/>
                        <br/>
                        <div>
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <br/>
                        <Link to="/about">Technical Support | Contact us</Link>
                    </div>
                </div>
                <div className="col" id="login">
                    <div className="mx-4 my-5">
                        <form name="form" onSubmit={this.handleSubmit}>
                            <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                                <label htmlFor="username">Email address</label>
                                <input type="text" className="form-control" name="username" value={username} onChange={this.handleChange} />
                                {submitted && !username &&
                                        <div className="help-block">Username is required</div>
                                }
                            </div>
                            <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} />
                                {submitted && !password &&
                                        <div className="help-block">Password is required</div>
                                }
                            </div>
                            <div className="form-group">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <Link to="/update">I have forgotten my password</Link>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {}

const connectedIndexPage = connect(mapStateToProps)(IndexPage);
export { connectedIndexPage as IndexPage }; 

