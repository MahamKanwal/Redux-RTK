import { useDispatch, useSelector } from "react-redux"

export const useStore = (slice) => {
    const dispatch = useDispatch();
    if (!slice) return dispatch;
    if (Array.isArray(slice)){
        const slices = slice.map((s) => useSelector((state) => state[s]));
        return [...slices,dispatch];
    }
    const state = useSelector((state) => state[slice]);
    return [state, dispatch];
}