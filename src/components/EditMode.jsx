const EditMode = ({ todo, setIsEditMode, handleEdit }) => {
  //   console.log(todo);

  return (
    <form onSubmit={handleEdit} className="d-flex justify-content-between align-items-center w-100 gap-3">
      <select defaultValue={todo.status} className="form-select shadow w-25">
        <option disabled>Seçiniz..</option>
        <option value="important">Önemli</option>
        <option value="daily">Günlük</option>
        <option value="job">İş</option>
      </select>

      <input defaultValue={todo.title} className="form-control w-50 shadow" type="text" />
      {/* 10.3- hem select hem de inputun içi değişmiyor. buradaki value'larda ne yazyorsa onu gösteriyor ondan dolayı değişmiyor. */}
      {/* yeni değerleri ayrı bir state'de tutabiliriz, bu ilk çözüm yolu*/}
      {/*** bunun dışında value için value yerine defaultValue yazıldığında bu başlangıç değeri anlamına gelecek. normal value gibi sabit olmayacak. ve artık değiştirilebilir ***/}

      <div className="btn-group">
        <button className="btn btn-sm btn-info" type="submit" >Onayla</button>
        <button onClick={()=> setIsEditMode(false)} type="button" className="btn btn-sm btn-secondary">İptal</button>
        {/*10.4-  iptale tıklanınca önceki haline dönmesini istediğimiz için diğer bileşenden setIsEditMode'i prop olarak yolladık. burada aldık ve değeri false olduğunda ilk haline dönüyor */}
      </div>
      {/* button type'ları yazdık yoksa "form submission canceled cause the form is not connected" hatası alıyorduk consolda */}
    </form>
  );
};

export default EditMode;
