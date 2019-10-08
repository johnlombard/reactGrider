import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component  {
    constructor(props){
        // refrence to parents constructor function
        super(props);

        this.state = {lat: null, errorMessage: '' };
    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({lat: position.coords.latitude})
            },
            err => {
                this.setState({ errorMessage: err.message})
            },
        );
    }

    render() {  
        // return <div>Latitude: {this.state.lat}</div>
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />
        }

       return <div>Loading!</div>
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)