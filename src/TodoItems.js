import React from 'react';

class TodoItems extends React.Component {
    props: TodoItems.props;


    render() {
        return (
            <ul className='theList'>
                {
                    this.props.items.map(
                        (item, index) =>
                            <li
                                key={index}
                            >
                                <button
                                    onClick={(index) => this.props.setStat(index)}
                                />
                                {item.text}
                                <button
                                    onClick={(index) => this.props.remove(index)}
                                />
                            </li>
                    )
                }
            </ul>
        );
    }
}

export default TodoItems;