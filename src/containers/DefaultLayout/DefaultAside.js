import React, { Component } from 'react';
import {Aside, Nav, NavItem, NavLink, Progress, TabContent, TabPane, ListGroup, ListGroupItem} from 'reactstrap';
import {Link} from 'react-router-dom';

import navs from '../../_nav';

class DefaultAside extends Component {

  // constructor(props) {
  //   super(props);
  //
  //   this.toggle = this.toggle.bind(this);
  //   this.state = {
  //     activeTab: '1',
  //   };
  // }
  //
  // toggle(tab) {
  //   if (this.state.activeTab !== tab) {
  //     this.setState({
  //       activeTab: tab,
  //     });
  //   }
  // }

  render() {

    // eslint-disable-next-line
    // const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
          <Link to="/" className="brand-link">
            <img src="/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3"  />
            <span className="brand-text font-weight-light">DC</span>
          </Link>

          <div className="sidebar">

            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
              <div className="image">
                <img src="/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
              </div>
              <div className="info">
                <a href="#" className="d-block">Alexander Pierce</a>
              </div>
            </div>

            <nav className="mt-2">
              <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                  {navs.items.map((nav,idx) => {
                      return  nav.title?
                          <li className="nav-header" key={idx}>{nav.name}</li>
                          :<li className="nav-item" key={idx}>
                                <Link to={nav.url} className="nav-link">
                                  <i className={"nav-icon fas "+ nav.icon}></i>
                                  <p>{nav.name}</p>
                                  </Link>
                            </li>
                  })}
              </ul>
            </nav>
          </div>
        </aside>
      </React.Fragment>
    );
  }
}

export default DefaultAside;
