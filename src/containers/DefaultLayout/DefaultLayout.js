import React, {lazy, Component, Suspense } from 'react';
import {Redirect, Route, Switch, withRouter} from 'react-router-dom';
import { Container } from 'reactstrap';

// sidebar nav config
import navigation from '../../_nav';
// routes config
import routes from '../../routes';
import DefaultAside from './DefaultAside';
import DefaultHeader from "./DefaultHeader";
import DefaultFooter from "./DefaultFooter";
// const DefaultAside = React.lazy(() => import('./DefaultAside'));
// const DefaultFooter = React.lazy(() => import('./DefaultFooter'));
// const DefaultHeader = React.lazy(() => import('./DefaultHeader'));

class DefaultLayout extends Component {

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  signOut(e) {
    e.preventDefault()
    this.props.history.push('/login')
  }

  render() {
    return (
        <div className="wrapper">
          <DefaultHeader />
          <DefaultAside />

          <div className="content-wrapper">
            <section className="content-header">
              <div className="container-fluid">
                <div className="row mb-2">
                  <div className="col-sm-6">
                    <h1>Blank Page</h1>
                  </div>
                  <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                      <li className="breadcrumb-item"><a href="#">Home</a></li>
                      <li className="breadcrumb-item active">Blank Page</li>
                    </ol>
                  </div>
                </div>
              </div>

            </section>

            <section className="content">
              <Switch>
                  {routes.map((route, idx) => {
                    console.log(route.component)
                      return route.component ? (
                          <Route
                              key={idx}
                              path={route.path}
                              exact={route.exact}
                              name={route.name}
                              render={props => (
                                  <route.component {...props} />
                              )} />
                      ) : (null);
                  })}
              </Switch>
            </section>
          </div>

          <DefaultFooter/>

          <aside className="control-sidebar control-sidebar-dark">
          </aside>
        </div>
    );
  }
}

export default withRouter(DefaultLayout);
