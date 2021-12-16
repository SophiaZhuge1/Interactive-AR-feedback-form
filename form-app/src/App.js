import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './templates/Landing';
import Question1 from './templates/Form/1';
import Question2 from './templates/Form/2';
import EndScreen from './templates/Form/end';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Landing />}></Route>
      <Route path="/form/1" element={<Question1 />}></Route>
      <Route path="/form/2" element={<Question2 />}></Route>
      <Route path="/form/3" element={<EndScreen />}></Route>
    </Routes>
  </Router>
);

export default App;
