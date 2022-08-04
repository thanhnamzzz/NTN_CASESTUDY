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
        return Array(rows).fill(Array(columns).fill(white_color_id));
    }
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
                this.drawCell(col, row, white_color_id);
            }
        }
    }
}
test = new frame(board);
test.drawFrame();
test.drawCell(1,1,5);
console.table(test.grid);