### Vite Proje İçin Adımlar ###

- `npm create vite kalsör_ismi` > ile belirtilen klaör oluşturulup içerisine react projesi oluşturulur.

- `npm create vite .` > bulunduğumuz klasör içerisine react projesi oluşturur. 

- `npm install` > node modüles indiriliyor.

- `npm run dev` > projeyi ayağa kaldırma


# Vite Artıları

- Proje oluşturma / ayağa kaldırma gibi işlemeri vite ile çok daha hızlı gerçekleştirebiliyoruz. 

- Gereksiz kodlardan ve dosyalardan arındırılmış bir react projesi oluşturur. 

- Build işlemi çok daha hızlı


# Değişenler

- App.js ve index.js yerini App.jsx ve main.jsx aldı.

- Projeyi ayağa kaldırırken `npm start` yerine `npm run dev` yazacağız.



###  JSON-SERVER  ###

- Kendi pc'mizde çalışan fake API oluşturmaya yarar.

- Kendimizi geliştirmek için yazdığımız uygulamaların backend ihtiyacını karşılar.

- Hızlı Prototipleme: Backend Dev. api'ı oluşturduğu süreçte, uygulamanın temel öelliklerini geliştirebilmek adına geçici bir süre kullanılabilir.

- Json-server ile oluşturduğumuz api'ye bütün http metotları ile istek atabiliriz.

- Yaptığımız istek sonunda eğer verilerde bir değişim olursa anlık olarak db.json'da güncellenir.

# kurulum:

1. `npm i json-server`
2. db.json dosyası oluştur ve düzenle
3. package.json'a, server'ı ayağa kaldırma komutu yaz
4. komutu çalıştır.

# put - patch isteği farkı:

- **put** isteğinde güncelleme yapacağımız zaman, elemanın bütün verilerini göndermemiz gerekiyor, ancak **patch** isteğinde sadece güncellenecek veriyi gönderiyoruz.


*NOT*: iki proje aynı portta çalışıp sıkıntı çıkarsa ``package.json`` içindeki ``server`` diyerek yazdığımız komutu güncellememiz lazım. `json-server --watch db.json --port 3030` diyoruz. Yani diyoruz ki: *db.json'ı 3030. portta izle.* Sonra oluşturduğumuz *servera* terminalden gelip ctrl+c ile iptal ediyoruz. sonra tekrar npm run server ile ayağa kaldırıyoruz. yeni belirlediğimiz 3030. portta çalışmaya başlayacak.


# CRUD (Create Read Update Delete)

- oluşturma, okuma, düzenleme, silme işlemleri


### AXIOS ###

- HTTP istekleri için modern çözüm

- Yerleşik değil, paketi indirmek gerekli

- `npm i axios` 

- İstekelerde fetche göre daha az kod yazarız.

- Hataları daha detaylı bir şekilde gösterir.

- *Alınan veri için .json() metodu ile yaptığımız formatlama işlemini yürütür.*

- *Veri gönderirken otomatik olarak stringify yapar ve veriyi otomatik olarak body kısmına ekler.*

## GET Karşılaştırma
# Fetch:
`
fetch("http://localhost:3000/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data));
`
# Axios:
`
axios.get("http://localhost:3000/todos")
    .then((res)=> setTodos(res.data))
`


## POST Karşılaştırma
# Fetch:
`
fetch("http://localhost:3000/todos",{
    method: "POST",
    body: JSON.stringify(newTodo)
})
`
# Axios:
`
axios.post("http://localhost:3000/todos", newTodo)
    .then() .catch() yine var
`


## DELETE Karşılaştırma
# Fetch:
`
fetch("http://localhost:3000/todos/4",{
    method: "DELETE",
})
`
# Axios:
`
axios.delete(`/todos/${todo.id}`)
`

