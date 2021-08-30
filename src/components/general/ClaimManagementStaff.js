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

                <div className="panel panel-info">
                    <div className="panel-heading">
                        <h3 className="panel-title">Danh sách hồ sơ chờ xử lý</h3>
                    </div>
                    <div className="panel-body">

                        <div className="row">
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label>Từ ngày</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        name="txtNgayNhapvien"
                                        onChange={this.onHandleChange}
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <label>Đến ngày</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        name="txtNgayNhapvien"
                                        onChange={this.onHandleChange}
                                    />
                                </div>
                            </div>
                            <div className="col-sm-10">
                                <button type="submit" className="btn btn-primary">Tìm kiếm</button>
                            </div>
                        </div>
                        <br />
                        <br />
                        <br />

                        <table className="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Chọn</th>
                                    <th>Số thứ tự</th>
                                    <th>Số thẻ</th>
                                    <th>Loại hình</th>
                                    <th>Tên khách</th>
                                    <th>Ngày khám</th>
                                    <th>Số tiền y/c</th>
                                    <th>Thao tác</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><input type="checkbox" /></td>
                                    <td>1</td>
                                    <td>21/P/123456789</td>
                                    <td>Nội trú</td>
                                    <td>Nguyễn Văn A</td>
                                    <td>12/08/2021</td>
                                    <td>5 000 000 đ</td>
                                    <td>
                                        <button type="button" className="btn btn-primary">Xem</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" /></td>
                                    <td>2</td>
                                    <td>21/P/123456789</td>
                                    <td>Ngoại trú</td>
                                    <td>Nguyễn Văn A</td>
                                    <td>12/08/2021</td>
                                    <td>5 000 000 đ</td>
                                    <td>
                                        <button type="button" className="btn btn-primary">Xem</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" /></td>
                                    <td>3</td>
                                    <td>21/P/123456789</td>
                                    <td>Ngoại trú</td>
                                    <td>Nguyễn Văn A</td>
                                    <td>12/08/2021</td>
                                    <td>5 000 000 đ</td>
                                    <td>
                                        <button type="button" className="btn btn-primary">Xem</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" /></td>
                                    <td>4</td>
                                    <td>21/P/123456789</td>
                                    <td>Ngoại trú</td>
                                    <td>Nguyễn Văn A</td>
                                    <td>12/08/2021</td>
                                    <td>5 000 000 đ</td>
                                    <td>
                                        <button type="button" className="btn btn-primary">Xem</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" /></td>
                                    <td>5</td>
                                    <td>21/P/123456789</td>
                                    <td>Ngoại trú</td>
                                    <td>Nguyễn Văn A</td>
                                    <td>12/08/2021</td>
                                    <td>5 000 000 đ</td>
                                    <td>
                                        <button type="button" className="btn btn-primary">Xem</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" /></td>
                                    <td>6</td>
                                    <td>21/P/123456789</td>
                                    <td>Ngoại trú</td>
                                    <td>Nguyễn Văn A</td>
                                    <td>12/08/2021</td>
                                    <td>5 000 000 đ</td>
                                    <td>
                                        <button type="button" className="btn btn-primary">Xem</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <div className="row">
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label>Chọn cán bộ chuyển</label>
                                    <select name="txtNoikham" className="form-control" required="required">
                                    <option value={0}>Nguyễn Lan Hương</option>
                                    <option value={1}>Phan Sỹ Lương</option>
                                    <option value={2}>Vũ Ngọc Hưng</option>
                                    <option value={3}>Vũ Khương Thụy</option>
                                </select>
                                </div>
                            </div>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <div className="col-sm-10">
                                <button type="submit" className="btn btn-primary">Confirm</button>
                            </div>
                        </div>

                    </div>

                    
                </div>


            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(ClaimManagementStaff);