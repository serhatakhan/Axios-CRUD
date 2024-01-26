# Server CRUD

Bu React uygulaması, JSON Server kullanarak yerel bir sunucuyla etkileşimde bulunarak, tamamen işlevsel bir CRUD (Oluştur, Oku, Güncelle, Sil) sistemini içerir. Uygulama, bir liste içindeki görevleri yönetmenize ve bu görevler üzerinde CRUD işlemleri gerçekleştirmenize olanak tanır.

## Özellikler

`Axios Yapılandırması:` Axios.defaults.baseURL kullanılarak yapılan tüm isteklerin başlangıç ​​URL'si sabit tutulmuştur.

`UseEffect Kullanımı:` useEffect hook'u, bileşen yüklendiğinde veya sayfa değiştikçe veri çekmek için kullanılmaktadır.

`Durum Yönetimi:` useState hook'u, uygulama durumunu yönetmek için kullanılmaktadır. todos durumu, alınan todo öğelerini saklar ve setTodos durumu güncellemek için kullanılır. Sayfalama için ise page ve maxPageCount durumları kullanılmaktadır.

`Form Bileşeni:` Uygulama, yeni görev eklemek için bir form bileşeni içermektedir. Yeni görev eklendikten sonra verilerin state'e aktarılması için setTodos fonksiyonu prop olarak iletilir.

`Yükleniyor Bileşeni:` Verilerin çekilmesi beklenirken basit bir Loader bileşeni görüntülenir.

`Liste Öğeleri:` Todo öğeleri, her bir todo için ListItem bileşeni kullanılarak gösterilir. Her bir todo öğesinin bir silme düğmesi bulunur ve silme işleminden sonra liste güncellenir.

`Sayfalama Kontrolleri:` Sayfalama kontrolleri, önceki ve sonraki sayfalara gitmek için düğmeler içerir. Mevcut sayfa numarası görüntülenir ve düğmeler, sayfa 1'in altına gitmeyi veya maksimum sayfa sayısını aşmayı önlemek için uygun şekilde devre dışı bırakılır.

## Kullanılan Teknolojiler ve Harici Kütüphaneler

1. React.js
2. Axios
3. JSON-Server
4. UUID
5. Bootstrap

## Link

https://axios-crud-sa.vercel.app/

## Ekran Gifi

![kayt1-ezgif com-video-to-gif-converter](https://github.com/serhatakhan/Axios-CRUD/assets/147662915/7f9e55b2-6fcc-4cd0-9a23-20d5439c84a1)

