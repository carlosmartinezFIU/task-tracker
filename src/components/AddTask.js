import { useState } from 'react';

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) =>{
    e.preventDefault();

    if(!text){
      alert("Please add a task")
    }

    onAdd({ text, day, reminder})

    setText('');
    setDay('');
    setReminder(false);

  }


  return (
    <form className="add-form" onSubmit={onSubmit}>
        <div className="form_control">
            <label>Task</label>
            <input type="text" placeholder="Add Task" value={text} onChange={(e) => setText(e.target.value)}/>
        </div>

        <div className="form_control">
            <label>Day & Time</label>
            <input type="text" placeholder="Add Day & Time" value={day} onChange={(e) => setDay(e.target.value)}/>
        </div>

        <div className="form_control_check">
            <label>Set Reminder</label>
            <input type="checkbox" value={reminder} onChange={(e) => setReminder(e.target.value)}/>
        </div>

        <input type="submit" value="Save Task" className="bottom_submit_btn"/>
    </form >
  )
}

export default AddTask