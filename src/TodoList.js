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
        if (this.state.value === '') {
            event.preventDefault();
            alert('Please, enter some task.')
        } else {
            event.preventDefault();

            let newItem = {
                text: this.state.value,
                id: Date.now(),
                done: false,
                visibility: false
            };

            this.setState((prevState) => {
                return {
                    value: '',
                    items: prevState.items.concat(newItem)
                }
            })
        }
    };

    remove(id) {
        const items = this.state.items.filter((item) => item.id !== id);
        this.setState({
            items
        })
    }

    doneAll() {
        let copy = [...this.state.items];
        let doneArr = this.state.items.filter((item) => item.done);
        if ( doneArr.length !== this.state.items.length)  {
            this.state.items.forEach((element, index) => {

                copy[index] = {
                    ...this.state.items[index],
                    done: true
                };
                this.setState({
                    items: copy
                })
            })} else {
            this.state.items.forEach((element, index) => {

                copy[index] = {
                    ...this.state.items[index],
                    done: false
                };
                this.setState({
                    items: copy
                })
        })}
    };

    toggleStatus = (id) => {
        let copy;
        if (this.state.filter === 'all') {
            copy = [...this.state.items];
        } else if (this.state.filter === 'active') {
            copy = [...this.state.items];
        }
        let index = copy.findIndex((element) => {return element.id === id});
        copy[index] = {
            ...copy[index],
            done: !copy[index].done,
        };
        this.setState({
            items: copy
        });
    };

    allDone() {
        const doneItems = this.state.items.filter((item) => item.done);
        return doneItems.length > 0 && doneItems.length === this.state.items.length;
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
                    toggleStatus={this.toggleStatus}
                    remove={(index) => {this.remove(index)}}
                    state={this.state}
                    filter={this.state.filter}
                    items={this.state.items}
                />

                <Footer
                    filterBy={(key) => {this.filterBy(key)}}
                    clearCompleted={() => {this.clearCompleted()}}
                    state={this.state}
                    items={this.state.items}
                />
            </div>
        );
    }
}

export default TodoList;