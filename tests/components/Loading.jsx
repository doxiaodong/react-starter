import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Loading from 'components/Loading';

Enzyme.configure({ adapter: new Adapter() });

describe('Loading Component', () => {
    test('Snapshot', () => {
        const component = renderer.create(<Loading />);
        expect(component.toJSON()).toMatchSnapshot();
    });

    test('Enzyme', () => {
        const wrapper = shallow(<Loading />);
        expect(wrapper.find('div')).toHaveLength(1);
    });
});
