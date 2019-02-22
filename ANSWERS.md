- [ ] What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.

        PropTypes are used as validators that can be used to make sure the data you receive is valid. You can use PropTypes to document the intended types of properties passed to components. React will check props passed to your components against those definitions, and warn in development if they don’t match. It is important to use them to make sure, that the data we are passing are the right types of the data.

- [ ] Describe a life-cycle event in React?

        Each React component comes with several methods that allows developers to update the application state and reflect the change to UI. There are three main phases of a component which including mounting, updating and unmounting.
        In the render phase of mounting, constructor() method is called. In commit phase of mounting, componentDidMount() is called. In commit phase of updateing, componentDidUpdate() is called. In commit phase of unmounting, componentWillUnMount() is called.

* [ ] Explain the details of a Higher Order Component?

        A higher-order component is a function that takes a component and returns a new component.

* [ ] What are three different ways to style components in React? Explain some of the benefits of each.

        1. CSS Stylesheet
        2. Inline Styling
        3. Styled Components
        +bonus: CSS Modules
