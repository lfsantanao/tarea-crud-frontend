import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <div className="flex justify-between py-3 items-center">
      <Link to="/tasks">
        <h1 className="font-bold text-3xl mb-4">Mis Tareas - App</h1>
      </Link>
      <button className="bg-green-400 p-3 rounded-lg">
        <Link to="/tasks-create">Crear Tarea</Link>
      </button>
    </div>
  );
}
