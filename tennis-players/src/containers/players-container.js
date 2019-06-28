import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Player from '../components/player';

const PLAYERS_URL = 'https://eurosportdigital.github.io/eurosport-web-developer-recruitment/headtohead.json';

const PlayersContainer = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      const result = await axios(PLAYERS_URL);
      setPlayers(result.data.players);
    };

    fetchPlayers();
  }, []);

  return (
    <div>
      <ul>
        {players.map((player, index) => (
          <Player key={index} {...player} />
        ))}
      </ul>
    </div>
  );
};

export default PlayersContainer;