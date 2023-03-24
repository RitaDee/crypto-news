import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../../Redux/store';
import Header from '../../components/Header';

describe('Header', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Header />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
