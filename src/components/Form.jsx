import { v4 } from "uuid"
import axios from "axios"

const Form = ( {setTodos} )=>{

    // 7- form gönderildiğinde, formdan alınan bilgilerle, api'ye yeni bir eleman ekle
    const handleSubmit=(e)=>{
        e.preventDefault()

        // formdan verileri alma, formun ve selectin değerlerini al
        const title = e.target[0].value
        const status = e.target[1].value

        // inputu kontrol et, boşsa uyarı ver. input==="" da olurdu. return de yazdık ki fonk. artık çalışmasın
        if(!title){
            return alert("LÜTFEN BAŞLIK YAZINIZ !")
        }

        // veri tabanına eklenecek veriyi hazırla, obje şeklinde hazırlıyoruz, bizim veri tabanında o şekilde tutulmuş veriler
        const newTodo = {
            title: title,  // içinde title değeri olacak ve bu title, bizim yukarıda belirlediğimiz title'a eşit olacak
            status: status,  // içinde status değeri olacak ve bu status, bizim yukarıda belirlediğimiz status'a eşit olacak
            id: v4(),  // uuid'nin kendi benzersiz id oluşturma fonksiyonu
            date: new Date().toLocaleDateString() // bugünün tarihi olsun dedik
        }        
        
        // fetch("http://localhost:3000/todos",{
        //     method: "POST",
        //     body: JSON.stringify(newTodo)
        // }) 

        // axios,, // oluşturduğumuz todo'yu api'ye kaydet / veri gönderme isteğinin http metodlarında karşılığı POST
        axios.post("/todos", newTodo)
        /* 8.2- setTodos, en başta bileşene parametre olarak verildi. burada state'in içine fonksiyon yazma kullanımı sayesinde, state'in önceki değerini alacağız.
        bu fonksiyonun aldığı parametre sayesinde state'in son değerine erişebiliriz. dizi içinde ...prev diyerek dizinin sahip olduğu önceki elemanları aldık,
        newTodo'yu ekleyerek de yeni eklenenleri aldık. */
        .then(()=> setTodos((prev)=>[...prev, newTodo]))
        /* prev yerine todos da diyebiliriz daha mantıklı olur ! bu ikisinin yerlerini değiştirirsek yeni ekleneneler ekranda altta listelenmiş olur. */
        .catch(()=>alert("Üzgünüz Bir Sorun Oluştu :("))  

        /* ALTIN KURAL !! HER ZAMAN YAPTIĞIMIZ EKRAN GÜNCELLENMESİ, APİ İSTEĞİYLE BİRBİRİNE BAĞLI OLMALI
        ONDAN DOLAYI APİ İSTEĞİ BAŞARILI OLURSA .then() İLE NEWTODO'YU EKLEDİK */

        e.target[0].value=""
        e.target[1].value="select"
    }

    return(
        <form onSubmit={handleSubmit} className="d-flex justify-content-center gap-3 my-4">
            <input type="text" placeholder="ör: react projesi yap..." className="form-control shadow"/>
            
            <select className="form-select w-50 shadow">
                <option value="select" >Seçiniz...</option>
                <option value="important">Önemli</option>
                <option value="job">İş</option>
                <option value="daily">Günlük</option>
            </select>

            <button className="btn btn-primary">Gönder</button>
        </form>
    )
}
export default Form