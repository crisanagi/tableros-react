import './App.css';
import TableauEmbebed from './components/TableauEmbebed.jsx';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
/* import TableroCirWireless from './components/TableroCirWireless'; */

function App() {
  return (
    <div className="App">
     {/*  <TableroCirWireless/> */}
      <TableauEmbebed/>
    </div>
  );
}

export default App;
