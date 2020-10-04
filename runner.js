// метод для случайного броска кубика
const dice = {
  roll: function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
  },
};

// console.log(`мне повезет!!! ${dice.roll()}`)

function game() {
  // тут твой код
let car1 = prompt('Введите имя первого игрока')
let car2 = prompt('Введите имя второго игрока')
  let prevPosition = 0; //для сохранения значения текущей позиции 1-ой машинки
  let prevPosition2 = 0; //то же для второй машинки
  let track = new Array(30).fill("|"); // создание трассы длинной в 30 шагов
  let track2 = new Array(30).fill("|"); // создание второй трассы длинной в 30 шагов
  let position = 0; // стартовая позиция
  let position2 = 0;

  do {
    //1-ая машинка
    if (position > 30) break;
    console.log(position); //вывод индекса текущего положения на каждом этапе броска кубика
    track.splice(position, 1, car1); //рисуем машинку на нужной позиции
    console.log(track.join("  ")); //соединяем массив в строку для визуальности вывода, для красоты вобщем.
    prevPosition = position; // 'запоминаем текущее положение/индекс машинки, т.к. на следующем шаге оно изменится
    position = dice.roll() + position; //складываем к текущему положению значение кубика и положение менятся

    track.splice(prevPosition, 1, "|"); //удаляем 'рисунок' машинки на предыдущей позиции

    // // // // Костылявохитровыделанное решение выполнять итерацию с паузой чуть больше секунды===============
    function fiboRecurs(n) {
      if (n <= 1) {
        return n;
      }
      {
        return fiboRecurs(n - 1) + fiboRecurs(n - 2);
      }
    }
    fiboRecurs(40);
    // ==========================================================================================================

    //вторая машинка
    if (position2 > 30) break;
    console.clear(); //очищаем экран от предыдущего вывода, это работает только в терминале
    console.log(position2); //вывод индекса текущего положения на каждом этапе броска кубика
    track2.splice(position2, 1, car2); //рисуем машинку на нужной позиции
    console.log(track2.join("  ")); //соединяем массив в строку для визуальности вывода, для красоты вобщем.
    prevPosition2 = position2; // 'запоминаем текущее положение/индекс машинки, т.к. на следующем шаге оно изменится
    position2 = dice.roll() + position2; //складываем к текущему положению значение кубика и положение менятся

    track2.splice(prevPosition2, 1, "|"); //удаляем 'рисунок' машинки на предыдущей позиции
  } while (position < 30 || position2 < 30);
  {
    if (position > 30) console.log(car1 + ` - YOU WIN!!!!"`);
  }
  if (position2 > 30) {
    console.log(car2 + ` YOU WIN!!!!`);
  }
}

// вызывает игру
game();
