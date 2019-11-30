/* eslint-disable array-callback-return */
/* eslint-disable func-names */
import React from 'react';
import { View, Text } from 'react-native';
import data from '../../resources/data.json';
import BoardList from '../../components/BoardList';
import styles from './styles';
import Toolbar from '../../components/Toolbar';
import BoardModal from '../../components/BoardModal';
import ModifyBoardModal from '../../components/BoardModal/ModifyBoardModal';

class Boards extends React.Component {
  // this.props.navigation.state.params.data
  // eslint-disable-next-line react/state-in-constructor
  state={
    // The board data list
    boards: data.boards,
    // All selected boards
    selectedIds: [],
    // This one starts as false and is used in the Modal (located in components)
    isAddModalOpen: false,

    isModifyModalOpen: false,
  }

  onBoardLongPress(id) {
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

  // eslint-disable-next-line react/sort-comp
  removeSelectedBoards() {
    const { selectedIds, boards } = this.state;
    this.setState({
      // Only retrieve images which were NOT part of the selected images list
      boards: boards.filter((board) => selectedIds.indexOf(board.id) === -1),
      selectedIds: [],
    });
  }

  // This one should display a caption whenever someone selects a board
  // How this one also shows if it should be plural or not
  displayCaption() {
    let itemCaption = null;
    const { selectedIds } = this.state;
    if (selectedIds.length === 0) { return; }
    if (selectedIds.length === 1) {
      itemCaption = 'board';
    } else {
      itemCaption = 'boards';
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

  addBoard = (info) => {
    const { boards } = this.state;
    let maxId = null;
    boards.map(
      // eslint-disable-next-line prefer-arrow-callback
      function (obj) {
        if (obj.id > maxId) maxId = obj.id;
      },
    );
    // We get the highest id of any list
    maxId += 1;
    const newBoard = {
      // eslint-disable-next-line quote-props
      'id': maxId,
      // eslint-disable-next-line quote-props
      'name': info.name,
      // eslint-disable-next-line quote-props
      'description': info.description,
      // eslint-disable-next-line quote-props
      'thumbnailPhoto': info.thumbnailPhoto,
    };
    this.setState({ boards: [...boards, newBoard], isAddModalOpen: false });
  }

  addModifiedBoard = (newBoard) => {
    const { boards } = this.state;
    this.setState({ boards: [...boards, newBoard], isModifyModalOpen: false });
  };

  modifyBoard = (info, boardId) => {
    const { selectedIds, boards } = this.state;
    const newBoard = {
      // eslint-disable-next-line quote-props
      'id': boardId[0],
      // eslint-disable-next-line quote-props
      'name': info.name,
      // eslint-disable-next-line quote-props
      'description': info.description,
      // eslint-disable-next-line quote-props
      'thumbnailPhoto': info.thumbnailPhoto,
    };

    const newBoards = boards.filter((board) => selectedIds.indexOf(board.id) === -1);
    this.setState({ boards: [...newBoards, newBoard], isModifyModalOpen: false, selectedIds: [] });
  };

  render() {
    const { props } = this;
    const {
      selectedIds, boards, isAddModalOpen, isModifyModalOpen,
    } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <Toolbar
          onAdd={() => this.setState({ isAddModalOpen: true })}
          onModify={() => this.setState({ isModifyModalOpen: true })}
          hasSelectedIds={selectedIds.length > 0}
          canModify={!(selectedIds.length === 0 || selectedIds.length > 1)}
          onRemove={() => this.removeSelectedBoards()}
        />
        <Text style={styles.caption}>{this.displayCaption()}</Text>

        <BoardList
          boards={boards}
          props={props}
          onLongPress={(boardId) => this.onBoardLongPress(boardId)}
          selectedIds={selectedIds}
        />
        <BoardModal
          isOpen={isAddModalOpen}
          closeModal={() => this.setState({ isAddModalOpen: false })}
          addBoard={(info) => this.addBoard(info)}
        />
        <ModifyBoardModal
          boards={boards}
          boardId={selectedIds}
          isOpen={isModifyModalOpen}
          closeModal={() => this.setState({ isModifyModalOpen: false })}
          modifyBoard={(info) => this.modifyBoard(info, selectedIds)}
        />
      </View>
    );
  }
}

export default Boards;
