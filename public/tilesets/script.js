console.log("ПРОВЕРКА: Скрипт загружен!");

WA.onInit().then(() => {
    console.log("API готово!");

    // Замени 'book_id_4' на точное имя твоего объекта в Tiled
    WA.room.onEnterZone('book_id_4', () => {
        console.log("КТО-ТО ПРИШЕЛ К КНИГЕ!");
        WA.chat.sendChatMessage("Вы подошли к книге. Нажмите пробел!", "Система");
        
        WA.ui.displayActionMessage({
            message: "Нажмите Пробел",
            callback: () => {
                WA.ui.openPopup("target", "Тут будет текст про Базальт СПО и Git", [
                    {
                        label: "Понял",
                        className: "primary",
                        callback: (p) => p.close()
                    }
                ]);
            }
        });
    });
});