import './App.css';
import Dashboard from './layouts/Dashboard';
import Navi from './layouts/Navi';
import 'semantic-ui-css/semantic.min.css' //minify edilmis hali
//kodlar asla html değildir.
import {Container} from 'semantic-ui-react'
function App() {
    return (
        <div className="App" >
            <Navi/>
            <Container className ="main">

             <Dashboard></Dashboard>
            </Container>
          

        </div>
            );
}

            export default App;