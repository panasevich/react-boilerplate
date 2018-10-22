import React, { Component } from 'react';


export default function logProps(WrappedComponent) {
    return class extends Component {
        componentDidMount() {
            console.log('hoc mounted');
        }

        render() {
            return <WrappedComponent {...this.props} />;
        }
    };
}
