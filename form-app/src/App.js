import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './templates/Landing';
import Form from './templates/Form';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Landing />}></Route>
      <Route path="/form" element={<Form />}></Route>
    </Routes>
  </Router>
);

export default App;
