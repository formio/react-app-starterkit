import { getRoot } from "../selectors";

export const getForm = (name, state) => getRoot(name, state).form;
