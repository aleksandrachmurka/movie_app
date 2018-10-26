import React from 'react';
import styles from './App.module.scss'

const data = [
    {
        title: 'First Man',
        releaseDate: '18.10.2018',
        desc: 'Fragment życia astronauty Neila Armstronga i jego legendarnej misji kosmicznej, dzięki której jako pierwszy człowiek stanął na Księżycu.',
        duration: 8460,
        img: 'https://i.imgur.com/0oo7XJc.jpg',
        rating: 4,
        soldedOut: false,
    },
    {
        title: 'Mission: Impossible - Fallout',
        desc: 'Konsekwencje zakończonej niepowodzeniem misji IMF może odczuć cały świat. Aby zapobiec katastrofie, Ethan Hunt i jego zespół muszą stanąć do wyścigu z czasem.',
        duration: 8820,
        releaseDate: '09.09.2018',
        img: 'https://i.imgur.com/rOXaXH6.jpg',
        rating: 5,
        soldedOut: false,
    },
    {
        title: 'American Animals',
        releaseDate: '01.09.2018',
        desc: 'Wracając od kolegi, Will zauważa coś przerażającego. Pobliskie laboratorium rządowe skrywa złowrogą tajemnicę. Ogólnie jest nie za wesoło,' +
        ' ale wszystko kończy się dobrze i żyją długo i szczęśliwie.',
        duration: 3200,
        img: 'https://i.imgur.com/3koreob.jpg',
        rating: 3,
        soldedOut: true,
    },
];

const App = () => (
    <div className={styles.container}>
        test
    </div>
);


export default App;