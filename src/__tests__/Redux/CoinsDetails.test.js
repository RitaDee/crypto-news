import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { ErrorBoundary } from 'react-error-boundary';
import store from '../../Redux/store';
import CoinsDetailsSlice from '../../Redux/details/CoinsDetailsSlice';

function MyFallbackComponent({ error, resetErrorBoundary }) {
  return (
    <div>
      <h2>Something went wrong:</h2>
      <p>{error.message}</p>
      <button type="button" onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

describe('CoinsDetailsSlice', () => {
  it('renders correctly', () => {
    const tree = renderer(
      <ErrorBoundary FallbackComponent={MyFallbackComponent}>
        <Provider store={store}>
          <CoinsDetailsSlice />
        </Provider>
      </ErrorBoundary>,
    )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

MyFallbackComponent.propTypes = {
  resetErrorBoundary: PropTypes.func.isRequired,
  error: PropTypes.shape({
    message: PropTypes.string,
  }).isRequired,
};
