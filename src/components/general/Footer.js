import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {

    };
}

class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="footer">
                    <div className="container">
                        <p className="text-muted">Văn phòng CSKH bảo hiểm PVI</p>
                    </div>
                </footer>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(Footer);