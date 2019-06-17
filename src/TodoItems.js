import React from 'react';

class TodoItems extends React.Component {

    changeClassName = (index) => {
        const {filter, items} = this.props;
        if (filter === 'active' && items[index].done) {
            return 'active-done'
        }
        if (filter === 'completed' && !items[index].done) {
            return 'completed-done'
        }
        if (items[index].done) {
            return 'done';
        }
        return 'normal';
    };

    render() {
        return (
            <ul className='theList'>
                {
                    this.props.state.items.map((item, index) =>
                        <li
                            key={index}
                            className={this.changeClassName(index)}
                        >
                            <button
                                className={this.changeClassName(index)+ '-btn'}
                                type='button'
                                onClick={() => {
                                this.props.setStat(index);
                            }}/>
                            <label>{item.text}</label>
                            <button
                                className='remove'
                                onClick={() => this.props.remove(index)}
                            >✕</button>
                        </li>
                    )
                }
            </ul>
        );
    }
}

export default TodoItems;