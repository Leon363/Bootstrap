<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
		
	</head>
	<body>
    chessBoard(8);

function chessBoard(number) {
    let board = "",
        square1 = "",
        square2 = "",
        wrap = "\n",
        value = number;

    for (let i = 0; i < value; i++) {
        (i % 2) ? (square1 = "#", square2 = "0") : (square1 = "0", square2 = "#");
        for (let i = 0; i < value; i++) {
            if (i % 2) {
                board += square1;
            } else {
                board += square2;
            }
        }
        board += wrap;
    }
    console.log(board);
}
	</body>
</html>