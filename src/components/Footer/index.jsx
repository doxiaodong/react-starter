import React, { Component } from 'react';

import style from './style.scss';

export default class Footer extends Component {
    componentDidMount() {
        console.log('footer without match', this.props.match);
    }

    render() {
        return <footer className={style.footer}>footer</footer>;
    }
}
