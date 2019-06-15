import React from 'react';
import TodoItems from './TodoItems'
import Footer from "./Footer";

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

    doneAll() {
            this.state.items.forEach((element, index, arr) => {
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
            })
    };

    arrowBtnAllDone(counter) {
        counter = 0;
        this.state.items.forEach((element, index, arr) => {

            if (this.state.items[index].stat === 'done') {
                counter++
            }
        });

        if (this.state.items.length === 0) {
            return 'arrow-btn'
        }
        if (counter === this.state.items.length) {
            return 'arrow-btn-all-done'
        }

        return 'arrow-btn'
    }

    render () {
        return (
            <div className='toDoListMain'>
                <div className='header'>
                    <button
                        className={this.arrowBtnAllDone()}
                        onClick={() => this.doneAll()}
                    >❯</button>
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

                <Footer />
            </div>
        );
    }
}

export default AddingItem;