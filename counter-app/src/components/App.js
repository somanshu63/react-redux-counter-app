import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, reset } from "../store/action";
import MaxValue from "./maxValue";
import Steps from "./steps";
function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <h1>{count}</h1>

        <div>
          <Steps />
          <MaxValue />
        </div>

        <div className="mt-4">
          <button onClick={() => dispatch(increment())}>Increment</button>
          <button onClick={() => dispatch(decrement())}>Decrement</button>
          <button onClick={() => dispatch(reset())}>Reset</button>
        </div>
      </div>
    </>
  );
}

export default App;
