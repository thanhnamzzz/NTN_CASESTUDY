const keyAction = [
    'ArrowLeft',
    'ArrowRight',
    'ArrowDown',
    'ArrowUp',
]
document.addEventListener(keyAction, actionBrick);
function actionBrick() {
    // if (keyAction = 'ArrowLeft') {
    //     drawBrick.moveLeft();
    // }
    // if (keyAction = 'ArrowRight') {
    //     drawBrick.moveRight();
    // }
    switch (keyAction) {
        case keyAction[0]:
            drawBrick.moveLeft();
            break;
    }
}