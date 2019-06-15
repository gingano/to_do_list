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

    remove(index) {
        this.state.items.splice(index, 1);
        this.setState({
            items: this.state.items
        })
    }

    setStat(index) {
        if (this.state.items[index].stat === 'done') {
            let copy = this.state.items;
            copy[index].stat = null;
            this.setState({
                items: this.state.items
            })
        } else {
        let copy = this.state.items;
        copy[index].stat = 'done';
        this.setState({
            items: this.state.items
        })
            }
    }

    render () {
        return (
            <div className='toDoListMain'>
                <div className='header'>
                    <form onSubmit={this.onSubmit}>
                        <input
                            className='new-todo'
                            placeholder='What needs to be done?'
                            value={this.state.term}
                            onChange={this.onChange}
                        />
                    </form>
                </div>
                <TodoItems
                    setStat={(index) => {this.setStat(index)}}
                    remove={(index) => {this.remove(index)}}
                    items={this.state.items}
                />
            </div>
        );
    }

}

export default AddingItem;