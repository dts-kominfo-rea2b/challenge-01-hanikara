// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca

// Monica Colors
const favColorMonica = ["Yellow", "Pink", "White", "Purple"];
let colorsMonicaSet = new Set(favColorMonica);
// Monica Restaurant
const favRestaurantMonica = ["Bento", "Sushi", "Pancake", "Eggy", "Tempura", "Bento", "Eggy", "Padang", "Tteok", "Sushi", "Sushi"];
let restaurantMonicaSet = new Set(favRestaurantMonica);
// Monica Education
const eduSdMonica = [{ name: "SD 01", city: "Jakarta", graduate: "2016" }];
const eduSmpMonica = [{ name: "SMP 02", city: "Jakarta", graduate: "2019" }];
const eduSmaMonica = [{ name: "SMA 03", city: "Tangerang", graduate: "" }];

// Wendy Colors
const favColorWendy = ["Blue", "Black", "Grey"];
const colorsWendySet = new Set(favColorWendy);
// Wendy Restaurant
const favRestaurantWendy = ["Tempura", "Bento", "Sushi", "Pancake", "Padang", "Katsu", "Geprek", "Pancake", "Eggy"];
const restaurantWendySet = new Set(favRestaurantWendy);
// Wendy Education
const eduSdWendy = [{ name: "SD 02", city: "Jakarta", graduate: "2010" }];
const eduSmpWendy = [{ name: "SMP 03", city: "Bogor", graduate: "2013" }];
const eduSmaWendy = [{ name: "SMA 01", city: "Surabaya", graduate: "2016" }];
const eduUnivWendy = [{ name: "Universitas Maju", city: "Tangerang", graduate: "" }];

const firstUser = [
  {
    name: "Monica",
    gender: "Female",
    age: 17,
    email: "monica@dingdong.com",
    favoriteColor: colorsMonicaSet,
    isHavePet: true,
    education: [eduSdMonica, eduSmpMonica, eduSmaMonica],
    favoriteRestaurant: restaurantMonicaSet,
  },
];
const secondUser = [
  {
    name: "Wendy",
    gender: "Male",
    age: 23,
    email: "wendy@dingdong.com",
    favoriteColor: colorsWendySet,
    isHavePet: false,
    education: [eduSdWendy, eduSmaWendy, eduSmaWendy, eduUnivWendy],
    favoriteRestaurant: restaurantWendySet,
  },
];

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [firstUser, secondUser];

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};
