class DisplayMessages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            messages: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.submitMessage = this.submitMessage.bind(this);

    }

    // add handleChange() and submitMessage() methods here
    handleChange(event) {
        this.setState({
            input: event.target.value
        })
    }


    submitMessage(event) {
        this.setState(state => ({
            input: '',
            messages: [...state.messages, state.input]
        }))
    }


    render() {
        const renderedMessages = this.state.messages.map((item, index) => {
            return <li key={index}>{item}</li>;
        });
        return (
            <div>
                <h2>Type in a new Message:</h2>
                { /* render an input, button, and ul here */}
                <input value={this.state.input} onChange={this.handleChange}/>
                <button onClick={this.submitMessage}>Add message</button>
                <ul>{renderedMessages}</ul>
                { /* change code above this line */}
            </div>
        );
    }
}
