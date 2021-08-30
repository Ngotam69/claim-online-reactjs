import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {

    };
}

class ClaimManagement extends Component {
    render() {
        return (
            <div className="container body_container">

                <div className="panel panel-danger">
                    <div className="panel-heading">
                        <h3 className="panel-title">Thêm mới chứng từ đính kèm</h3>
                    </div>
                    <div className="panel-body">

                        <form action="" method="POST" role="form">
                            <div className="form-group">
                                <label for="">Chọn file</label>
                                <input type="file" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label>Loại tài liệu</label>
                                <select name="txtNoikham" className="form-control" required="required">
                                    <option value={0}>Giấy yêu cầu</option>
                                    <option value={1}>Đơn thuốc</option>
                                    <option value={1}>Kết quả xét nghiệm</option>
                                    <option value={1}>Hóa đơn</option>
                                </select>
                            </div>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>

                    </div>
                </div>

            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(ClaimManagement);