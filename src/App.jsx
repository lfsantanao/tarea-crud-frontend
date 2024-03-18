import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { TaskFormPage } from "./pages/TaskFormPage";
import { TasksPage } from "./pages/TasksPage";
import { Toaster } from "react-hot-toast";
import img from './assets/fondo.jpg'

function App() {
  return (
    <BrowserRouter>
      <div style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', minHeight: '100vh' }}  className="container mx-auto">
        <Navigation />
        <Routes>
          {/* redirect to tasks */}
          <Route path="/" element={<Navigate to="/tasks" />} />
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/tasks/:id" element={<TaskFormPage />} />
          <Route path="/tasks-create" element={<TaskFormPage />} />
        </Routes>
        <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App;
