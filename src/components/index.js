import React from "react";
import Maca from "../imagens/maca.png"
import Apricot from "../imagens/apricot.png"
import Banana from "../imagens/banana.png"
import Blackberry from "../imagens/blackberry.png"
import Blueberry from "../imagens/blueberry.png"
import Cherry from "../imagens/cherry.png"
import Durian from "../imagens/durian.png"
import Fig from "../imagens/fig.png"
import Gooseberry from "../imagens/gooseberry.png"
import Grapes from "../imagens/grapes.png"
import Greenaple from "../imagens/greenApple.png"
import Guava from "../imagens/guava.png"
import Kiwi from "../imagens/kiwi.png"
import Limon from "../imagens/limon.png"
import Lime from "../imagens/lime.png"
import Lingonberry from "../imagens/lingonberry.png"
import Lichee from "../imagens/lychee.png"
import Manga from "../imagens/manga.png"
import Melon from "../imagens/melon.png"
import Orange from "../imagens/orange.png"
import Papaya from "../imagens/papaya.png"
import Passionfruit from "../imagens/passionfruit.png"
import Pear from "../imagens/pier.png"
import Persimon from "../imagens/persimon.png"
import Pineapple from "../imagens/pineapple.png"
import Plum from "../imagens/plum.png"
import Rasberry from "../imagens/rasberry.png"
import Strawberry from "../imagens/strawberry.png"
import Tomato from "../imagens/tomato.png"
import Umbu from "../imagens/umbu.png"
import Watermelon from "../imagens/watermelon.png"






class Helper {

    SetImg(data) {

        const dados = data

        switch (dados) {
            case 1:
                return Banana
            case 2:
                return Orange
            case 3:
                return Strawberry
            case 4:
                return Pear
            case 5:
                return Tomato
            case 6:
                return Maca
            case 9:
                return Cherry
            case 10:
                return Pineapple
            case 23:
                return Rasberry
            case 25:
                return Watermelon
            case 26:
                return Limon
            case 27:
                return Manga
            case 33:
                return Blueberry
            case 35:
                return Apricot
            case 37:
                return Guava
            case 41:
                return Melon
            case 42:
                return Papaya
            case 44:
                return Lime
            case 47:
                return Grapes
            case 52:
                return Persimon
            case 60:
                return Durian
            case 64:
                return Blackberry
            case 65:
                return Lingonberry
            case 66:
                return Kiwi
            case 67:
                return Lichee
            case 68:
                return Fig
            case 69:
                return Gooseberry
            case 70:
                return Passionfruit
            case 71:
                return Plum
            case 72:
                return Greenaple
            case 73:
                return Umbu
        }
    }

}


export default Helper;
