import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';

class AuthedPage extends React.Component {
    componentDidMount() {
        this.props.dispatch(userActions.getAll());
    }

    render() {
        const { users } = this.props;
        return (
            <div class="row">
                <div id="disp" className="col">
                    <div className="m-4">
                        <h5>User List:</h5>
                        <br/>
                        {users.loading && <em>Loading users...</em>}
                        {users.error && <span className="text-danger">ERROR: {users.error}</span>}
                        {users.items &&
                                <div>
                                    <span>Page: {users.items.page} / {users.items.total_pages} </span>
                                    <span>Total: {users.items.per_page} / {users.items.total} </span>
                                    <ul class="list-group">
                                        {users.items.data.map((user, index) =>
                                            <li class="list-group-item" key={user.id}>
                                                <img src={user.avatar} alt="avatar"/>
                                                {user.first_name + ' ' + user.last_name}
                                            </li>
                                        )}
                                    </ul>
                                </div>
                        }
                        <br/>
                        <div>
                            <Link to="/" class="btn btn-primary float-right">Logout</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { users } = state;
    return {
        users
    };
}

const connectedAuthedPage= connect(mapStateToProps)(AuthedPage);
export { connectedAuthedPage as AuthedPage };
