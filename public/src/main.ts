/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');

WA.onInit().then(() => {
    console.log('API ready');

    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

    // Универсальная функция автооткрытия/закрытия двери по суффиксу
    function simpleOpenCloseDoors(suffix: string) {
        // Открытие двери при входе на слой перед ней
        WA.room.onEnterLayer('doorsteps/doorstep_' + suffix).subscribe(() => {
            WA.room.showLayer('doorsAbove/door_opened_' + suffix);
            WA.room.hideLayer('doorsAbove/door_closed_' + suffix);
            WA.room.showLayer('doorsUnder/door_opened_' + suffix);
            WA.room.hideLayer('doorsUnder/door_closed_' + suffix);
        });
        // Закрытие двери при уходе с слоя
        WA.room.onLeaveLayer('doorsteps/doorstep_' + suffix).subscribe(() => {
            WA.room.hideLayer('doorsAbove/door_opened_' + suffix);
            WA.room.showLayer('doorsAbove/door_closed_' + suffix);
            WA.room.hideLayer('doorsUnder/door_opened_' + suffix);
            WA.room.showLayer('doorsUnder/door_closed_' + suffix);
        });
    }

    simpleOpenCloseDoors("main");


}).catch(e => console.error(e));

export {};