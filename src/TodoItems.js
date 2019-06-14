import React from 'react';

class TodoItems extends React.Component {
    props: TodoItems.props;

    render() {
        return (
            <ul className='theList'>
                {this.props.items.map((item, index) => <li key={index}><button/>{item.text}<button/></li>)}
            </ul>
        );
    }
}

export default TodoItems;