import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './layout/Layout';
import { AddWords } from './pages/addWords/AddWords';
import { MyDictionary } from './pages/myDictionary/MyDictionary';
import { Practice } from './pages/practice/Practice';
import { QuizResult } from './pages/quizResult/QuizResult';

function App() {
  return (
    <Routes>

      <Route path="/" element={<Layout />}>

        <Route path='/' element={<Navigate to="mydictionary" />} />

        <Route path='mydictionary' element={<MyDictionary />} />

        <Route path='addwords' element={<AddWords />} />

        <Route path='practice' element={<Practice />} />

        <Route path='quizresult' element={<QuizResult />} />

      </Route>

    </Routes>
  )
}

export default App;
