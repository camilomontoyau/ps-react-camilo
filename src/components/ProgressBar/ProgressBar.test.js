import React from 'react';
import Enzyme from '../../../config/enzyme';
import ProgressBar from './ProgressBar';
const {shallow} = Enzyme;


describe('ProgressBar', () => {
  test('getWidthAsPercentOfTotalWidth should return 250 with total width of 500 and percent of 50', () => {
      const wrapper = shallow(<ProgressBar percent={50} width={500} />);
      const width = wrapper.instance().getWidthAsPercentOfTotalWidth();
      expect(width).toEqual(250);
  });
});
