import getStatus from "../helpers/getStatus";

const Content = ( {todo, setIsEditMode, handleDelete} ) => {
  return (
    <>
      {/* getStatus: todo'nun durumuna göre span döndürür. */}
      {getStatus(todo.status)} {/** 6. yapılan **/}

      <span className="fw-bold">{todo.title}</span>

      <div className="btn-group">
        <button onClick={() => setIsEditMode(true)}className="btn btn-sm btn-primary">
          Düzenle
        </button>
        <button onClick={handleDelete} className="btn btn-sm btn-danger">
          Sil
        </button>
      </div>
    </>
  );
};
export default Content;
