import { selectRoot } from "../selectors";

export const selectForm = (name, state) => selectRoot(name, state).form;
