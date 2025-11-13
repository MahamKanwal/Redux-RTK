import { useDispatch, useSelector } from "react-redux";

export const useStore = (slice) => {
  const dispatch = useDispatch();

  if (!slice) return;

  if (Array.isArray(slice)) {
    const state = {};
    slice.forEach((s) => {
      state[s] = useSelector((state) => state[s]);
    });
    state.dispatch = dispatch;
    return state;
  }

  const state = useSelector((state) => state[slice]);
  return {[slice]:state, dispatch};
};


