export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export function INCREASE_COUNT() {
  return ({ type: INCREMENT});
}

export function DECREASE_COUNT() {
  return ({ type: DECREMENT});
}