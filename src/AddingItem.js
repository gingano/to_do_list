import React from 'react';
import TodoItems from './TodoItems'

class AddingItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        };

        this.addItem = this.addItem.bind(this);
    }

    addItem(e) {
        if(this.inputElement.value !== '') {
            let newItem = {
                text: this.inputElement.value,
                key: Date.now(),
                stat: null
            };

            this.setState((prevState) => {
                    return {
                        items:prevState.items.concat(newItem)
                    }
                }
            )
        }

        this.inputElement.value = '';

        console.log(this.state.items);

        e.preventDefault();
    }



    render () {
        return (
            <div className='toDoListMain'>
                <div className='header'>
                    <form onSubmit={this.addItem}>
                        <input
                            placeholder='enter task'
                            ref={(a) => this.inputElement = a}
                        />
                    </form>
                </div>
                <TodoItems
                    entries={this.state.items}
                />
            </div>
        );
    }


}

export default AddingItem;