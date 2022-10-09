# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Functional Components


### Learning Objectives
*After this lesson, you will be able to:*
- Contrast class components with functional components
- Rewrite class components into functional components

## Functional Components

Functional components give you a simpler way of declaring React components. React **class** components give you properties that you don't always need, namely state, methods like `setState`, lifecycle methods like `componentDidMount` ,`refs` and more.

Some components are purely presentational. They take props and render UI. As a React class, these components usually just contain a `render` method.

Rather than create them as classes, you can write them as functions. A React Functional Component takes the `props` object as its argument and returns JSX. Here's a very simple example.

As a class, we might have:


```javascript
class Name extends React.Component {
  render() {
    return (
      <div>
        Name: {this.props.firstName} {this.props.lastName}
      </div>
    )
  }
}
```

But with ES6, we now have:

```javascript
const Name = props => (
  <div>
    Name: {props.firstName} {props.lastName}
  </div>
)
```

> The whole declaration of `class`, `extends`, `React.component`, etc - it's all been replaced. We now just have the component name, an input for the `props`, and what is returned. Simplicity at its finest!

Functional components don't have to be "simple" - they can contain all kinds of logic. They're just JavaScript functions - so they can be as simple or complex as we make them. 

So, when should you use Functional Components, and when should you use Class Components?

If:

- you don't need anything special
- if you are purely just returning JSX to render something

Use a functional component. But:

* If you need your component to be stateful - that is, if you need the ability to use `setState` to respond to changes -- use a class.
* If you need lifecycle methods - if you need to do something when the component mounts, or receives `props`, or unmounts -- use a class.
* If you need a `ref` -- that is, a reference to the DOM element rendered by the component - use a class.

And only if you _don't_ need any of those things -- use a Functional Component.

Functional Components are a great example of what people talk about when they say that React is "declarative", or gives us a declarative API. Rather than telling the DOM _how_ to render the UI we want - which nodes to change and how - we can use JSX to "declare" how we want the markup to look, and React alters the DOM accordingly.


## We Do: Functional Components Exercise

Now that we've learned about functional components, is there any place we can apply them?

Look through the projects you've done so far. Are there any places you could use a functional component?

