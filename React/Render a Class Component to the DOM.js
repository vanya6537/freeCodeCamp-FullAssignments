class TypesOfFood extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Types of Food:</h1>
                <Fruits/>
                <Vegetables/>
            </div>
        );
    }
}
const targetNode = document.getElementById('challenge-node')
ReactDOM.render(<TypesOfFood/>, targetNode)