import React, { Component } from 'react';
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import {newData,searchFilter} from '../actions/listing';
// console.log(state.responseData)
const Filter = ({props})=>{
	return <div className="filter">Filter</div>
}
const Listing = ({props})=>{
	return <div className="listing">Listing</div>
}
class ListPage extends Component {
  render () {
    return (
      <div>
        <Filter {...this.props}/>
        <Listing {...this.props} />
      </div>
      )
  }
}

export default connect(
  state => ({listData: state.listData,filterData:state.filterData}),
  dispatch => (bindActionCreators({newData,searchFilter}, dispatch))
)(ListPage)