const answer = confirm('Есть ли вам 18 лет?')

if (answer){
    const time = Number(prompt('Во сколько вы встаете?'));

    if (isNaN(time)){
        alert('некорректный ввод');
    } else

        if (time > 0 && time <= 5){
            alert('Очень рано')
        } else if (time > 5 && time <= 8){
            alert('Все равно рано')
        } else if (time > 8 && time <= 11){
            alert('Нормально')
        } else if (time > 11 && time <= 14){
            alert('Слишком поздно')
        } else if (time > 14 && time <= 24){
            alert('Очень-очень поздно')
        } else if (time > 24 || time <= 0){
            alert('Научись пользоваться часами')
        }

} else {
    alert('Вам запрещено проходить опрос');
}