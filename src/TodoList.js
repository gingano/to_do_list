import React from 'react';
import TodoItems from './TodoItems'
import Footer from "./Footer";

class TodoList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
            items: [],
            filter: 'all'
        };


    }

    onChange = (event) => {
        this.setState({value:event.target.value})
    };


    onSubmit = (event) => {
        event.preventDefault();

        let newItem = {
            text: this.state.value,
            key: Date.now(),
            done: false,
            visibility: null
        };

        this.setState((prevState) => {
            return {
                value: '',
                items:prevState.items.concat(newItem)}
        });
    };

    remove(index) {
        const items = this.state.items.filter((item, i) => i !== index);
        this.setState({
            items
        })
    }

    doneAll() {
        let copy = [...this.state.items];
        this.state.items.forEach((element, index) => {

                copy[index] = {
                    ...this.state.items[index],
                    done: !copy[index].done
                };
                this.setState({
                    items: copy
                })
        })
    };

    setStat(index) {
        let copy = [...this.state.items];
        copy[index] = {
            ...copy[index],
            done: !copy[index].done,
        };
        this.setState({
            items: copy
        });
    }

    allDone() {
        const doneItems = this.state.items.filter((item) => item.done);
        if (doneItems.length === 0) {
            return false
        }
        return doneItems.length === this.state.items.length;
    }

    filterBy(key) {

        this.setState({
            filter: key
        })
    }

    clearCompleted() {
        this.setState((prevState) => ({
            items: prevState.items.filter((item) => !item.done)
        }))
    }

    render () {
        return (
            <div className='toDoListMain'>
                <div className='header'>
                    <button
                        className={this.allDone() ? 'arrow-btn-all-done' : 'arrow-btn'}
                        onClick={() => this.doneAll()}
                    >❯</button>
                    <form onSubmit={this.onSubmit}>
                        <input
                            className='new-todo'
                            placeholder='What needs to be done?'
                            value={this.state.value}
                            onChange={this.onChange}
                        />
                    </form>
                </div>
                <TodoItems
                    setStat={(index) => {this.setStat(index)}}
                    remove={(index) => {this.remove(index)}}
                    state={this.state}
                    filter={this.state.filter}
                    items={this.state.items}
                />

                <Footer
                    filterBy={(key) => {this.filterBy(key)}}
                    clearCompleted={() => {this.clearCompleted()}}
                    state={this.state}
                />
            </div>
        );
    }
}

export default TodoList;