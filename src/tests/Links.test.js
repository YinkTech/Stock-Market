
import renderer from 'react-test-renderer';
import { Links } from './../components/Links'
import { Link } from 'react-router-dom'

describe('Links component', () => {
  test('snapshot test', () => {
    const linksCheck = renderer.create(
      <links />
    )
    .toJSON();
      expect(linksCheck).toMatchSnapshot();
  });
});