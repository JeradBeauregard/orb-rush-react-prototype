import './GameBoard.css';

let gameBoard = [
    [null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, null, null], 
   
];

function handleSelectSquare(rowIndex, tileIndex){

}

export default function GameBoard() {
  return (
    <div id="boardContainer">
      {gameBoard.map((row, rowIndex) => (
        <div className="orb-row" key={rowIndex}>
          {row.map((tile, tileIndex) => (
            <div
              
              key={`${rowIndex}-${tileIndex}`}
            >
              <button className="boardPiece" onClick={()=>handleSelectSquare(rowIndex,tileIndex)}></button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}