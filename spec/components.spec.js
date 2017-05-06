import React from 'react';
import { expect } from 'chai';
import {shallow, mount} from 'enzyme';
import {Game} from '../src/components.js'

describe('the environment', () => {
  it('works, hopefully', () => {
    expect(true).to.be.true;
  });
});

describe('Game', () => {
  it('indicates the game has started', () => {
    const wrapper = shallow(<Game />)
    expect(wrapper.contains(["Game start"])).to.equal(true);
  });
});
