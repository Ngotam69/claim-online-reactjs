import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {

    };
}

class NotFound extends Component {
    render() {
        return (
            <div className="page-header body_container">
                <h1>404 - URL not found!</h1>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(NotFound);