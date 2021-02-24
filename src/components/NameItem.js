import React from 'react';
import App from "../App";


class NameItem extends React.Component {
    renderData() {
        return this.props.item.map(item => <li key={this.props.item.indexOf(item)}>{item}</li>);
        // console.log(this.filteredData.map(e => e));
    }
    render() {
        {console.log(this.renderData())}
        return this.renderData();
    }

}

export default NameItem;