function main(){
let cells = document.querySelectorAll(".game-cell");
let movePositons = generate(3);
let turnValue = 'X';
    for(let i = 0; i < cells.length; i++){
        cells[i].addEventListener('click', function () {
            cells[i].textContent = turnValue;
            if (turnValue ==="X"){
                cells[i].style.backgroundColor = "#D5F1D5";
            }else{
                cells[i].style.backgroundColor = "#AFE4C9";
            }
            for (let j =0; j < movePositons.length; j++){

                if ((movePositons[j][0] === Number(cells[i].dataset.coordinateX)) && (movePositons[j][1] === Number(cells[i].dataset.coordinateY))){
                    movePositons[j][movePositons[j].length-1] = turnValue;
                }
            }
            if (turnValue === "X"){
                turnValue = "O";
            }else{
                turnValue = "X";
            }
            checkGameOver(movePositons);
        })

    };
}

main();

    function generate(listLenght){
        boardList=[];
        for (i = 0; i <listLenght; i++){
            for (j=0; j<listLenght; j++){
                boardList.push([i, j, "0"]);
            }
        }
        return (boardList);
    }

    function message(string){
        let resultMessage = document.querySelector("#gameResult");
        resultMessage.textContent = "Player " + string + " wins.";
    }

    function tieCheck(list){
        let resultMessage = document.querySelector("#gameResult");

        let tieValue = true;
       for(i = 0; i < list.length; i++){
          if (list[i][2] === "0"){
              tieValue = false;
          }
       }
       if (tieValue){
           resultMessage.textContent = "It\'s a tie.";
       }
    }

   function checkGameOver(list) {

       for(i = 0; i < list.length; i =i + 3){
       if (list[i][list[i].length-1] === "X" && list[i+1][list[i].length-1] === "X" && list[i+2][list[i].length-1] === "X"){
           message("X");
       }else if (list[i][list[i].length-1] === "O" && list[i+1][list[i].length-1] === "O" && list[i+2][list[i].length-1] === "O"){
           message("O");
            }
       }

       for(i = 0; i < 4; i++) {
           if (list[i][2] === "X" && list[i+3][2] === "X" && list[i+6][2] === "X") {
               message("X");
           } else if (list[i][2] === "O" && list[i+3][2] === "O" && list[i+6][2] === "O") {
               message("O");
           }
       }

       if (list[0][2] === "X" && list[4][2] === "X" && list[8][2] === "X"){
           message("X");
       }else if (list[0][2] === "O" && list[4][2] === "O" && list[8][2] === "O"){
           message("O");
       }
       if (list[2][2] === "X" && list[4][2] === "X" && list[6][2] === "X"){
           message("X");
       }else if (list[2][2] === "O" && list[4][2] === "O" && list[6][2] === "O"){
           message("O");
       }

       tieCheck(list);
    };











