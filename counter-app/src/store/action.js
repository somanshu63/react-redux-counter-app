export function increment() {
  return {
    type: "increment",
  };
}

export function decrement() {
  return {
    type: "decrement",
  };
}

export function reset() {
  return {
    type: "reset",
  };
}

export function updateStep(step) {
  return {
    type: "update_step",
    payload: step,
  };
}

export function updateMaxValue(value) {
  return {
    type: "update_maxValue",
    payload: value,
  };
}
