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
  - the route does NOT have to match the component name

## Lecture 121: Route Design
- PostsIndex => "/"
- PostsShow
- PostsNew

## Lecture 122
- Not much of a change but we did clean up our index.js file
- NOTE: we no longer really need an "App" component so we removed the import statement and deleted
the file
- We imported our PostsIndex and wrote the route for it
- here is the cleaned-up BrowserRouter parent div:

```js
<div>
	<Route path="/" component={PostsIndex} />
</div>
```

## Lecture 123: State as an Object


## Lecture 124: Back to Redux - Index Action
- Install Axios and Redux-Promise

```sh
npm install --save axios redux-promise
```

```js
import promise from 'redux-promise';

import reducers from './reducers';
import PostsIndex from './components/posts_index';



const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
```

- the payload property of the action creator we wrote, fetchPosts, is "request".  Redux-Promise will
see and resolve the promise for us

## Lecture 127: Rendering a List of Posts
- Complete!
- Learning lodash might be worth it...
- In this section, we updated posts_index.js to actually display some of the post titles.  We used the lodash
method `_.map` but besides that, nothing too crazy.

## Lecture 128: Creating New Posts
- created the posts_new.js file and brought it into the router

## Lecture 129: React Router Gotcha
- Switch is something that we imported that looks for the first one that matches the route.  So we had
to move our "/posts/new" route up above our "/" route

## Lecture 130: Navifation with the Link Component
- The "Link" component is an anchor tag but WITHOUT the default properties of standard anchor tags

## Lecture 131: Redux Form
- Redux Form is really just saving us from manually wiring up all these action creators / reducers ourselves

## Lecture 132: Setting up Redux Form
Here are the basic steps:
1. Identify the different pieces of form state => for us, this means title, categories, and contents for
our posts
1. Make one "Field" component per piece of state => inputs, textarea, checkbox, radio button?
1. The user changes a "field" input
1. Redux Form automatically handles changes
1. User submits the form
1. We validate the inputs and handle form submission

- reduxForm is a function like "connect" that we use to connect our form to Redux

```js
import { reducer as formReducer } from 'redux-form';  // NEW
import PostsReducer from './reducer_posts'

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer                                   // NEW
});

export default rootReducer;
```
- In the PostsNew component, we setup connect reduxForm to our component like we would with the "connect"
function in Redux.

```js
export default reduxForm({
  form: 'PostsNewForm'
})(PostsNew);
```
  - where 'PostsNewForm' is simply a unique string that is the name of our form

- Halfway through L134

