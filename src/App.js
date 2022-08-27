import { Avatar, Button, Pane, Text, majorScale } from 'evergreen-ui'
import "./App.css";
import Version from './components/Version';

function App() {
  

  return (
    <div className="App">
      <div className="sidebarWrapper">
        <Pane marginX={majorScale(2)} marginY={majorScale(2)}>
          <Avatar
            name="Shane Connor"
            size={70}
            color="blue"
            shape="square"
            className="avatar"
          />

          <ul>
            <li>User Profile</li>
            <li>Focus</li>
            <li>Level 10 Stats</li>
            <li>To Do List</li>
            <li>Preferences</li>
          </ul>
        </Pane>
        <Pane marginX={majorScale(2)}>
          <Version />
        </Pane>
      </div>
      <div className="workspaceWrapper">
        <Pane marginX={majorScale(2)} marginY={majorScale(2)}>
          <Text>Ten bars go in here.</Text>
          <Button appearance="primary">click</Button>
        </Pane>
      </div>
    </div>
  );
}

export default App;
