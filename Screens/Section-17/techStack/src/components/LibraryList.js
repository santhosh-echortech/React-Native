import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {
  renderRow({ item }) {
    return <ListItem library={item} />;
  }

  render() {
    return (
      <FlatList
        data={this.props.libraries}
        renderItem={this.renderRow}
        keyExtractor={(item) => item.id.toString()}
      />
    );
  }
}

const mapStateToProps = state => {
  return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);
