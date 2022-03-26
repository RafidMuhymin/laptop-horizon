export default function QA() {
  return (
    <footer className="p-5">
      <h1 className="mb-3 text-center">Questions And Answers</h1>

      <h2>1. How does React work?</h2>
      <p>
        React is a JavaScript library for building user interfaces. React takes
        the entire app and then renders it to the DOM. It keeps a virtual copy
        of the DOM in the memory for faster access and operations. If any state
        of the app or a component changes, React creates a new copy of the VDOM
        and then compares it with the current VDOM. It is called
        <strong> dom-diffing</strong>. If it finds any changes it updates only
        the changed parts. It is how React works.
      </p>

      <h3>2. What is the difference between Props and State?</h3>
      <p>
        Props are values that are passed to a component by its parent. They are
        read-only. Child components aren't able to change the props they
        receive. In the other hand, a state is a value that is not constant and
        may change over time. And if it changes the component or components may
        have to be re-rendered. Different UI libraries provide different ways to
        update a state. Child components can update the state too if the
        function to update the state is sent via props.
      </p>

      <h3>3. How does the useState hook work?</h3>
      <p>
        The useState hook is a function provided by React that allows adding
        state to react components. It takes a single parameter for the initial
        state value, and returns a pair of values. The first one is the current
        state value and the second one is the function to update the state. To
        update the state, the function has to be called with an argument that
        replaces the current state value.
      </p>
    </footer>
  );
}
