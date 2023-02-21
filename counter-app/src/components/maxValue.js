import { useDispatch, useSelector } from "react-redux";
import { updateMaxValue } from "../store/action";

function MaxValue() {
  const max = useSelector((state) => state.max);
  const dispatch = useDispatch();

  const handleMaxValue = (value) => {
    dispatch(updateMaxValue(value));
  };

  return (
    <div>
      <h2>Max Value</h2>
      <div>
        <button
          className={`${max === 15 ? "btn_active" : ""}`}
          onClick={() => handleMaxValue(15)}
        >
          15
        </button>
        <button
          className={`${max === 100 ? "btn_active" : ""}`}
          onClick={() => handleMaxValue(100)}
        >
          100
        </button>
        <button
          className={`${max === 200 ? "btn_active" : ""}`}
          onClick={() => handleMaxValue(200)}
        >
          200
        </button>
      </div>
    </div>
  );
}

export default MaxValue;
