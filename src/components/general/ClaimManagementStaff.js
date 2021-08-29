import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {

    };
}

class ClaimManagementStaff extends Component {
    render() {
        return (
            <div className="container body_container">
                <div className="page-header">
                    <h1>123456</h1>
                </div>
                <p className="lead">Pin a fixed-height footer to the bottom of the viewport in desktop browsers with this custom HTML and CSS. A fixed navbar has been added with <code>padding-top: 60px;</code> on the <code>body &gt; .container</code>.</p>
                <p>Back to <a href="../sticky-footer/">the default sticky footer</a> minus the navbar.</p>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(ClaimManagementStaff);