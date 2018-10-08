# React

## Isn't mixing CSS and JS a bad?
Usually yes.

The philosophy with React is that the Component is king.  

Since modern interaction couples CSS and JS anyway, simply acknowledge that fact, and redraw our separation of concern around a consistent piece: the component.

## React Classes are Functions

React Class
```js
class Hello extends Component {
    render() {
      return (
          <h1>Hello {this.props.name}!</h1>
      );
    }
}
```

Function
```js
const Hello = (props) => {
    return (
        <h1>Hello {props.name}!</h1>
    );
};
```
