import React from 'react';
import TodoItems from './TodoItems'

class AddingItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            term: '',
            items: []
        };


    }

    onChange = (event) => {
        this.setState({term:event.target.value})
    };

    onSubmit = (event) => {
        event.preventDefault();

        let newItem = {
            text: this.state.term,
            key: Date.now(),
            stat: null
        };

        this.setState((prevState) => {
            return {
                term: '',
                items:prevState.items.concat(newItem)}
        });

        console.log(this.state.items)
    };

    render () {
        return (
            <div className='toDoListMain'>
                <div className='header'>
                    <form onSubmit={this.onSubmit}>
                        <input
                            placeholder='enter task'
                            value={this.state.term}
                            onChange={this.onChange}
                        />
                    </form>
                </div>
                <TodoItems
                    items={this.state.items}
                />
            </div>
        );
    }

}

export default AddingItem;