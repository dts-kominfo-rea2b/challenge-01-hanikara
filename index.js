// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca

// Monica Colors
const favColorMonica = ["Yellow", "Pink", "White", "Purple"];
// Monica Restaurant
const favRestaurantMonica = ["Bento", "Sushi", "Pancake", "Eggy", "Tempura", "Bento", "Eggy", "Padang", "Tteok", "Sushi", "Sushi"];
// Monica Education
const eduMonica = [
  { name: "SD 01", city: "Jakarta", graduate: "2016" },
  { name: "SMP 02", city: "Jakarta", graduate: "2019" },
  { name: "SMA 03", city: "Tangerang", graduate: "" },
];

// Wendy Colors
const favColorWendy = ["Blue", "Black", "Grey"];
// Wendy Restaurant
const favRestaurantWendy = ["Tempura", "Bento", "Sushi", "Pancake", "Padang", "Katsu", "Geprek", "Pancake", "Eggy"];
// Wendy Education
const eduWendy = [
  { name: "SD 02", city: "Jakarta", graduate: "2010" },
  { name: "SMP 03", city: "Bogor", graduate: "2013" },
  { name: "SMA 01", city: "Surabaya", graduate: "2016" },
  { name: "Universitas Maju", city: "Tangerang", graduate: "" },
];

const firstUser = [
  {
    name: "Monica",
    gender: "Female",
    age: 17,
    email: "monica@dingdong.com",
    favoriteColor: new Set(favColorMonica),
    isHavePet: true,
    education: eduMonica,
    favoriteRestaurant: new Set(favRestaurantMonica),
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
    education: eduWendy,
    favoriteRestaurant: new Set(favRestaurantWendy),
  },
];

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [firstUser, secondUser];
console.log(users);


// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};
