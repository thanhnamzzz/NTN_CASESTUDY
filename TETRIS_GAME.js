const columns = 10;
const rows = 20;
const block_size = 40;
const color_box = [`red`,`orange`,`green`,`purple`,`blue`,`cyan`,`yellow`,`white`];
const white_color_id = 7;

//vẽ khung chính trò chơi
const canvas = document.getElementById(`frame`);
const board = canvas.getContext(`2d`);
board.canvas.width = columns * block_size;
board.canvas.height = rows * block_size;

//vẽ khung hiển thị viên gạch tiếp theo
const col_next = 4;
const row_next = 4;
const nextbrick = document.getElementById(`next_brick`);
const nb = nextbrick.getContext(`2d`);
nb.canvas.width = col_next * block_size;
nb.canvas.height = row_next * block_size;

//tạo mảng dữ liệu các viên gạch
const Brick = [
    [
        [
            [7,0,7],
            [0,0,0],
            [7,7,7],
        ],
        [
            [7,0,7],
            [7,0,0],
            [7,0,7],
        ],
        [
            [7,7,7],
            [0,0,0],
            [7,0,7],
        ],
        [
            [7,0,7],
            [0,0,7],
            [7,0,7],
        ],
    ],
    [
        [
            [7,7,7,7],
            [7,1,1,7],
            [7,1,1,7],
            [7,7,7,7],
        ],
        [
            [7,7,7,7],
            [7,1,1,7],
            [7,1,1,7],
            [7,7,7,7],
        ],
        [
            [7,7,7,7],
            [7,1,1,7],
            [7,1,1,7],
            [7,7,7,7],
        ],
        [
            [7,7,7,7],
            [7,1,1,7],
            [7,1,1,7],
            [7,7,7,7],
        ],
    ],
    [
        [
            [7,7,7,7],
            [2,2,2,2],
            [7,7,7,7],
            [7,7,7,7],
        ],
        [
            [7,7,2,7],
            [7,7,2,7],
            [7,7,2,7],
            [7,7,2,7],
        ],
        [
            [7,7,7,7],
            [7,7,7,7],
            [2,2,2,2],
            [7,7,7,7],
        ],
        [
            [7,2,7,7],
            [7,2,7,7],
            [7,2,7,7],
            [7,2,7,7],
        ],
    ],
    [
        [
            [7,3,7],
            [7,3,7],
            [7,3,3],
        ],
        [
            [7,7,7],
            [3,3,3],
            [3,7,7],
        ],
        [
            [3,3,7],
            [7,3,7],
            [7,3,7],
        ],
        [
            [7,7,3],
            [3,3,3],
            [7,7,7],
        ],
    ],
    [
        [
            [7,4,7],
            [7,4,7],
            [4,4,7],
        ],
        [
            [4,7,7],
            [4,4,4],
            [7,7,7],
        ],
        [
            [7,4,4],
            [7,4,7],
            [7,4,7],
        ],
        [
            [7,7,7],
            [4,4,4],
            [7,7,4],
        ],
    ],
    [
        [
            [7,5,5],
            [5,5,7],
            [7,7,7],
        ],
        [
            [7,5,7],
            [7,5,5],
            [7,7,5],
        ],
        [
            [7,5,5],
            [5,5,7],
            [7,7,7],
        ],
        [
            [7,5,7],
            [7,5,5],
            [7,7,5],
        ],
    ],
    [
        [
            [6,6,7],
            [7,6,6],
            [7,7,7],
        ],
        [
            [7,6,7],
            [6,6,7],
            [6,7,7],
        ],
        [
            [6,6,7],
            [7,6,6],
            [7,7,7],
        ],
        [
            [7,6,7],
            [6,6,7],
            [6,7,7],
        ],
    ],
]

//tạo 1 lớp hiển thị viên gạch tiếp theo
class nextBrick {
    constructor(nb) {
        this.nb = nb;
        this.grid_next = this.whiteBoardnext();
    }
    whiteBoardnext() {
        return Array(row_next).fill(Array(col_next).fill(white_color_id));
    }
    drawCell_n(xAxis_n, yAxis_n, colorId_n) {
        this.nb.fillStyle = color_box[colorId_n] || color_box[white_color_id];
        this.nb.fillRect(xAxis_n*block_size, yAxis_n*block_size, block_size, block_size);
        this.nb.strokeStyle = "#000000";
        this.nb.strokeRect(xAxis_n*block_size, yAxis_n*block_size, block_size, block_size);
        this.nb.strokeStyle = "#FFFFFF";
        this.nb.strokeRect(xAxis_n*block_size+2, yAxis_n*block_size+2, block_size-4, block_size-4);
    }
    drawFrame_n() {
        for (let row = 0; row < this.grid_next.length; row++){
            for (let col = 0; col < this.grid_next[0].length; col++) {
                this.drawCell_n(col, row, white_color_id);
            }
        }
    }
}

//tạo lớp vẽ viên gạch tiếp theo trên khung next brick
class drawBrick_next {
    constructor (id) {
        this.id = id; //id chạy từ 0-3
        this.layoutBricknext = Brick[id]; //gọi hình dạng viên gạch
        this.activeBricknext = 0; //biến lưu lại hướng của viên gạch - gán tạm giá trị là 0 (chạy từ 0-6)
    }
    draw_next () {
        for (let row = 0; row < this.layoutBricknext[this.activeBricknext].length; row++){
            for (let col = 0; col < this.layoutBricknext[this.activeBricknext][0].length; col++){
                let colorBrick = this.layoutBricknext[this.activeBricknext][row][col];
                if (colorBrick !== white_color_id){
                    testNext.drawCell_n(col,row,this.id);
                }
            }
        }
    }
}

