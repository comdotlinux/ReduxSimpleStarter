import _$ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import jsdom from 'jsdom';
import chai, { expect } from 'chai';
import chaiJquery from 'chai-jquery';
import log from 'loglevel';

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
global.navigator = global.window.navigator;
const $ = _$(window);
log.setDefaultLevel(log.levels.DEBUG);

chaiJquery(chai, chai.util, $);

const Wrapper = React.createClass({
    render: function() {
      return this.props.children;
    }
});

function renderFunctionalComponent(ComponentClass, props = {}, state = {}) {
    const componentInstance = TestUtils.renderIntoDocument(
        <Wrapper>
            <ComponentClass {...props} />
        </Wrapper>
    );
    return $(ReactDOM.findDOMNode(componentInstance));
}

function renderComponent(ComponentClass, props = {}, state = {}) {
    const componentInstance = TestUtils.renderIntoDocument(<ComponentClass {...props }/>);
    return $(ReactDOM.findDOMNode(componentInstance));
}

$.fn.simulate = function(eventName, value) {
    if (value) {
        this.val(value);
    }
    TestUtils.Simulate[eventName](this[0]);
};

export { renderComponent, renderFunctionalComponent, expect };