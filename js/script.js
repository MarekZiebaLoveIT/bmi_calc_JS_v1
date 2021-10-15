'use strict'

// zmienna dla wyniku po przesunięciu suwaków
const res = document.querySelector('#wynik');

// zmienna dla diva na którym ma się pojawić wynik skopiowany z poprzedniej strony
const divRes = document.querySelector('.bmiRes');

// zmienna dla drugiego (obracającego się) przycisku
const btn = document.querySelector('.secondbtn');

// zmienna dla obrazka rozety z zakresem BMI
const bmiClock = document.querySelector('.bmiClock');

// zmienna dla sekcji z suwakami
const choice = document.querySelector('#choose');

// zmienna dla diva w którym ma się pojawiać opis adekwatnie do wyniku BMI
const result = document.querySelector('.result');

// zmienna dla przycisku resetującego
const resetBtn = document.querySelector('.resetBtn');

////////////////////////////////////////////////////////////////////


// zdarzenie do przesuwania ekranu bez ruszania suwaków
window.onscroll = function() {
    showClock();
};

function showClock () {
    if(res.value === '') {
        bmiClock.style.display = 'block';   // pokazanie tarczy wyników BMI
        divRes.style.display = 'none';      // ukrycie miejsca wyświetlania skopiowanego wyniku BMI z formularza
        resetBtn.style.display = 'none';
    } else {
        //odwrotność powyższych opisów
        bmiClock.style.display = 'none';
        divRes.style.display = 'block';
        resetBtn.style.display = 'block';
    }
}

/////////////////////////////////////////////////////////////////////

// zdarzenie, które kopiuje wynik BMI, zaokrągla je i wyświetla opis w zależności od wyniku
btn.addEventListener('click', () => {
    divRes.innerText = parseFloat(res.value).toFixed(1);
    bmiClock.style.display = 'none';
    if(res.value < 18.5 && res.value != '') {
        let node = document.createElement('P');
        let textnode = document.createTextNode("Ważysz za mało! Niedowaga może osłabiać twój układ odpornościowy, a także zwiększać ryzyko wystąpienia osteoporozy i innych groźnych chorób. Porozmawiaj ze swoim lekarzem i spróbuj ustalić, jak osiągnąć prawidłową wagę i co jest przyczyną jej obecnego niedoboru. Aby polepszyć swoją kondycję: Potraktuj zdrowe nawyki żywieniowe jako styl życia; Wzbogacaj codzienne menu w owoce, warzywa oraz produkty pełnoziarniste; Ważnym elementem są także ćwiczenia fizyczne. Mogą one korzystnie wpłynąć na rozbudowę tkanki mięśniowej, a także na zwiększenie masy ciała.");
        node.appendChild(textnode);
        document.querySelector('.result').appendChild(node);
    } else if(res.value > 25 && res.value != '') {
        let node = document.createElement('P');
        let textnode = document.createTextNode("Masz nadwagę! Porozmawiaj ze swoim lekarzem jaki sposób utraty zbędnych kilogramów będzie dla ciebie najlepszy. Potraktuj zdrowe nawyki żywieniowe jako styl życia: Wzbogacaj codzienne menu w owoce, warzywa i produkty pełnoziarniste; Ćwicz regularnie; Wyznacz sobie cel, czyli liczbę kilogramów do zrzucenia; Prowadź dzienniczek i zapisuj w nim plan treningów oraz codzienne menu.");
        node.appendChild(textnode);
        document.querySelector('.result').appendChild(node);
    } else if(18.5 <= res.value <= 25 && res.value != '') {
        let node = document.createElement('P');
        let textnode = document.createTextNode("Twoja waga jest prawidłowa! Aby ją utrzymać należy przede wszystkim: Wzbogacać dietę w warzywa, owoce oraz produkty pełnoziarniste; Regularnie ćwiczyć.");
        node.appendChild(textnode);
        document.querySelector('.result').appendChild(node);
    }
});

/////////////////////////////////////////////////////////////////////////


// zdarzenie kliknięcia przycisku Reset
resetBtn.addEventListener('click', () => {
    document.querySelector('form').reset();   // resetuje suwaki do pozycji wejściowej
    bmiClock.style.display = 'block';         // wyświetla tarcze wyników
    choice.scrollIntoView();                  // przesuwa stronę do sekcji zresetowanych suwaków 
    divRes.style.display = 'none';            // ukrywa miejsce wyświetlania skopiowanego wyniku z suwaków
    resetBtn.style.display = 'none';          // ukrywa przycisk Reset
    document.querySelector('article p').remove();  // usuwanie opisu
});
