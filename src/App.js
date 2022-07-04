import './App.css'

import { InfoContainer, ProjectsContainer} from './containers/imports'

function App() {
  return (
    <div className="container">
      <div className='info-container'>
        <InfoContainer />
      </div>
      <div className='projects-container'>
        <ProjectsContainer /> 
      </div>
    </div>
  );
}

export default App;
