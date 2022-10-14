const Task = ({ taskId, title, text, onDelete }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{text} <button className="btn-del-task" onClick={() => onDelete(taskId)}>X</button></p>
    </div>
  );
};

export default Task;
