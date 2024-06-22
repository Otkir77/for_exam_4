// Examen JavaScript Amaliy savollar 

// 1-savol Arifmetik operatorla

//  5 sonini 2 ga bo'ling va qoldig`ini alertga chiqaring!

// разделить 5 на 2 и вывести остаток в алерт (использовать оператор 😵

// javob:Pasdan yozib keting kodini

// Javobi:
// let a =+ (5)
// let b =+ (2)
// alert(a % b)



// 2-savol  Math metodlari

// 1 dan 10 gacha bo'lgan random son yasang va alertga chiqaring

// сделать рандомное число от 1 до 10 и вывести в алерт

// Javob:Pasdan yozib keting kodini

// Javobi:
// let random_num = Math.floor(Math.random() * 10);
// alert(random_num)




// 3-savol Math metodlari

// 12.510 sonini butun songa aylantiring! 

// сделать число 12.510 целым

// ответ должен выйти 12

// javob: 12 chiqishi kerak!

// Javobi:
// let num = 12.510
// alert(Math.ceil(num));


// 4-savol function

// "MARS IT SCHOOL" sozini nechta harfdan iboratligini funksiya orqali topib va alertga chiqaring!.

// с помощью функции найти сколько букв в слове "MARS IT SCHOOL" и вывести в алерт

// Javob:Kodini yozib bering 

// Javobi:
// let text = "Mars IT school";

// function countLetters(str) {
//     let kesish = str.replace(/\s/g, '');
//     return kesish.length;
// }

// let a = countLetters(text);

// alert(`'${text}' so'zlarida ${a} ta harf mavjud `);



// 5-savol for loop

// "MARS IT SCHOOL" sozini javascript funksiyasi orqali 10 marta console.log ga chiqaring!

// С помощью функции вывести в консоль 10 раз слово "MARS IT SCHOOL"

// Javob:Kodini yozib bering


// Javobi:

// for (let i = 0; i < 10; i++) {
//     console.log('MARS IT SCHOOL');
    
// }





// 6-savol Array methods

// let harflar = ["a" , "b" , "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t",  "u" , "v" , "x" , "y" , "z" ]

// Shu arraydan foydalangan holda console.log ga o'zingizni ismigizni chiqaring

// С помощью этого массива вывести в консоль свое имя

// Javob:Kodini yozib bering




// 7-savol if else

// Promtdan yosh kiriting agar yoshi 18 yoshdan katta bo'lsa console da Siz balag'ot yoshiga yetgansiz , aks holda  siz balog'at yoshiga yetmagansiz  // agar yoshi 18 yoshga teng bolsa  balog'at yoshi muborak deb console da chiqarish kerak

// Работа с if else, проверка возраста больше 18 лет, меньше 18 лет или равен 18 годам

// Javob:Kodini yozib bering

// Javobi:

// let a = prompt('Yoshingizni kiriting')

// if ( a > 18) {
//     console.log('Siz balogat yoshiga yetgansiz')
// } else  {
//     console.log('Siz balogat yoshiga yetmagansiz')
// }


// 8-savol String metodlari vs Array metodlari

// Promtdan ismigizni kiriting va console.log da ismigizni teskarisini chiqaring

// Ввести в промпт свое имя и вывести в консоль его наоборот

// Javob:Kodini yozib bering

// Javobi:
// let ism = prompt("Ismingizni kiriting:");

// let ism_2 = ism.split('').reverse().join('');

// console.log(ism_2);


// 9-savol Array metodlari

// let sonlar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// shu arraydagi juft sonlarni console ga chiqaring
// найти и вывести четные массивы в консоль, с помощью методов

// Javob :Kodini yozib bering

// Javobi:

// let sonlar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let evnam = []
// for (let i = 1; i <= 10; i++) {
//         if (i % 2 === 0) {
           
//             evnam.push(i);
//         }
//     }
//     console.log(sonlar);
//         console.log(evnam);

