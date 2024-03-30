import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import ListHistory from '../src/components/ListHistory';
import configureMockStore from 'redux-mock-store';
const mockStore = configureMockStore([]);
const store = mockStore({})

/**
  gid: "3f4b94912d4d51c0"
  id: "716"
  path: "C:/aria2/1GB.zip"
  progress: "100.00"​
  status: "complete"
 */

it('Is Pause Action Button Exist?', () => {
  const uriMapped = { id: "716", gid: "3f4b94912d4d51c0", path: "C:/aria2/1GB.zip", progress: "100.00", status: "complete"  }
    render(
        <Provider store={store}>
            <ListHistory uriMapped={uriMapped}/>
        </Provider>
    );
    const actionBtnListHistory = screen.getByTestId('actionBtnListHistoryPause');
    expect(actionBtnListHistory).toEqual(jasmine.any(window.HTMLElement)) ;
})

it('Is Resume Action Button Exist?', () => {
      const uriMapped = { id: "716", gid: "3f4b94912d4d51c0", path: "C:/aria2/1GB.zip", progress: "100.00", status: "complete"  }
        render(
            <Provider store={store}>
                <ListHistory uriMapped={uriMapped}/>
            </Provider>
        );
        const actionBtnListHistory = screen.getByTestId('actionBtnListHistoryResume');
        expect(actionBtnListHistory).toEqual(jasmine.any(window.HTMLElement)) ;
})

it('Is Remove Action Button Exist?', () => {
    const uriMapped = { id: "716", gid: "3f4b94912d4d51c0", path: "C:/aria2/1GB.zip", progress: "100.00", status: "complete"  }
      render(
          <Provider store={store}>
              <ListHistory uriMapped={uriMapped}/>
          </Provider>
      );
      const actionBtnListHistory = screen.getByTestId('actionBtnListHistoryStop');
      expect(actionBtnListHistory).toEqual(jasmine.any(window.HTMLElement)) ;
})