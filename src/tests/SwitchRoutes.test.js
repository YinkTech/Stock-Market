import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './../redux/store/store';
import { SwitchRoutes } from './../containers/SwitchRoutes';

describe('App component', () => {
  test('Snapshot test', () => {
    const app = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <SwitchRoutes />
        </BrowserRouter>
      </Provider>,
    )
      .toJSON();
    expect(app).toMatchSnapshot();
  });
});