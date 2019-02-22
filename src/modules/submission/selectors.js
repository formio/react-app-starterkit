import { getRoot } from "../selectors";

export const getSubmission = (name, state) => getRoot(name, state).submission;
export const getSubmissions = (name, state) => getRoot(name, state).submissions;
