import React, { useState } from 'react';
import {TouchableOpacity, View, Text, StyleSheet, TextInput, Button } from 'react-native';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  task: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  taskText: {
    flex: 1,
    fontSize: 16,
    textDecorationLine: "completed" ? 'line-through' : 'none',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginRight: 10,
    flex: 1,
  },
  addButton: {
    backgroundColor: 'red', // Example background color
    padding: 10,
    borderRadius: 1000000, 
    alignItems: 'center', 
  },
  addButtonText: {
    color: 'white', // Example text color
    fontSize: 16,
    fontWeight: 'bold', 
  },
});


const TasksContainer: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, text: 'Defeat the Goblin King', completed: false },
    { id: 2, text: 'Retrieve the stolen artifact', completed: false },
    { id: 3, text: 'Explore the ancient ruins', completed: false },
  ]);
  const [newTaskText, setNewTaskText] = useState('');

  const addTask = () => {
    if (newTaskText.trim() !== '') {
      const newTask: Task = {
        id: tasks.length + 1,
        text: newTaskText,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setNewTaskText('');
    }
  };

  const toggleTaskCompletion = (taskId: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <View style={styles.container}>
      {tasks.map((task) => (
        <View key={task.id} style={styles.task}>
          <Text
            style={[styles.taskText, { textDecorationLine: task.completed ? 'line-through' : 'none' }]}
            onPress={() => toggleTaskCompletion(task.id)}
          >
            {task.text}
          </Text>
        </View>
      ))}
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TextInput
          style={styles.input}
          placeholder="Add a new task"
          value={newTaskText}
          onChangeText={setNewTaskText}
        />
        <Button title="Add" onPress={addTask} />
      </View>
    </View>
  );
};

export default TasksContainer;