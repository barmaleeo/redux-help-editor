//import { render, screen } from '@testing-library/react';
//import App from './App';



// test('renders learn react link', () => {
//   //render(<App />);
//   //const linkElement = screen.getByText(/learn react/i);
//   //expect(linkElement).toBeInTheDocument();
//
//
// });
//

import {addHistory} from "./lib/reducers/bundleReducer";

test("Bundle Reducer Tests", () => {
  const state = {id: 1, options: {name: "test Name"}, children: [], history: [], historyPoint: -1}
  addHistory(state)
  addHistory(state)
  addHistory(state)
  addHistory(state)
  addHistory(state)
  expect(state.history.length).toBe(5)
  expect(state.historyPoint).toBe(4)
  state.historyPoint = 2;
  addHistory(state)
  expect(state.history.length).toBe(4)
  expect(state.historyPoint).toBe(3)
  state.historyPoint--;
  addHistory(state)
  expect(state.history.length).toBe(4)
  expect(state.historyPoint).toBe(3)

})