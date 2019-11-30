/* eslint-disable react/destructuring-assignment */
/* eslint-disable array-callback-return */
/* eslint-disable func-names */
import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, Text } from 'react-native';
import Toolbar from '../../components/Toolbar';
import ListLists from '../../components/ListLists';
import ListModal from '../../components/ListModal';
import ModifyListModal from '../../components/ListModal/ModifyListModal';
import data from '../../resources/data.json';
import styles from './styles';

class Lists extends React.Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    lists: data.lists,
    selectedIds: [],
    isAddModalOpen: false,
    isModifyModalOpen: false,
  };

  // This function should take in information from our form and add it to our board list
  // eslint-disable-next-line react/sort-comp
  addList = (submittedInfo) => {
    let boardId = null;
    let maxId = null;
    const { lists } = this.state;
    lists.map(
      // eslint-disable-next-line prefer-arrow-callback
      function (obj) {
        if (obj.id > maxId) { maxId = obj.id; }
      },
    );
    // We get the highest id of any list
    maxId += 1;
    const { navigation } = this.props;
    const { state } = navigation;
    const { params } = state;
    const { boards } = params;
    // The id of the board corresponding to the board name picked
    boards.map(
      // eslint-disable-next-line prefer-arrow-callback
      function (board) {
        if (board.name === submittedInfo.boardName) {
          boardId = board.id;
        }
      },
    );
    // Name input by the user
    const { name } = submittedInfo;
    // Color selected by the user
    const { color } = submittedInfo;
    // Creating a new object to be combined with our lists
    const newList = {
      // eslint-disable-next-line quote-props
      'id': maxId,
      // eslint-disable-next-line quote-props
      'name': name,
      // eslint-disable-next-line quote-props
      'color': color,
      // eslint-disable-next-line quote-props
      'boardId': boardId,
    };
    this.setState({ lists: [...lists, newList], isAddModalOpen: false });
  }

  onListLongPress(id) {
    const { selectedIds } = this.state;
    if (selectedIds.indexOf(id) !== -1) {
      // ID is already within the list
      this.setState({
        selectedIds: selectedIds.filter((x) => x !== id),
      });
    } else {
      // IDs need to be added
      this.setState({
        selectedIds: [...selectedIds, id],
      });
    }
  }

  removeSelectedLists() {
    const { selectedIds, lists } = this.state;
    this.setState({
      // Only retrieve images which were NOT part of the selected images list
      lists: lists.filter((list) => selectedIds.indexOf(list.id) === -1),
      selectedIds: [],
    });
  }

  displayCaption() {
    const { selectedIds } = this.state;
    if (selectedIds.length === 0) { return; }

    let itemCaption = 'lists';
    if (selectedIds.length === 1) {
      itemCaption = 'list';
    }
    // eslint-disable-next-line consistent-return
    return (
      <Text>
        You have
        {selectedIds.length}
        selected
        {itemCaption}
      </Text>
    );
  }

  modifyList(info, selectedIds) {
    let boardId = null;
    const { lists } = this.state;
    const { boards } = this.props;
    boards.map(
      // eslint-disable-next-line prefer-arrow-callback
      function (board) {
        if (board.name === info.boardName) {
          boardId = board.id;
        }
      },
    );

    const newList = {
      // eslint-disable-next-line quote-props
      'id': selectedIds[0],
      // eslint-disable-next-line quote-props
      'name': info.name,
      // eslint-disable-next-line quote-props
      'color': info.color,
      // eslint-disable-next-line quote-props
      'boardId': boardId,
    };
    const newLists = lists.filter((list) => selectedIds.indexOf(list.id) === -1);
    this.setState({ lists: [...newLists, newList], isModifyModalOpen: false, selectedIds: [] });
  }

  render() {
    const { navigation } = this.props;
    const { state } = navigation;
    const { params } = state;
    const { boards } = params;
    const {
      lists, selectedIds, isAddModalOpen, isModifyModalOpen,
    } = this.state;
    const toShow = [];
    const boardNames = [];
    // eslint-disable-next-line react/prop-types
    boards.map(
      // eslint-disable-next-line prefer-arrow-callback
      function (item) {
        boardNames.push({ value: item.name });
      },
    );
    return (
      <ScrollView>
        <Toolbar
          onAdd={() => this.setState({ isAddModalOpen: true })}
          onModify={() => this.setState({ isModifyModalOpen: true })}
          hasSelectedIds={selectedIds.length > 0}
          onRemove={() => this.removeSelectedLists()}
          canModify={selectedIds.length === 1}
        />
        <Text style={styles.caption}>
          {this.displayCaption()}
        </Text>
        <Text style={styles.title}>
          Currently in Board
          {' '}
          {params.boardId}
        </Text>
        {lists.map(
          // eslint-disable-next-line prefer-arrow-callback
          function (item) {
            if (item.boardId === params.boardId) {
              toShow.push(item);
            }
          },
        )}
        <ListLists
          lists={toShow}
          onLongPress={(listId) => this.onListLongPress(listId)}
          selectedIds={selectedIds}
          props={this.props}
        />
        <ListModal
          isOpen={isAddModalOpen}
          closeModal={() => this.setState({ isAddModalOpen: false })}
          addList={(info) => this.addList(info)}
          boardOptions={boardNames}
        />
        <ModifyListModal
          lists={lists}
          listId={selectedIds}
          isOpen={isModifyModalOpen}
          closeModal={() => this.setState({ isModifyModalOpen: false })}
          modifyList={(info) => this.modifyList(info, selectedIds)}
          boardOptions={boardNames}
        />
      </ScrollView>
    );
  }
}

Lists.propTypes = {
  navigation: PropTypes.objectOf(PropTypes).isRequired,
  state: PropTypes.objectOf(PropTypes).isRequired,
  params: PropTypes.objectOf(PropTypes).isRequired,
  boards: PropTypes.objectOf(PropTypes).isRequired,
};

export default Lists;
