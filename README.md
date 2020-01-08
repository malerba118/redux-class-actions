## Redux Class Actions

Naming conventions for redux action creators can be confusing. Class-based actions can reduce some of this confusion. Consider the following.

#### Traditional Action Creators

```jsx
function addTodo(text) {
  return {
    type: ADD_TODO,
    text
  };
}

dispatch(addTodo(text));
```

#### Class Action Creators

```jsx
class AddTodoAction extends Action {
  constructor(text) {
    super();
    this.text = text;
  }
}

dispatch(new AddTodoAction(text));
```
