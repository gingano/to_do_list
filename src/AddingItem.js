import React from 'react';
import TodoItems from './TodoItems'

class AddingItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        };


    }


    render () {
        return (
            <div className='toDoListMain'>
                <div className='header'>
                    <form onSubmit={this.addItem}>
                        <input
                            placeholder='enter task'

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