/* 6- bir değişkenin alabileceği farklı değerler üzerinde koşullar yazmak istiyorsak
 if else dışında switch case daha iyi bir seçenek */
const getStatus = (status) => {
  switch (status) {
    case "important":
      return <span className="badge bg-danger">Önemli</span>;
    case "job":
      return <span className="badge bg-warning">İş</span>;
    case "daily":
      return <span className="badge bg-success">Günlük</span>;
    default:
      return <span className="badge bg-secondary">Varsayılan</span>; {/* hiçbirine girmiyorsa burası çalışacak */}
  }
};

export default getStatus;
