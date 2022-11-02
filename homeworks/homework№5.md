### Урок №5

>1) Вынести логику сообщения `userCountry` В отдельную функцию. В конечном итоге в самом приложении не должно
>быть никаких строковых именований страны или ее кода. Нужно реализовать функцию котороая будет возвращать имя страны, из уже имеющейся
>логики.
>2) Реализовать функции геттеры для переменных `previewCryptos`, `moreCryptos` - чтобы убрать локи роботы с массивом из основного приложения
>3) Реализовать функцию, которая генерирует функцию для вычисления остатска от деления.
> т.е. конечный вызов должен выгялдеть так:
>```javascript
> const remainderByTwo = getCalcRemainder(2) // получаем в переменную функцию для получения остатка от деления на 2
> const findedValue = remainderByTwo(5) // остаток от 5 / 2
> const findedValue2 = remainderByTwo(10) //  остаток от 10 / 2
> ...
> const findedValue10 = remainderByTwo(123) //  остаток от 123 / 2
>
> const remainderByFive = getCalcRemainder(5) // получаем в переменную функцию для получения остатка от деления на 5
> const newFindedValue = remainderByFive(5) // остаток от 5 / 5
> const newFindedValue2 = remainderByTwo(10) //  остаток от 10 / 5
> ...
> const newFindedValue10 = remainderByFive(123) //  остаток от 123 / 5
> 
> // Требуется реализовать функцию getCalcRemainder
>```
>4) Реализовать функцию, которая возвращает массив массивов, входящим массивом в нее будет массив строк, выходящим должен быть массив массивов 
> т.е. если передали аргкментом `['cfb', 'kvnr', 'udsn']` то на выходе получим - `[['c','f','b'], ['k','v','n','r'], ['u','d','s','n']]`
>5) Пузырьковая сортировка 


**Материалы**


[Функции](https://learn.javascript.ru/function-basics)

[Function Expression/Declaration](https://learn.javascript.ru/function-expressions)

[Стрелочные функции](https://learn.javascript.ru/arrow-functions-basics)

[Еще раз - Операторы](https://learn.javascript.ru/logical-operators)

[Rest](https://learn.javascript.ru/destructuring-assignment)

[*Доп. Рекурсия и стек](https://learn.javascript.ru/recursion)
