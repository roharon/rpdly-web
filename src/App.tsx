import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import { Content, PageLayout } from '@atlaskit/page-layout';
import NavBar from './components/NavBar';
import '@atlaskit/css-reset';
import './App.scss';

const App = () => (
    <Router>
        <PageLayout>
            <NavBar />
            <Content testId="content">
                <Switch>
                    <Route path="/about">
            About Page
                    </Route>
                    <Route path="/dashboard">
            Dashboard Page
                    </Route>
                    <Route path="/">
            Home Page
                    </Route>
                </Switch>
            </Content>
        </PageLayout>
    </Router>
);

export default App;
