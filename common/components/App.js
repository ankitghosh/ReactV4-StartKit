import React from 'react'
import {
  Route,
  Link
} from 'react-router-dom'
import Main from './Main';
const Home = () => (
    <div>
    	<Link to={'/home'}>Home</Link>
    </div>

)
const App = () => (
    <div>
        <Route exact path="/" component={Home}/>
        <Route path="/home" component={Main}/>
    </div>
)

export default App