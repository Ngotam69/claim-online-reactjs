import React, { Component } from 'react';
import { connect } from 'react-redux';
import ClaimDocumentItem from './ClaimDocumentItem';
import { searchDataPolicyRequest } from './../../actions/ClaimDeclarationAction'

function mapStateToProps(state) {
    return {
        ClaimState: state.ClaimState
    };
}

function mapDispatchToProps(dispatch, props) {
    return {
        searchDataPolicyDone: () => {
            dispatch(searchDataPolicyRequest());
        },
        logout: () => {
            dispatch(logout());
        },
        login: () => {
            dispatch(login());
        }
    };
}

class ClaimDeclaration extends Component {
    onHandleChange = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name] : value
        });
    }

    onHandleSearch = (event) => {
        event.preventDefault();
        this.props.searchDataPolicyDone();
    }

    onHandleSubmit = (event) => {
        event.preventDefault();
    }

    showDocumentItems(documentList) {
        let result = null;
        if (documentList !== undefined && documentList.length > 0) {
            result = documentList.map((documentItem, index) => {
                return (
                    <ClaimDocumentItem
                        key={index}
                        documentItem={documentItem}
                        index={index}
                    />
                );
            });
        }
        return result;
    }

    render() {
        let { ClaimState } = this.props;
        return (
            <div className="container body_container">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3 className="panel-title">Tạo mới khai báo tổn thất</h3>
                    </div>
                    <div className="panel-body">
                        <form onSubmit={this.onHandleSearch}>
                            <div className="form-group">
                                <label>Nhập số thẻ:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="txtSothe"
                                    // value={ClaimState.txtSothe || ''}
                                    onChange={this.onHandleChange}
                                />
                            </div>
                            <div className="col-sm-10">
                                <button type="submit" className="btn btn-primary">Tìm kiếm</button>
                            </div>
                        </form>
                    </div>
                </div>


                <div className="panel panel-success">
                    <div className="panel-heading">
                        <h3 className="panel-title">Thông tin khai báo bồi thường</h3>
                    </div>
                    <div className="panel-body">

                        <form onSubmit={this.onHandleSubmit}>
                            <div className="form-group">
                                <table className="table table-hover">
                                    <tbody>
                                        <tr>
                                            <td>Tên người được bảo hiểm</td>
                                            <td>{ClaimState.txtHoten}</td>
                                        </tr>
                                        <tr>
                                            <td>Ngày sinh</td>
                                            <td>{ClaimState.txtNgaysinh}</td>
                                        </tr>
                                        <tr>
                                            <td>Đơn vị tham gia bảo hiểm</td>
                                            <td>{ClaimState.ten_khach}</td>
                                        </tr>
                                        <tr>
                                            <td>Số thẻ</td>
                                            <td>{ClaimState.txtSothe}</td>
                                        </tr>
                                        <tr>
                                            <td>Ngày đầu</td>
                                            <td>{ClaimState.txtNgay_dau}</td>
                                        </tr>
                                        <tr>
                                            <td>Ngày cuối</td>
                                            <td>{ClaimState.txtNgay_cuoi}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="row">
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label>Loại hình khám</label>
                                        <select name="txtLoaihinh" className="form-control" required="required">
                                            <option value={0}>Ngoại trú</option>
                                            <option value={1}>Nội trú</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label>Nơi khám</label>
                                        <select name="txtNoikham" className="form-control" required="required">
                                            <option value={0}>Bệnh viện SaintPaul</option>
                                            <option value={1}>Bệnh viện Vinmec</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label>Ngày khám</label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            name="txtNgaykham"
                                            onChange={this.onHandleChange}
                                        />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label>Ngày nhập viện</label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            name="txtNgayNhapvien"
                                            onChange={this.onHandleChange}
                                        />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-12">
                                        <label>Hậu quả</label>
                                        <textarea name="txtHauqua" className="form-control" rows="2" required="required"></textarea>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label>Số tiền yêu cầu</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            name="txtSotien"
                                            onChange={this.onHandleChange}
                                        />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label>Kiểu thanh toán</label>
                                        <select name="txtKieuThanhToan" className="form-control" required="required">
                                            <option value={0}>Chuyển khoản</option>
                                            <option value={1}>Tiền mặt</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label>Số tài khoản</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="txtSoTKNH"
                                            onChange={this.onHandleChange}
                                        />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label>Ngân hàng và địa chỉ</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="txtNganhang"
                                            onChange={this.onHandleChange}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <h4>Quý khách vui lòng bổ sung danh mục chứng từ bồi thường để hoàn thành khai báo</h4>
                            </div>
                            <div className="form-group">
                                <button type="button" className="btn btn-success">Thêm mới chứng từ</button>
                                <table className="table table-bordered table-hover table-striped">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Tên chứng từ</th>
                                            <th>File đính kèm</th>
                                            <th>Thao tác</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.showDocumentItems(ClaimState.documentList)}
                                    </tbody>
                                </table>

                            </div>

                            <div className="row">
                                <div className="form-row">
                                    <div className="form-group col-md-12">
                                        <div className="checkbox">
                                            <label>
                                                <input
                                                    type="checkbox"
                                                    name="checkAgreement"
                                                    value={true}
                                                    onChange={this.onHandleChange} />
                                                Tôi cam kết các thông tin trên đây là chính xác và đồng ý để bảo hiểm PVI kiểm tra và xác minh các thông tin đồng thời được quyền tiếp xúc với bác sỹ hoặc/và bên thứ 3
                                            </label>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-sm-10">
                                <button type="submit" className="btn btn-primary">Xác nhận</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClaimDeclaration);