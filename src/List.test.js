import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List';

describe('List component', () => {
    it('renders without crashing', () => {
        const object = [{
            id: "one",
            title: "onetwo",
            content: "onetwothree"
        }]
        const div = document.createElement('div');
        ReactDOM.render(<List header="list" cards={object}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the UI as expected', () => {
        const object = [{
            id: "one",
            title: "onetwo",
            content: "onetwothree"
        }]
        const tree = renderer
        .create(<List header="list" cards= {object}/> )
        .toJSON()
        expect(tree).toMatchSnapshot();
    });

})