# README

## Lecture 117 & 118
- Installing the correct React-Router.  Instead of just "react-router", what we need is the web-version:

```sh
npm install --save react-router-dom@4.0.0
```

## Lecture 119: What React Router Does

- The web used to change the URL (by clicking on a link) and then they are given a new page
- React-Router no longer needs us to send a request to the server and get a new page.  We instead are
going to look at the new URL that the user entered and deliver that component that they want to see
- History is a library that comes with the React-Router library
- SPA's => Single Page Application.  It is a single HTML page but we are relying on JavaScript to show
different components

## Lecture 120: The Basics of React Router
- To get started, this is what I need to do:
  - import BrowserRouter and Route from react-router-dom
  - Replace my `<App />` component with `<BrowserRouter></BrowserRouter>`
  - Inside the BrowserRouter, because I'll have more than one Route, put a parent div
  - And inside that parent div, I can layout my paths

```js
// code
import { BrowserRouter, Route} from 'react-router-dom';

import App from './components/app';
import reducers from './reducers';



const createStoreWithMiddleware = applyMiddleware()(createStore);

// EXAMPLE COMPONENTS
class Hello extends React.Component {
	render() { return <div>Hello!</div> }
}

class Goodbye extends React.Component {
	render() { return <div>Goodbye!</div> }
}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
    	<div>
    		HEADER
    		<Route path="/hello" component={Hello}/>
    		<Route path="/goodbye" component={Goodbye}/>
    	</div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
```

  - notice that "HEADER" is just text that will show up on any component shown because it inside the div. 
  We probably won't keep it that way but that's how it will work.  React Router just looks for the URL
  and if it matches, it displays the component.
  - If an undefined path shows up (misspellings or just gibberish) then no particular component is
   displayed but the HEADER will be there.

## Lecture 121: Route Design




