import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import InputLink from '../src/components/inputLink';
import configureMockStore from 'redux-mock-store';
const mockStore = configureMockStore([]);
const store = mockStore({})


it('Is Link Input Field Exist?', () => {
    render(
        <Provider store={store}>
            <InputLink />
        </Provider>
    );
    const inputFieldInputLink = screen.getByTestId('inputFieldInputLink');
    expect(inputFieldInputLink).toEqual(jasmine.any(window.HTMLElement)) ;
})

it('Is Link Submit Button Exist?', () => {
    render(
        <Provider store={store}>
            <InputLink />
        </Provider>
    );
    const submitBtnInputLink = screen.getByRole('button');
    expect(submitBtnInputLink).toEqual(jasmine.any(window.HTMLElement)) ;
})