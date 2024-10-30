import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Modal, Picker} from 'react-native';

const TasksContainer = () => {
  const [tasks, setTasks] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [newTask, setNewTask] = useState({ text: '', repetitions: 0, stat: '?' });

  const addTask = () => {
    if (newTask.text.trim() !== '') {
      setTasks([...tasks, { ...newTask, id: Date.now(), completed: 0 }]);
      setNewTask({ text: '', repetitions: 1, stat: 'meth' }); 
      setModalVisible(false);
    }
  };

  const incrementTaskCompletion = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId
          ? { ...task, completed: Math.min(task.completed + 1, task.repetitions) }
          : task
      )
    );
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.addButtonContainer}>
        <Button title="Add Task" onPress={() => setModalVisible(true)} />
      </View>

      {tasks.map((task) => (
        <View key={task.id} style={styles.task}>
          <Text
            style={[
              styles.taskText,
              { textDecorationLine: task.completed >= task.repetitions? 'line-through' : 'none' },
            ]}
            onPress={() => toggleTaskCompletion(task.id)}
          >
            {task.text} ({task.completed}/{task.repetitions}) - {task.stat}
          </Text>
          {task.repetitions > 1 && (
            <Button
              title="+1"
              onPress={() => incrementTaskCompletion(task.id)}
              disabled={task.completed >= task.repetitions}
            />
          )}
        </View>
      ))}

      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Add New Task</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter task description"
            value={newTask.text}
            onChangeText={(text) => setNewTask({ ...newTask, text })} 
          />
          <TextInput
            style={styles.input}
            placeholder="Number of repetitions"
            keyboardType="numeric"
            value={newTask.repetitions.toString()}
            onChangeText={(text) => setNewTask({ ...newTask, repetitions: parseInt(text, 10) || 1 })}
          />
          <Picker
            selectedValue={newTask.stat}
            onValueChange={(stat) => setNewTask({ ...newTask, stat })}
          >
            <Picker.Item label="Strength" value="Strength" />
            <Picker.Item label="Dexterity" value="Dexterity" />
            <Picker.Item label="Constitution" value="Constitution" />
            <Picker.Item label="Intellegence" value="Intellegence" />
            <Picker.Item label="Wisdom" value="Wisdom" />
            <Picker.Item label="Charisma" value="Charisma" />
          </Picker>
          <View style={styles.modalButtons}>
            <Button title="Cancel" onPress={() => setModalVisible(false)} />
            <Button title="Add" onPress={addTask} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  addButtonContainer: {
    position: 'absolute', 
    bottom: 10, 
    right: 10, 
  },
  task: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  taskText: {
    flex: 1,
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 10,
  },
  // Modal styles
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
});

export default TasksContainer;
