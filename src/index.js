import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Nav1 from './components/Nav1';
import Nav2 from './components/Nav2';
import Nav3 from './components/Nav3';
import Nav4 from './components/Nav4';
import Nav5 from './components/Nav5';
import Nav6 from './components/Nav6';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; // must import this AND npm install
import { Row, Col } from 'react-bootstrap';
import './styles/index.css';

ReactDOM.render(
    <Router>
        <Row className="link">
            <Col>
                <Link className="link" to="/">Nav1</Link>
                <Link className="link" to="/nav2">Nav2</Link>
                <Link className="link" to="/nav3">Nav3</Link>
                <Link className="link" to="/nav4">Nav4</Link>
                <Link className="link" to="/nav5">Nav5</Link>
                <Link className="link" to="/nav6">Nav6</Link>
            </Col>
        </Row>
        <Switch>
            <Route exact path="/" component={Nav1} />
            <Route path="/Nav2" component={Nav2} />
            <Route path="/Nav3" component={Nav3} />
            <Route path="/Nav4" component={Nav4} />
            <Route path="/Nav5" component={Nav5} />
            <Route path="/Nav6" component={Nav6} />

        </Switch>
    </Router>, 
    document.getElementById('root')
);

