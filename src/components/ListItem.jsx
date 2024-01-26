import { useState } from "react";
import formatDate from "../helpers/FormatDate";
import getStatus from "../helpers/getStatus";
import axios from "axios";
import Content from "./Content";
import EditMode from "./EditMode";

const ListItem = ({ todo, setTodos, todos }) => {
  // console.log(todo)

  // KULLANICI ETKİLEŞİMİNE GÖRE EKRANDA BİR DEĞİŞİM OLACAKSA BU DURUMUN STATE'İNİ TUTMALIYIZ !!
  // 10- düzenleme modu için koşullu renderlama yapacağız bunun için bir state tuttuk
  const [isEditMode, setIsEditMode] = useState(false);

  // 9- silme butonuna tıklanınca çalışır
  const handleDelete = () => {
    // 9.1- veriyi api'den sil
    axios
      .delete(`/todos/${todo.id}`)

      // 9.2- veriyi state'den sil, 8.adımdakine benzer işlemleri yapacağız, aynı sorun. yaptığımız değişkilik ekrana yansımıyorsa state'i güncellemedik veya güncelelrken hata yaptık anlamına gelebilir.
      // diziden eleman kaldırmak istiyorsak filter() kullanabiliriz !!
      .then(() =>
        setTodos((todos) => todos.filter((item) => item.id !== todo.id))
      );
    //todos yazdığımız kısım, daha önce prev yazdığım olay yani. aynısı. burada todos dedik
    /* setTodos metoduna bir fonksiyon oluşturduğumuz zaman önceki state'in verisine erişebiliyoruz.
      bunları filtreledik ve her birine item dedik. item'in id'si benim ekrana bastığım todo'nun id'sine
      eşit değilse o zaman bunları aldık. */
    /**
      * todos, mevcut todo listesini temsil eder. Yani, bu noktada todos içindeki veri, handleDelete fonksiyonunun çağrıldığı anki todo listesidir.
      * filter fonksiyonu, bir dizi üzerinde belirli bir koşulu sağlayan öğeleri içeren "yeni bir dizi" döndürür.
      * item.id !== todo.id Koşulu: Burada, her bir todo öğesinin id özelliği, silinmek istenen todo öğesinin id'sinden farklı olup olmadığını kontrol ederiz. 
      Yani, filtreleme işlemi sonucu, silinmek istenen todo öğesi hariç, diğer tüm todo öğelerini içeren bir dizi elde ederiz. Yani, bu ifade, todo.id'si ile eşleşmeyen (silinen) todo öğelerini içeren yeni bir todo listesi oluşturur.
      **/
  };

  // 11- form gönderilince çalışır GÜNCELLEME OLAYI
  const handleEdit = (e) => {
    e.preventDefault();

    // inputlardaki verileri al
    const newStatus = e.target[0].value;
    const newTitle = e.target[1].value;

    // api'daki ilgili todo'yu güncelle, put bütün değerleri günceller, bir iki değeri güncellemek istersek patch/ikinci değer olarak da güncellemek istediğimiz değerleri vereceğiz
    axios
      .patch(`/todos/${todo.id}`, { title: newTitle, status: newStatus })
      // api isteği başarılı olursa arayüzü güncelle
      .then(() => {
        // arayüzü güncelle
        // state'deki eski todo'yu kaldır yerine yenisini koy (akla ilk gelen yol ...prev, newTodo , ama bu yeni bir eleman eklemek için ve STATE'IN SAHİP OLDUĞU DEĞERE ERİŞMEK İÇİN KULLANIYORDUK. BİZ VAR OLANI GÜNCELLEMEK İSTYORUZ O YÜZDEN BAŞKA BİR YOL İZLEYECEĞİZ )
        // todo'nun title ve statusunu güncelle / öncekileri aldık yenileri de güncelledik
        const updated = { ...todo, status: newStatus, title: newTitle };

        // dizideki eski todo'yu kaldır yerine yenisini koy
        // bu koşulda şunu söyledik: EĞER Kİ ELEMAN, GÜNCELLENECEK ELEMAN İSE O ZAMAN DİZİYE GÜNCEL HALİNE (updated) EKLE
        // DEĞİLSE DİZİDEKİ HALİNİ (todo) KORU DEDİK. map'i burada diziden eleman çıkartıp yerine yeni eleman eklemek için kullandık
        const newTodos = todos.map((todo) => todo.id === updated.id ? updated : todo
        );

        // veriyi state'e aktar yani state'i güncelle
        setTodos(newTodos);
      });

    // düzenleme modunu kapat
    setIsEditMode(false);
  };


  //not: js de render için oluşturduğumuz fonksiyonu ekrana tekrar basıyorken, react o işi kendisi arka planda hallediyor, react'ta state'i güncelliyince bileşen otomatik olarak render oluyor


  // 4- li'ler düzenlendi.
  return (
    <li className="relative list-group-item p-3 d-flex justify-content-between align-items-center gap-3">
      {!isEditMode ? (
        // 10.1- kod kalabalığı olmaması için Content bileşeni oluşturup oraya attık. İlgili propları da yolladık !!
        <Content todo={todo} handleDelete={handleDelete} setIsEditMode={setIsEditMode}  />
      ) : (
        <EditMode todo={todo} setIsEditMode={setIsEditMode} handleEdit={handleEdit} />
        // 10.2- edit mode bileşeni oluşturduk ve propları yolladık,, handleEdit propunu sırası geldiğinde yolladık
      )}
      <span className="date">{formatDate(todo.date)}</span> {/** 5. yapılan **/}
    </li>
  );
};
export default ListItem;
