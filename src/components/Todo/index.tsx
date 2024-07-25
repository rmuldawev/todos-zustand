import React, {FC} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import Pencil from '../../assets/icons/Pencil';
import Trash from '../../assets/icons/Trash';
import {Todo} from '../../store/types';

interface TodoItemProps {
  item: Todo;
  deletePress: () => void;
  editTodoPress: (item: Todo) => void;
  onComplete: (id: number) => void;
}

const TodoItem: FC<TodoItemProps> = ({
  item,
  deletePress,
  editTodoPress,
  onComplete,
}) => {
  const {completed, title, description, id} = item;
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onComplete(id)}>
        <View style={styles.checkbox}>
          {completed && <View style={styles.checkIcon} />}
        </View>
      </TouchableOpacity>

      <View style={styles.title}>
        <Text>{title}</Text>
        <Text>{description}</Text>
      </View>
      <View style={styles.icons}>
        <TouchableOpacity
          hitSlop={{top: 10, left: 10, right: 10, bottom: 10}}
          onPress={() => editTodoPress(item)}>
          <Pencil />
        </TouchableOpacity>

        <TouchableOpacity
          hitSlop={{top: 10, left: 10, right: 10, bottom: 10}}
          onPress={deletePress}>
          <Trash />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TodoItem;
