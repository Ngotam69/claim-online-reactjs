import React, { Component } from 'react';

class ClaimDocumentItem extends Component {
    render() {
        let { documentItem, index } = this.props;
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{documentItem.typeName}</td>
                <td>{documentItem.fileName}</td>
                <td>
                    <button type="button" className="btn btn-primary">Xem</button>&nbsp;
                    <button type="button" className="btn btn-warning">Sửa</button>&nbsp;
                    <button type="button" className="btn btn-danger">Xóa</button>
                </td>
            </tr>
        );
    }
}

export default ClaimDocumentItem;