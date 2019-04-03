import React, { Component } from 'react';
import { Button, Card, Row, Col, Input, List } from 'antd';
import { withFormik, Form } from 'formik';

class App extends Component {
  state = {
    todo: ['Help people', 'Eat sausages', 'Peepee']
  };

  renderTodos() {
    this.state.todo.map(todo => todo);
  }

  render() {
    const { handleChange } = this.props;
    return (
      <>
        <Row type="flex" justify="center">
          <Col span={6}>
            <Card title="Default size card">
              <List
                dataSource={this.state.todo}
                renderItem={item => <li>{item}</li>}
              ></List>
              <Form>
                <Input
                  name="todoTitle"
                  type="text"
                  placeholder="Something to do!"
                  onChange={handleChange}
                />
                <Button htmlType="submit">Add Todo</Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </>
    );
  }
}

const FormikTodoForm = withFormik({
  mapPropsToValues() {
    return {
      todoTitle: ''
    };
  },
  handleSubmit({ todoTitle }) {
    console.log(todoTitle);
  }
})(App);

export default FormikTodoForm;
