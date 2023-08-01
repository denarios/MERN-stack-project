import './App.css';
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import HomePage from './component/homepage/homepage';
import Login from './component/login/login';
import Register from './component/register/register';
import ProblemName from './component/problem/problem';
import ProblemIdPage from './component/problemid/problemid';
import ProblemSubmission from './component/problemSubmitted/problemSubmitted';
import ProblemSubmissionCode from './component/problemSubmission/problemSubmission';
function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={< HomePage/>}/>
          <Route path='/login' element={< Login/>}/>
          <Route path='/register' element={< Register/>}/>
          <Route path='/problem' element={< ProblemName/>}/>
          <Route path='/problem/:id' element={< ProblemIdPage/>}/>
          <Route path='/problem/:id/submission' element={< ProblemSubmission/>}/>
          <Route path='/problem/submission/:id' element={< ProblemSubmissionCode/>}/>
        </Routes>
      </Router>
    </div>
  );
}
export default App;