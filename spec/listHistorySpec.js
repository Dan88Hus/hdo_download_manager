import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import ListHistory from '../src/components/ListHistory';
import configureMockStore from 'redux-mock-store';
const mockStore = configureMockStore([]);
const store = mockStore({})


describe('actions', () => {
    it('should dispatch an action', () => {
      const initialState = {}; // initial state for the store
      const store = mockStore(initialState);
  
      // Dispatch your action
      store.dispatch({ type: 'SOME_ACTION', payload: 'test' });
  
      // Get the actions that were dispatched
      const actions = store.getActions();
  
      // Assert the actions
      expect(actions).toEqual([{ type: 'SOME_ACTION', payload: 'test' }]);
    });
  });

it('If exist Pause Action Button', () => {
/**
  gid: "3f4b94912d4d51c0"
  id: "716"
  path: "C:/aria2/1GB.zip"
  progress: "100.00"​
  status: "complete"
 */
  const uriMapped = { id: "716", gid: "3f4b94912d4d51c0", path: "C:/aria2/1GB.zip", progress: "100.00", status: "complete"  }
    render(
        <Provider store={store}>
            <ListHistory uriMapped={uriMapped}/>
        </Provider>
    );
    const actionBtnListHistory = screen.getByTestId('actionBtnListHistoryPause');
    expect(actionBtnListHistory).toEqual(jasmine.any(window.HTMLElement)) ;
})