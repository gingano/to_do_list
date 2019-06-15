import React from 'react';

class TodoItems extends React.Component {
    props: TodoItems.props;

    changeClassName = (index) => {
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
                        >
                            <button
                                className={this.changeClassName(index)+ '-btn'}
                                type='checkbox'
                                onClick={() => {
                                this.props.setStat(index);
                                // console.log('after btn' + this.props.state[index].stat);
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