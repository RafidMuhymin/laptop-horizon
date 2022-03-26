export default function QA() {
  return (
    <footer className="p-5">
      <h1 className="mb-3 text-center">Questions And Answers</h1>

      {/* <h2>1. How does React work?</h2>
      <p>
        React is a JavaScript library for building user interfaces. It is
        maintained by Facebook and a community of individual developers and
        companies. React can be used as a base in the development of single-page
        or mobile applications. However, React can also be used in the
        development of server-side rendering applications by itself or as a
        framework for the development of reusable UI components.
      </p> */}

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
