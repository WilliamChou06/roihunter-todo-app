import React from 'react';
import { shallow } from 'enzyme';
import TodoApp from '../../components/TodoApp';

describe('snapshot test', () => {
  it('should render TodoApp component correctly', () => {
    const wrapper = shallow(<TodoApp />);
    expect(wrapper).toMatchSnapshot();
  });
});
