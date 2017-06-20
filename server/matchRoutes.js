import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter,browserHistory } from 'react-router-dom'
import { Provider } from 'react-redux';
import {createMemoryHistory} from 'history';
import configureStore from '../common/store/configureStore';
import App from '../common/components/App';
import renderFullPage from './serverHtml'
export default function matchRoutes(initialState,locationUrl,res){

    const store = configureStore(initialState);
    const context = {}
    const component = (
        <StaticRouter location={locationUrl} context={context}>
            <Provider store={store}>
                <App/>
            </Provider>
         </StaticRouter>
    );
    const html = renderToString(component);
    res.send(renderFullPage(html,store.getState()));
}
