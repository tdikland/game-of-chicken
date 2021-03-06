import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";

import { GameContext } from "../../context/game";
import { UserContext } from "../../context/user";
import { FirebaseContext } from "../../context/firebase";

import GameBoard from "../GameBoard";
import GameRoom from "../GameRoom";

function Game() {
  const gameState = useContext(GameContext);
  const user = useContext(UserContext);
  const firebase = useContext(FirebaseContext);
  const params = useParams();
  const [gameStarted, setGameStarted] = useState(false);
  const [gameHasStarted, setGameHasStarted] = useState(false);

  firebase
    .gameMetadata(params.gameId)
    .once("value")
    .then((snapshot) => {
      return snapshot.val().isStarted;
    })
    .then((res) => {
      setGameHasStarted(res);
    });

  const handleStartGame = (setState) => (allReady) => {
    if (allReady) {
      firebase.doInitializeGame(params.gameId);
      setState(true);
    }
  };

  const handlePlayerStatusChange = (userId) => (players) => {
    const status = players[userId].isReady;
    firebase.gamePlayer(params.gameId, userId).update({
      isReady: !status,
    });
  };

  return gameStarted || gameHasStarted ? (
    <GameBoard gameState={gameState} />
  ) : (
    <GameRoom
      gameState={gameState}
      handleStartGame={handleStartGame(setGameStarted)}
      handlePlayerStatusChange={handlePlayerStatusChange(user.uid)}
      gameId={params.gameId}
    />
  );
}

export default Game;
