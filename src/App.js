import React, { Component } from 'react';
import Footer from './components/general/Footer';
import { BrowserRouter as Router, Route, NavLink, Link, Switch } from "react-router-dom";
import Routers from './Router';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <div>
                        <nav className="navbar navbar-default navbar-fixed-top">
                            <div className="container">
                                <div className="navbar-header">
                                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                        <span className="sr-only">Toggle navigation</span>
                                        <span className="icon-bar" />
                                        <span className="icon-bar" />
                                        <span className="icon-bar" />
                                    </button>
                                    <NavLink className="navbar-brand" to="/trang-chu">Claim online</NavLink>
                                </div>
                                <div id="navbar" className="collapse navbar-collapse">
                                    <ul className="nav navbar-nav">
                                        <li><NavLink activeClassName="active" exact to="/">Khai báo tổn thất</NavLink></li>
                                        <li><NavLink activeClassName="active" to="/quan-ly-boi-thuong-khach-hang">Danh sách chờ</NavLink></li>
                                        <li><NavLink activeClassName="active" to="/quan-ly-boi-thuong-nhan-vien">Danh sách đã nhận</NavLink></li>
                                        <li className="dropdown">
                                            <Link to="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Danh mục <span className="caret" /></Link  >
                                            <ul className="dropdown-menu">
                                                <li><NavLink activeClassName="active" to="/danh-muc-nhan-vien">Danh mục cán bộ</NavLink></li>
                                                <li><NavLink activeClassName="active" to="/danh-muc-quyen">Danh mục quyền hạn</NavLink></li>
                                                <li role="separator" className="divider" />
                                                <li className="dropdown-header">Người dùng</li>
                                                <li><NavLink activeClassName="active" to="/danh-muc-nguoi-dung">Danh mục người dùng</NavLink></li>
                                                <li><Link to="/dang-xuat">Log out</Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>{/*/.nav-collapse */}
                            </div>
                        </nav>
                    </div>
                    <Switch>
                        {this.generateRouter(Routers)}
                    </Switch>
                    <Footer />
                </div>
            </Router>
        );
    }

    generateRouter = (Routers) => {
        let result = null;
        if (Routers.length > 0) {
            result = Routers.map((route, index) => {
                return (
                    <Route
                        key={index}
                        exact={route.exact}
                        path={route.path}
                        component={route.main} />
                );
            });
        }
        return result;
    }
}

export default App;
