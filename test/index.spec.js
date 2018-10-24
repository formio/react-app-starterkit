import '@babel/polyfill';
import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';

const Div = () => <div />;

describe('React App Starterkit', function() {
  it('not incluede tests yet.', function() {
    expect(ReactTestUtils.isElement(<Div />)).toBe(true);
  });
});
