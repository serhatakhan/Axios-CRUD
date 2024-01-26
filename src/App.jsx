import { useEffect, useState } from "react";
import Form from "./components/Form";
import Loader from "./components/Loader";
import ListItem from "./components/ListItem";
import axios from "axios";

// varsayılan olarak baseUrl ekle
// yapılan bütün isteklerin başındaki api url'sini belirle
axios.defaults.baseURL = `http://localhost:3000`


function App() {
  // 2- istek sonucu elde ettiğimiz veriyi return içinde kullanmak için state kullanıyoruz
  const [todos, setTodos] = useState(null);
  // 12- sayfalama için state tutmamız gerekiyor. 
  const [page, setPage] = useState(1)
  // 13- maximum sayfa sayısını tuttuk
  const [maxPageCount, setMaxPageCount] = useState()

  // 1- kullanıcı girdiğinde(ekran yüklendiğinde) veri çekme isteği yapılsın, yani bileşen ekrana basıldığında
  useEffect(() => {
    // api'den todo verilerini alır
    axios.get("/todos", {
      timeout:3000,
      timeoutErrorMessage: "zamanaşımı",
      // json-server'dan gelen özellikler
      params:{
        _page:page,
        _per_page: 7
      }
    })
    .then((res)=> {
      setMaxPageCount(res.data.pages) //13.adımda state'in değerine gelen cevaptaki pages değerini verdik.
      setTodos(res.data.data)})  //setTodos ile state'i güncelledik // 12.adıma geldiğimizde setTodos(res.data.data) buraya bir .data daha ekledik. eskiden 1 tane .data vardı sonra kontrol ettik 1 tane daha .data gelmiş o yüzden res.data.data diyerek ulaşabildik.
    .catch((err)=> {
      console.log(err)
      if(err.message === "zamanaşımı"){
        alert("istek zamanaşımına uğradı")
      }
    })
  }, [page]); // 12.adımda sayfalamada yani, useEffect her değiştinde değil sayfa her yenilendiğinde çalışmasını istedik o yüzden

  return (
    <div className="container p-5">
      <h2 className="text-center">
        Server <span className="text-warning">CRUD</span>
      </h2>

      {/* 8.1- veri tabanına eklediklerimiz ekranda görünmüyor. sebebi, ekleme yapıldıktan sonra veriler state'e aktarılmadı ve 
      useEffect sadece ekrana basılma anında çalıştığı için kullanıcı sayfayı yenilemeden yapılan değişiklikler görünmüyor. newTodo, todos'a eklenmeli. Önce setTodos'u(state'i güncellemeye yarıyor) Form bileşenine prop olarak veriyoruz ki form bileşeninde erişebilelim */}
      <Form  setTodos={setTodos}/>

      {/* 3- todos dizisindeki her bir eleman için listeye bir eleman ekle */}
      <ul className="list-group">
        {/* veriler yoksa loader bas */}
        {!todos && <Loader/>}

        {/* ? ile todos null değilse map işlemi yürüt diyoruz. sayfa yenilenince gelen hata gidiyor*/}
        {todos?.map((todo) => (
          // react'ın uyarı vermemesi için benzersiz bir key propu ekledik ve todo'yu prop olarak gönderdik. todoData={todo} da yazabilirdik. parantezin içi döndüğümüz todo'nun verileri yani. / 9.adım için de setTodos'u prop olarak yolladık.
          <ListItem key={todo.id} todo={todo} setTodos={setTodos} todos={todos} />
        ))}
      </ul>

      <div className="d-flex justify-content-between align-items-center my-4">

        <button disabled={page===1} onClick={()=> setPage(page-1)} className="btn btn-primary"> {"< Geri"} </button>

        <span className="fw-bold">{page}</span>

        <button disabled={page===maxPageCount} onClick={()=> setPage(page+1)} className="btn btn-primary"> {"İleri >"} </button>
      </div> 
      {/* 13.adımda son olarak da disabled={page===maxPageCount} yaparak sayfa sayısı max sayfa sayısına eşit olduğunda ileri butonu inaktif olsun dedik */}

    </div>
  );
}

export default App;
