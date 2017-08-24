import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import Loading from 'components/Loading';

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
