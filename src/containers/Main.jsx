import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { uniqueId } from 'lodash';
import * as weatherActions from '../actions/weatherAction';
import { View } from '../components/View.jsx';
import Form from '../components/Form.jsx';

class Main extends Component {

    constructor(props) {
        super(props);

        this.key = '862dc7cbbdc5915f4aa2bdec7b31dbdd';
        
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // componentDidMount() {
    //     const cityName = 'Voronezh';
    //     const url = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&units=metric&appid=862dc7cbbdc5915f4aa2bdec7b31dbdd';

    //     this.loadDefaultData(url, cityName)
    // }

    // loadDefaultData(url, cityName) {
    //     this.props.weatherActions.setCity(cityName);
    //     this.props.weatherActions.getData(url);
    // }

    handleSubmit(text) {
        text !== '' && this.loadData(text);
        text = '';
    }

    loadData(cityName) {
        const url = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&units=metric&appid=' + this.key;

        this.props.weatherActions.setCity(cityName);
        this.props.weatherActions.getData(url);
    }

    render() {
        return (
            <div>
                <Form onChildClick={this.handleSubmit}/>
                { this.props.weather.data.map( item => <View key={uniqueId()} data={item} /> ) }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        weather: state.weather
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        weatherActions: bindActionCreators(weatherActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);