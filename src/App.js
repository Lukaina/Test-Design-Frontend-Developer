import './App.css';
import { Card, CardTitle, CardText, CardActions, CardMenu, FABButton, Icon } from 'react-mdl'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

function App() {
  return (
    <div>
      <Card shadow={0} className="card-container">
        <CardTitle className="card-title">
          Helsinki.
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Mauris sagittis pellentesque lacus eleifend lacinia...
          </CardText>
        </CardTitle>
        <CardActions className="card-actions" border>
          <FABButton mini>
            <Icon name="add" />
          </FABButton>
        </CardActions>
        <CardMenu className="card-menu">
          <ArrowBackIcon/>
        </CardMenu>
      </Card>
    </div>
  );
}

export default App;
