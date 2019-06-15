import React from 'react';

class Footer extends React.Component {
    props: Footer.props;

    footerClassName() {
        if (this.props.items.length > 0) {
            return 'footer-active'
        }
        return 'footer-disabled'
    }

    allBtnClassName() {
        if(this.props.sorting === "all") {
            return 'selected all'
        }
        return 'all'
    }

    activeBtnClassName() {
        if(this.props.sorting === "active") {
            return 'selected active'
        }
        return 'active'
    }
    completedBtnClassName() {
        if(this.props.sorting === "completed") {
            return 'selected completed'
        }
        return 'completed'
    }

    countActive() {
        let counter = 0;
        this.props.items.forEach((element, index) => {

            if (this.props.items[index].stat !== 'done') {
                counter++
            }
        });


        return counter;
    }



    render() {
        return (
            <footer className={this.footerClassName()}>
                <div className='counter'>
                    {this.countActive()} item left
                </div>
                <ul className='filters'>
                    <li>
                        <button
                        className={this.allBtnClassName()}
                        onClick={() => {this.props.sortByAll()}}
                    >
                            All
                        </button>
                    </li>
                    <li>
                        <button
                            className={this.activeBtnClassName()}
                            onClick={() => {this.props.sortByActive()}}
                    >
                            Active
                        </button>
                    </li>
                    <li>
                        <button
                        className={this.completedBtnClassName()}
                        onClick={() => {this.props.sortByCompleted()}}
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