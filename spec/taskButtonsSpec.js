import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import TaskButtons from '../src/components/TaskButtons';
import configureMockStore from 'redux-mock-store';
const mockStore = configureMockStore([]);
const store = mockStore({})


it('Is li Tags Greater Than 1?', () => {
    render(
        <Provider store={store}>
            <TaskButtons />
        </Provider>
    );
    const liItemTaskButtons = screen.getAllByRole('listitem');
    expect(liItemTaskButtons.length).toBeGreaterThan(1);
})