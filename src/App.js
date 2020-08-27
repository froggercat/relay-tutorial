import React from 'react';
import './App.css';
import TodoList from './TodoList';
import { QueryRenderer, requestSubscription } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import RelayEnvironment from './RelayEnvironment';
// import { ConnectionHandler } from 'relay-runtime';

const AppAllTodosQuery = graphql`
  query AppAllTodosQuery {
    ...TodoList_viewer
  }
`

class App extends React.Component {
  componentDidMount() {
    const subscriptionConfig = {
      // #1
      subscription: graphql`
        subscription Apptodo_app_todos_connectionSubscription {
          todo_app_todos_connection {
            edges {
              node {
                complete
                id
                text
                user_id
                user {
                  id
                  name
                  todos_aggregate {
                    aggregate {
                      count(distinct: true)
                    }
                  }
                }
              }
            }
          }
        }
      `,
      onCompleted: data => console.log("subscription data", data),
      onError: error => console.error("subscription error", error)
    }

    this.subscription = requestSubscription(RelayEnvironment, subscriptionConfig)
  }

  componentWillUnmount() {
    this.subscription.dispose()
  }

  render() {
    return (
      <QueryRenderer
        environment={RelayEnvironment}
        query={AppAllTodosQuery}
        render={({ error, props }) => {
          if (error) {
            return <div>{error.message}</div>
          } else if (props) {
            return <TodoList viewer={props} />
          }
          return <div>Loading</div>
        }}
      />
    );
  }
}
export default App;