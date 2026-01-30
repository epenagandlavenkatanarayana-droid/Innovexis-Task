import { useEffect, useState } from "react";
import API from "../api/api";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const load = async () => {
    const res = await API.get("/tasks");
    setTasks(res.data);
  };

  const add = async () => {
    await API.post("/tasks", { title });
    setTitle("");
    load();
  };

  const del = async (id) => {
    await API.delete(`/tasks/${id}`);
    load();
  };

  useEffect(() => { load(); }, []);

  return (
    <div className="container mt-4">
      <h3>Dashboard</h3>

      <div className="input-group mb-3">
        <input className="form-control" value={title} onChange={e=>setTitle(e.target.value)} />
        <button className="btn btn-success" onClick={add}>Add</button>
      </div>

      <ul className="list-group">
        {tasks.map(t => (
          <li key={t.id} className="list-group-item d-flex justify-content-between">
            {t.title}
            <button className="btn btn-sm btn-danger" onClick={()=>del(t.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
