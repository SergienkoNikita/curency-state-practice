### Урок №3


#### !! Важно !! добавил коментарии в код, для понимания происходящего.
>1) Создать массив стран (которые сейчас используются в `switch/case`) И заменить строковые представления в `case` условиях на данные массивов.
>   * переписать `switch/case` на `if/else` кострукции, **с учетом того, что дефолтное значение уже есть у названия страны**.
>   При этом использовать данные из массива стран, который написан в рамках задания
>2) Можно заметить что добавились сообщения выводимые на экран, а в тех что уже были, изменились перемнные.
>Согласно названиям перемнных понятно, что в них требуется.
>Так как количество крипты увеличилось, требуется ограницить выводимые на экран криптовалюты. Которые все так-же приходят в перемнную `cryptos`.
>От нее и стоит отталкиваться.
> * Сначала нужно проверить пользователь авторизован или нет. (переменная `isAuthorize`). Если авторизован - то ему доступны все криптовалюты
>Если не авторизован то только половина (причем **ВТОРАЯ** половина). 
> * В первом сообщении после приветствия, необходимо отобразить **ТОЛЬКО 3 ВАЛЮТЫ ИЗ ДОСТУПНЫХ ПОЛЬЗОВАТЕЛЮ** (как посчитать доступные пользователю описано выше)
> * В следующем **ЕЩЕ 5** (т.е. пять следующих)
> * И в последнем сообщении необходимо отобразить все доступные пользователю криптовалюты.
>> Подсказки:
>> 1) Массив `cryptos` может меняться только если пользователь не авторизован.
>> 2) Ни одна из валют не должна повторяться во втором и третем сообщении.
>> 3) Основным массивом будет `cryptos`, в зависимости от о того каким будет массив `cryptos` - Будут по разному отображаться криптовалюты при авторизованности/не авторизованности пользователя.



**Материалы**

```javascript
// Разбирали на уроке

// unshift Добавить в начало массива
// push Добавить в конец массива

// shift Удалить с начала массива
// pop Удалить с конца массива

// splice удалять любое колво элементов, и может добавлять любое кол-во элементов (с любого индекса)
// slice - Извлекает последовательность

```

[Массивы](https://learn.javascript.ru/array)

[Методы массивов](https://learn.javascript.ru/array-methods)

[Как плохо писать код](https://learn.javascript.ru/ninja-code)

[*Логические операторы](https://learn.javascript.ru/logical-operators)
