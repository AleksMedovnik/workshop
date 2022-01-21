import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Level_1 from './components/Level_1/Level_1';
import Menu from './components/Menu/Menu';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<Menu />} />
                <Route path='level_1/*' element={<Level_1 />} />
            </Routes>
        </div>
    );
}

export default App;
