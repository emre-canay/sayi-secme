let rastgele = Math.trunc(Math.random() * 100);
// console.log(rastgele);
let sayac = 1;

do {
  let sayi = +prompt(
    `Lütfen 0-100 arasındaki sayıyı tahmin edin. ${sayac}. Tahmin:`
  );
  if (sayi >= 100 && sayi <= 0) {
    alert(`0-100 arasında bir sayı yazınız`);
  } else if (sayi > rastgele) {
    alert(`Daha küçük bir sayı tahmin edin`);
  } else if (sayi < rastgele) {
    alert(`Daha büyük bir sayı tahmin edin`);
  } else if (sayi == rastgele) {
    alert(`Tebrikler ${sayac}. hakkınızda buldunuz.`);
    break;
  } else {
    console.log("else");
  }
  sayac++;
} while (sayac <= 5);
if (sayac == 6) {
  alert(`kazanamadınız tahmin edemediğiniz sayı: ${rastgele}  `);
}
