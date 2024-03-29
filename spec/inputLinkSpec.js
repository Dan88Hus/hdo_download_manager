import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import InputLink from '../src/components/inputLink';
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

it('If exist Submit Button', () => {
    render(
        <Provider store={store}>
            <InputLink />
        </Provider>
    );
    const submitBtnInputLink = screen.getByTestId('submitBtnInputLink');
    expect(submitBtnInputLink).toEqual(jasmine.any(window.HTMLElement)) ;
})