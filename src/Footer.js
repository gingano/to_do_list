import React from 'react';

class Footer extends React.Component {

    countActive() {
        return this.props.state.items.filter(
            (item) => item.done === false
        ).length
    }



    render() {
        return (
            <footer className={this.props.state.items.length > 0 ? 'footer-active' : 'footer-disabled'}>
                <div className='counter'>
                    {this.countActive()} item left
                </div>
                <ul className='filters'>
                    <li>
                        <button
                        className={this.props.state.filter === 'all' ? 'selected all' : null}
                        onClick={() => {this.props.filterBy('all')}}
                    >
                            All
                        </button>
                    </li>
                    <li>
                        <button
                            className={this.props.state.filter === 'active' ? 'selected active' : null}
                            onClick={() => {this.props.filterBy('active')}}
                    >
                            Active
                        </button>
                    </li>
                    <li>
                        <button
                        className={this.props.state.filter === 'completed' ? 'selected completed' : null}
                        onClick={() => {this.props.filterBy('completed')}}
                    >
                            Completed
                        </button>
                    </li>
                </ul>
                <button
                    className='clear-completed'
                    onClick={() => {this.props.clearCompleted()}}
                >Clear completed</button>
            </footer>
        );
    }
}

export default Footer;