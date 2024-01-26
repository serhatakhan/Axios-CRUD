// 5- tarihi alır ve geriye ay/gün formatında döndürür.
const formatDate = (dateStr) => {
  // metin formatındaki tarihi, aralardaki çizgiye göre parçalara ayırdık.
  const date = dateStr.split(".");

  // formatlayıp döndür, return etmek istediğimiz veri, yani fonk. çağrılınca çalışacak olan veri
  return date[0] + "/" + date[1];
};

export default formatDate;
