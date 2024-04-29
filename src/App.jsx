import { useState } from "react"
import List from "./List";
import Alert from "./Alert";

const App = () => {

  const [name, setName] = useState('');
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] =useState(null);
  const [alert, setAlert] =useState({show:false, msg:'', type:''});
  console.log(name)

  const handleSubmit = (e) => {
    e.preventDefault();

  } 

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert />}
        <h3>Grocery Bud</h3>
        <div className="form-control">
          <input type="text" className="grocery" placeholder="e.g. Eggs"
          value={name} onChange={(e) => setName(e.target.value)} />
          <button className="submit-btn" type="submit">
            {isEditing ? 'edit' : 'submit'}
          </button>
        </div>
      </form>
      <div className="grocery-container">
        <List />
        <div className="clear-btn" >clear items</div>
      </div>
    </section>
  )
}
export default App