//tạo lớp hiển thị trên khung chính trò chơi
class frame {
    constructor(board){
        this.board = board;
        this.grid = this.whiteBoard();
    }
    whiteBoard() {
        return Array(rows).fill(Array(columns).fill(white_color_id));
    }
    //method vẽ 1 ô gạch
    drawCell(xAxis, yAxis, colorId) {
        this.board.fillStyle = color_box[colorId] || color_box[white_color_id];
        this.board.fillRect(xAxis*block_size, yAxis*block_size, block_size, block_size);
        this.board.strokeStyle = "#000000";
        this.board.strokeRect(xAxis*block_size, yAxis*block_size, block_size, block_size);
        this.board.strokeStyle = "#FFFFFF";
        this.board.strokeRect(xAxis*block_size+2, yAxis*block_size+2, block_size-4, block_size-4);
    }
    drawFrame() {
        for (let row = 0; row < this.grid.length; row++){
            for (let col = 0; col < this.grid[0].length; col++) {
                this.drawCell(col, row, this.grid[row][col]);
            }
        }
    }
}

//tạo lớp vẽ viên gạch trên khung chính trò chơi
class drawBrick {
    constructor (id) {
        this.id = id;
        this.layoutBrick = Brick[id]; //gọi hình dạng viên gạch
        this.activeBrick = 0; //biến lưu lại hướng của viên gạch - gán tạm giá trị là 0
        //tạo 2 biến để lưu vị trí hiện tại của viên gạch
        this.colNow = 3;
        this.rowNow = -1;
    }
    draw () {
        for (let row = 0; row < this.layoutBrick[this.activeBrick].length; row++){
            for (let col = 0; col < this.layoutBrick[this.activeBrick][0].length; col++){
                let colorBrick = this.layoutBrick[this.activeBrick][row][col];
                if (colorBrick !== white_color_id){
                    FrameBoard.drawCell(col + this.colNow,row + this.rowNow,this.id);
                }
            }
        }
    }
    clearBrick() {
        for (let row = 0; row < this.layoutBrick[this.activeBrick].length; row++){
            for (let col = 0; col < this.layoutBrick[this.activeBrick][0].length; col++){
                let colorBrick = this.layoutBrick[this.activeBrick][row][col];
                if (colorBrick !== white_color_id){
                    FrameBoard.drawCell(col + this.colNow,row + this.rowNow,white_color_id);
                }
            }
        }
    }
    //action game
    moveLeft() {
        if (this.check(this.rowNow, this.colNow - 1, this.layoutBrick[this.activeBrick]) == false){
            this.clearBrick();
            this.colNow--;
            this.draw();
        }
    }
    moveRight() {
        if (this.check(this.rowNow, this.colNow + 1, this.layoutBrick[this.activeBrick]) == false){
            this.clearBrick();
            this.colNow++;
            this.draw();
        }
    }
    moveDown() {
        if (this.check(this.rowNow + 1, this.colNow, this.layoutBrick[this.activeBrick]) == false){
            this.clearBrick();
            this.rowNow++;
            this.draw();
            return;
        }
        this.felldown();
        randomBrick();
    }
    rotate() {
        if (this.check(this.rowNow, this.colNow, this.layoutBrick[(this.activeBrick + 1) % 4]) == false){
            this.clearBrick();
            this.activeBrick = (this.activeBrick + 1) % 4;
            this.draw();
        }
    }
    //Kiểm tra va chạm
    check(nextRow, nextCol, nextLayout) {
        for (let row = 0; row < nextLayout.length; row++){
            for (let col = 0; col < nextLayout[0].length; col++) {
                if (nextLayout[row][col] != white_color_id) {
                    if (
                        col + nextCol < 0 ||
                        col + nextCol >= columns ||
                        row + nextRow >= rows
                    ){
                        return true;
                    }
                }
            }
        }
        return false;
    }
    felldown (){ //update lại màu của frame khi brick rơi xuống đáy
        for (let row = 0; row < this.layoutBrick[this.activeBrick].length; row++){
            for (let col = 0; col < this.layoutBrick[this.activeBrick][0].length; col++){
                if (this.layoutBrick[this.activeBrick][row][col] !== white_color_id){
                    FrameBoard.grid[row + this.rowNow][col + this.colNow] = this.id;
                }
            }
        }
        FrameBoard.drawFrame();
    }
}

function randomBrick() {
    brick = new drawBrick(Math.floor(Math.random()*10) % Brick.length);
}

FrameBoard = new frame(board);
FrameBoard.drawFrame();
randomBrick();
brick.draw();
setInterval(function() {brick.moveDown()},1000);

testNext = new nextBrick(nb);
testNext.drawFrame_n();
// testNew.drawCell_n(1,2,1);
brick_n = new drawBrick_next(4);
// brick_n.drawCell_n(3,1,2);
brick_n.draw_next();

//Action Game
const keyAction = {
    Left :'ArrowLeft',
    Right :'ArrowRight',
    Down :'ArrowDown',
    Up :'ArrowUp',
}
document.addEventListener('keydown', (e) => {
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