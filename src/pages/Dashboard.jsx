import { useEffect, useState } from "react";
import { db, ref, onValue, push, remove, update } from "../firebase";

function Dashboard() {
  const [snacks, setSnacks] = useState([]);
  const [newSnack, setNewSnack] = useState({
    title: "",
    category: "",
    price: "",
    rating: "",
  });
  useEffect(() => {
    const snackRef = ref(db, "snacks");
    onValue(snackRef, (snapshot) => {
      const data = snapshot.val() || {};
      const snackList = Object.entries(data).map(([Id, item]) => ({
        id,
        ...item,
      }));
      setSnacks(snackList);
    });
  }, []);

  const handleAdd = () => {
    const id = `snk_${Date.now()}`;
    push(ref(db, "snacks"), {
      id,
      ...newSnack,
      price: parseFloat(newSnack.price),
      rating: parseFloat(newSnack.rating),
      createdAt: Date.now(),
    });
    setNewSnack({ title: "", category: "", price: "", rating: "" });
  };
  const handleDelete = (id) => {
    remove(ref(db, `snack/${id}`));
  };
  return (
    <div>
      <h2>SnackShelf</h2>
      <input
        placeholder="Title"
        value={newSnack.title}
        onChange={(e) => setNewSnack({ ...newSnack, title: e.target.value })}
      />
      <input
        placeholder="Category"
        value={newSnack.category}
        onChange={(e) => setNewSnack({ ...newSnack, category: e.target.value })}
      />
      <input
        placeholder="Price"
        value={newSnack.price}
        onChange={(e) => setNewSnack({ ...newSnack, price: e.target.value })}
        type="number"
      />
      <input
        placeholder="Rating"
        value={newSnack.rating}
        onChange={(e) => setNewSnack({ ...newSnack, rating: e.target.value })}
        type="number"
      />
      <button onClick={handleAdd}>Add Snack</button>
      <ul>
        {snacks.map((snack) => (
          <li key={snack.id}>
            {snack.title} -${snack.price}
            <button onClick={() => handleDelete(snacks.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Dashboard;
