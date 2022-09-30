import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './layout/Layout';
import { MyDictionary } from './pages/myDictionary/MyDictionary';

function App() {
  return (
    <Routes>

      <Route path="/" element={<Layout />}>
        <Route path='/' element={<Navigate to="mydictionary" />} />
        <Route path='mydictionary' element={<MyDictionary />} />

      </Route>

    </Routes>
  )
}

export default App;
