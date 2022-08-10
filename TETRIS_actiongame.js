const keyAction = {
    Left :'ArrowLeft',
    Right :'ArrowRight',
    Down :'ArrowDown',
    Up :'ArrowUp',
}
document.addEventListener('keypress', (e) => {
    switch (e.code) {
        case keyAction.Left:
            brick.moveLeft();
            break;
        case keyAction.Right:
            brick.moveRight();
            break;
        case keyAction.Down:
            brick.moveDown();
            break;
        case keyAction.Up:
            brick.rotate();
            break;
        default:
            break;
    }
});