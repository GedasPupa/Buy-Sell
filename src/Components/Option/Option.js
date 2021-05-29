import React from 'react';

class Option extends React.Component {
    render() {
        const arrr = this.props.results.map(item => item[0]);
        return ( 
            arrr.map(item => {
                return <option key={item} value={item}>{item}</option>
            })
                
        )
    }
}

export default Option;