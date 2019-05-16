import React from 'react';
import { shallow } from 'enzyme';
import TodoItem from '../../components/TodoItem';

describe('snapshot test', () => {
  it('should render TodoItem component correctly', () => {
    // @ts-ignore
    const wrapper = shallow(<TodoItem />);
    expect(wrapper).toMatchSnapshot();
  });
});
