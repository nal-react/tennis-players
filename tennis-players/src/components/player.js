import React from 'react';
import './player.css';

const STATS = {
    RANK: 'Rank',
    WEIGHT: 'Weight',
    POINTS: 'Points',
    AGE: 'Age',
    LAST: 'Last',
}

const PlayerPicture = ({ picture, fullName }) => {
    return (
        <img className="picture" src={picture} alt={fullName} />
    )
}

const Country = ({ picture, code }) => {
    return (
        <img className="flag" src={picture} alt={code} />
    )
}

const playerStat = (name, value) => {

    return (
        <div>
            <span className="player-stat-name">{name}</span>
            <p className="player-stat-value">{value}</p>
        </div>);

}

const PlayerStats = ({ rank, points, weight, age, last }) => {
    return (
        <div className="player-stat">
            {playerStat(STATS.RANK, rank)}
            {playerStat(STATS.POINTS, points)}
            {playerStat(STATS.WEIGHT, `${weight / 100} Kg`)}
            {playerStat(STATS.AGE, age)}
            {playerStat(STATS.LAST, last)}
        </div>
    )
}

const PlayerIdentity = ({ firstname, lastname, country, picture }) => {
    let fullname = `${firstname} ${lastname}`;
    let picturedata = {
        fullname,
        picture
    };
    return (
        <div className="player-identity">
            <PlayerPicture {...picturedata} />
            <Country {...country}></Country>
            <div><span>{fullname}</span></div>
        </div>
    )
}

const Player = ({ firstname, lastname, country, picture, data }) => {
    let identity = { firstname, lastname, country, picture };
    return (
        <div className="player">
            <PlayerIdentity {...identity} />
            <PlayerStats {...data} />
        </div>
    );
}

export default Player;
