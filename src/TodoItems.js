import React from 'react';

class TodoItems extends React.Component {
    props: TodoItems.props;


    render() {
        return (
            <ul className='theList'>
                {
                    this.props.items.map((item, index) =>
                        <li key={index}>
                            <button onClick={() => {
                                this.props.setStat(index);
                                // console.log('after btn' + this.props.state[index].stat);
                            }}/>
                            {item.text}
                            <button onClick={() => this.props.remove(index)}/>
                        </li>
                    )
                }
            </ul>
        );
    }
}

export default TodoItems;