import { useState } from 'react';
import Dashboard from './components/Dashboard';
import Login from './components/Login'; // Импортируем нашу страницу авторизации

function App() {
  // Меняем начальное состояние на 'login', чтобы первой открывалась авторизация.
  // И добавляем функцию setCurrentPage для смены состояния.
  const [currentPage, setCurrentPage] = useState('login');

  return (
    <>
      {/* Если состояние 'login', показываем компонент Login. 
          При вызове onLogin меняем состояние на 'dashboard' */}
      {currentPage === 'login' && <Login onLogin={() => setCurrentPage('dashboard')} />}
      
      {/* Если состояние 'dashboard', показываем Dashboard */}
      {currentPage === 'dashboard' && <Dashboard />}
    </>
  );
}

export default App;
