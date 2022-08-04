const columns = 10;
const rows = 20;
const block_size = 40;
const color_box = [`red`,`orange`,`green`,`purple`,`blue`,`cyan`,`yellow`,`white`];
const white_color_id = 7;
const canvas = document.getElementById(`frame`);
const board = canvas.getContext(`2d`);
board.canvas.width = columns * block_size;
board.canvas.height = rows * block_size;

class frame {
    constructor(board){
        this.board = board;
        this.grid = this.whiteBoard();
    }
    whiteBoard() {
        return Array.from()
    }
}