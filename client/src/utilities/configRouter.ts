import React from 'react';
import Cookie from 'js-cookie';
import { RouteProps, Route, Redirect } from 'react-router-dom';

interface PrivateRouteProps extends RouteProps {
    path: string;
    exact: boolean;
    component: any;
}

const ConfigRouter: React.FC<PrivateRouteProps> = ({...props}) => {
      Cookie.get('jid') ? React.createElement(Redirect, { to: "/project" }) : React.createElement(Route, Object.assign({}, props));

    
};


export default ConfigRouter;



