import { useSelector, useDispatch } from "react-redux";
import { updateStep } from "../store/action";

function Steps() {
  const dispatch = useDispatch();
  const step = useSelector((state) => state.step);

  const handleStep = (step) => {
    dispatch(updateStep(step));
  };

  return (
    <div>
      <h2>Steps</h2>
      <div>
        <button
          className={`${step === 5 ? "btn_active" : ""}`}
          onClick={() => handleStep(5)}
        >
          5
        </button>
        <button
          className={`${step === 10 ? "btn_active" : ""}`}
          onClick={() => handleStep(10)}
        >
          10
        </button>
        <button
          className={`${step === 15 ? "btn_active" : ""}`}
          onClick={() => handleStep(15)}
        >
          15
        </button>
      </div>
    </div>
  );
}
export default Steps;
