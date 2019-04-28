Для добавления события типа "Запрос перевода", необходим:
1. Добавить в фалй types.ts интерфейс для нового события. Вида
  ```
ITransferRequest {
    id: IBaseEvent['id'];
    name: string;
    account: string;
    cum: string;
    date: Date
}
```
2. Добавить в перечисление ```EventTypes``` связку ```TRANSFER_REQUEST = 'transfer_request'```.
4. Добавить в файле ```app.ts``` в объект ```dataToEventsType``` связь между типом события и классом реализующим поведение события.
5. Затем необходимо добавить дирректорию ```transfer-request``` в дирректорие ```events```  внутри которой будут находиться следующие файлы:
    1. ```transfer-request-event.[ts, scss, hbs]``` Файлы описывающие поведение и внешний вид события на таймлайне.
    2. ```transfer-request-event-view.[ts, scss, hbs]``` файлы описывающие подробный вид события.



Первый запуск.
Необходим docker-compose, docker.

Для создания сети необходимо запустить скрипт create-network.sh

Выполняем команды:
```docker run -d -p 5000:5000 --restart=always --name registry registry:2``` -- создание локального  docker registry
```npm install && npm run deploy:build && npm run deploy:push && docker-compose up``` -- ставим
 зависимости, собираем и пушим проект в registry, затем поднимае сервис и бд

Если все прошло успешно, и приложение собралось, подключаемся к localhost:1122.
