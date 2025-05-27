function addTask() {
    const input = document.getElementById("taskInput");
    const task = input.value.trim();
    if (task === "") return;

    const tg = window.Telegram.WebApp;
    tg.sendData(task); // Отправка в бота
    tg.close();
}
