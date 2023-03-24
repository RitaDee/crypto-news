import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../../Redux/store';
import CoinDetailsUi from '../../components/CoinDetailsUi';

describe('CoinDetailsUi', () => {
  it('renders correctly for reserved state', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <CoinDetailsUi />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
