import React from 'react';

class TodoItems extends React.Component {
    props: TodoItems.props;

    changeClassName = (index) => {
        if(this.props.sorting === 'active' && this.props.items[index].stat === 'done') {
            return 'active-done'
        }
        if(this.props.sorting === 'completed' && this.props.items[index].stat === null) {
            return 'completed-done'
        }
        if (this.props.items[index].stat === 'done') {
            return 'done'
        } else {
            return 'normal'
        }
    };

    render() {
        return (
            <ul className='theList'>
                {
                    this.props.items.map((item, index) =>
                        <li
                            key={index}
                            className={this.changeClassName(index)}
                            onDoubleClick={() => this.props.editItem(index)}
                        >
                            <button
                                className={this.changeClassName(index)+ '-btn'}
                                type='checkbox'
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