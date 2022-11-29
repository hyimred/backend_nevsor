import { Get, Controller, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Render('index')
  root() {
    return { message: randomGen() };
  }
}

function randomGen() {
  var list = "";
  var Rendszeres = [
    "Balogh Richard Roland",
    "Bartalos Emese",
    "Boros Bence",
    "Fehér Péter",
    "Karvas Ádam",
    "Kiss Bence",
    "Kiss Dávid",
    "Molnár Gábor",
    "Nagy Tamás",
    "Orosz Gábor",
    "Sváb Zoltán",
    "Szabo Szabolcs Richárd",
    "Szeberényi Márk",
    "Szekerka Ernó Márk",
    "Tótpál István"
  ];

  var Szoftveres = [
    "Csák Patrik",
    "Deli Gábor",
    "Fekete Dániel Zsolt",
    "Fekete Edina",
    "Hoós Roland Arnold",
    "Juhász Csenge",
    "Kállai Bertalan Gábor",
    "Kecseti Péter",
    "Kerecsényi Márk",
    "Kótai Dániel",
    "Krity Lorinc",
    "Ludvig Balázs Sándor",
    "Matuska Alex",
    "Palotás Mihály",
    "Peterman Mark Balázs",
    "Radeczki Krisztián Norbert",
    "Rimóczi Dániel",
    "Szabó Bence",
    "Varga Szabolcs",
    "Várszegi Ádám"
  ];

  if ((Szoftveres.length + Rendszeres.length) % 2 != 0) {

    Szoftveres.sort(function () { return 0.5 - Math.random(); }); // shuffle arrays
    Rendszeres.sort(function () { return 0.5 - Math.random(); });

    while (Szoftveres.length) {
      var name1 = Szoftveres.pop(), // get the last value of arr1
        name2 = Rendszeres[0] == name1 ? Rendszeres.pop() : Rendszeres.shift();
      //        ^^ if the first value is the same as name1, 
      //           get the last value, otherwise get the first

      list += name1 + ' - ' + name2;
      list += '<br>';
    }
    var name1 = Szoftveres.pop();
    list += "<br>Egyedül maradt: " + name1;
    return list;
  } else {

    Szoftveres.sort(function () { return 0.5 - Math.random(); }); // shuffle arrays
    Rendszeres.sort(function () { return 0.5 - Math.random(); });

    while (Szoftveres.length) {
      var name1 = Szoftveres.pop(), // get the last value of arr1
        name2 = Rendszeres[0] == name1 ? Rendszeres.pop() : Rendszeres.shift();
      //        ^^ if the first value is the same as name1, 
      //           get the last value, otherwise get the first

      list += name1 + ' - ' + name2;
      list += '<br>';
    }
    return list;
  }
}