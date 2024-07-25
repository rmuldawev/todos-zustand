import React, {useState} from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import useTodoStore from '../../store/store';
import {Todo} from '../../store/types';
import TodoItem from '../../components/Todo';
import CreateAndEditModal from '../../components/Modals/CreateAndEdit';
import CustomButton from '../../components/Button';
import {styles} from './styles';

const Main: React.FC = () => {
  const {todos, addTodo, deleteTodo, editTodo, handleComplete} = useTodoStore();
  const [isVisible, setIsVisible] = useState(false);
  const [newTodo, setNewTodo] = useState<Todo>({
    title: '',
    description: '',
    completed: false,
    id: 0,
  });

  const onEditOpenModal = (item: Todo) => {
    setNewTodo(item);
    setIsVisible(true);
  };

  const renderItem = ({item}: {item: Todo}) => (
    <TodoItem
      onComplete={() => handleComplete(item.id)}
      editTodoPress={() => onEditOpenModal(item)}
      item={item}
      deletePress={() => deleteTodo(item.id)}
    />
  );

  const handleAddTodo = () => {
    addTodo({
      ...newTodo,
      id: Math.floor(10000 + Math.random() * 90000),
    });
    setNewTodo({
      title: '',
      description: '',
      completed: false,
      id: 0,
    });
    setIsVisible(false);
  };

  const handleEditTodo = () => {
    editTodo(newTodo.id, newTodo);
    setNewTodo({
      title: '',
      description: '',
      completed: false,
      id: 0,
    });
    setIsVisible(false);
  };

  const onCancel = () => {
    setIsVisible(false);
    setNewTodo({
      title: '',
      description: '',
      completed: false,
      id: 0,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>TodoList</Text>
      <CustomButton
        buttonText="AddTodo"
        onPress={() => setIsVisible(true)}
        backgroundColor="blue"
      />
      {todos.length ? (
        <FlatList
          data={todos}
          renderItem={renderItem}
          keyExtractor={(_, index: number) => index.toString()}
        />
      ) : (
        <View style={styles.noTodoText}>
          <Text>Create your first todo</Text>
        </View>
      )}
      <CreateAndEditModal
        editTodoPress={handleEditTodo}
        visible={isVisible}
        onPress={handleAddTodo}
        newTodo={newTodo}
        setNewTodo={setNewTodo}
        onClose={onCancel}
      />
    </SafeAreaView>
  );
};

export default Main;
