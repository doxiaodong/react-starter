import React from 'react';
import { shallow, render } from 'enzyme';
// why need cheerio, see https://github.com/airbnb/enzyme/issues/1162
import cheerio from 'cheerio'
import Loading from 'components/Loading';

describe('Loading Component', () => {
    test('Snapshot', () => {
        const component = render(<Loading />);
        expect(cheerio.html(component)).toMatchSnapshot();
    });

    test('Enzyme', () => {
        const wrapper = shallow(<Loading />);
        expect(wrapper.find('div')).toHaveLength(1);
    });
});
