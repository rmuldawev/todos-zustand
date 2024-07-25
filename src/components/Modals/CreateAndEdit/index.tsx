/* eslint-disable react-native/no-inline-styles */
import React, {FC, useState} from 'react';
import {Modal, StyleSheet, Text, TextInput, View} from 'react-native';
import {Todo} from '../../../store/types';
import CustomButton from '../../Button';

interface CreateAndEditModalProps {
  visible: boolean;
  onPress: () => void;
  newTodo: Todo;
  setNewTodo: (todo: Todo) => void;
  onClose: () => void;
  editTodoPress: () => void;
}

const CreateAndEditModal: FC<CreateAndEditModalProps> = ({
  visible,
  onPress,
  newTodo,
  setNewTodo,
  onClose,
  editTodoPress,
}) => {
  const [errors, setErrors] = useState<{
    title?: boolean;
    description?: boolean;
  }>({});

  const handleTitleChange = (text: string) => {
    setNewTodo({
      ...newTodo,
      title: text,
    });
    if (errors.title) {
      setErrors({...errors, title: false});
    }
  };

  const handleDescriptionChange = (text: string) => {
    setNewTodo({
      ...newTodo,
      description: text,
    });
    if (errors.description) {
      setErrors({...errors, description: false});
    }
  };

  const handleSavePress = () => {
    const newErrors: {title?: boolean; description?: boolean} = {};
    if (!newTodo.title.trim()) {
      newErrors.title = true;
    }
    if (!newTodo.description.trim()) {
      newErrors.description = true;
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    if (newTodo.id > 0) {
      editTodoPress();
    } else {
      onPress();
    }
  };

  return (
    <Modal transparent animationType="slide" visible={visible}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <TextInput
            style={[styles.input, errors.title && {borderColor: 'red'}]}
            onChangeText={handleTitleChange}
            value={newTodo.title}
            placeholder="Title"
            underlineColorAndroid="transparent"
          />
          <TextInput
            style={[styles.input, errors.description && {borderColor: 'red'}]}
            onChangeText={handleDescriptionChange}
            value={newTodo.description}
            placeholder="Description"
            underlineColorAndroid="transparent"
          />
          {newTodo.id > 0 && (
            <Text
              style={{
                color: newTodo.completed ? 'green' : 'red',
              }}>{`Status: ${newTodo.completed}`}</Text>
          )}
          <CustomButton
            backgroundColor="green"
            onPress={handleSavePress}
            buttonText="Save"
          />
          <CustomButton
            backgroundColor="red"
            onPress={onClose}
            buttonText="Cancel"
          />
          {/* <Button onPress={handleSavePress} title="Save" />
          <Button onPress={onClose} title="Cancel" color="red" /> */}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    gap: 8,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 0.5,
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    width: '100%',
    borderRadius: 8,
  },
  errorText: {
    color: 'red',
    marginBottom: 8,
  },
});

export default CreateAndEditModal;
