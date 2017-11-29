// launched it at https://jscomplete.com/repl

class Button extends React.Component{

    handleClick = () => {
        this.setState((prevState) => ({
            counter: prevState.counter + 1
        }));
    };

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.counter}
            </button>
        );
    }
}

class Result extends React.Component{
    render() {
        return (
            <button>...</button>
        );
    }
}

class App extends React.Component{
    state = { counter: 0 };

    render() {
        return (
            <div>
                <Button />
                <Result />
            </div>
        );
    }
}



ReactDOM.render(<App />, mountNode);