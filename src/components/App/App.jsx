import { Routes, Route, Navigate } from 'react-router-dom';
import SurveyForm from '../Survey/Survey.jsx';
import RequireAuth from '../Auth/RequireAuth.jsx';
import Login from '../Login/Login.jsx';

function App() {
    return (
        <Routes>
            <Route path='*' element={<Navigate to="/encuesta-estudiante" replace />} />
            <Route exact path='/signin-code' element={<Login />} />
            <Route element={<RequireAuth />}>
                <Route exact path='/encuesta-estudiante' element={<SurveyForm />} />
            </Route>
        </Routes>
    );
}

export default App;
