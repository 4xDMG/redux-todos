import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

const AddTodoFunc = ({ dispatch }) => {
  let input;

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value));
          input.value = '';
        }}
      >
        <input ref={(node) => { input = node; }} />
      </form>
    </div>
  );
};

const AddTodo = connect()(AddTodoFunc);

export default AddTodo;
