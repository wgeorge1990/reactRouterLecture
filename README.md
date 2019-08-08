## Common React Terms
- Components
- State
- Props
- JSX

## Breakdown of a class component (Object Oriented JS)
- class and extends keywords
- what does the constructor() do? super() ? 
- render()
- import, export

## Building Minimal UI State
- building component hierarchy
- what data will each component read/create? 
- which components need to communicate data ? 
- hoisting state: how to decide where state should live? 

## Function vs Stateful Components
- do all components need to have state? 

## How does React render? 
 - [virtual DOM](https://reactjs.org/docs/faq-internals.html)
 - setState()
 - using callbacks to pass data from children components to parents

 ## React Debugger
 - checking that props were passed correctly!

 ## Controlled Forms
 - [Synthetic Events](https://reactjs.org/docs/events.html#keyboard-events)
 - one handler for many events: using `[e.target.name] : e.target.value `
 - using state to save values 
 - onSubmit just grab the form state to add to app state! 

## Updating State
- this.setState should be a pure function
- we should never manipulate state directly!

## Lifecycle Methods
- different functions that will run during the lifecycle of a component
- Mounting --> constructor(), render(), componentDidMount()
- Updating --> componentDidUpdate()
- Unmounting --> componentWillUnMount()