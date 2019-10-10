import React from 'react';
import Order from './Order.js';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow, mount} from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });


describe('<Order/>', () => {
    const wrapper = shallow(<Order />);
    it('has divs', () => {
        expect(wrapper.find('.order-header')).to.have.not.lengthOf(0);
        expect(wrapper.find('.order-shop')).to.have.not.lengthOf(0);
        expect(wrapper.find('.order-items')).to.have.not.lengthOf(0);
    });
    it('has shop name', () => {
        const wrapper = mount(<Order/>);
        wrapper.setProps({'order': {'shop1', '1'}});
        expect(wrapper.props().order.shop).to.equal('shop1');
    });
});
