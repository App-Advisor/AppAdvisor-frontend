import React from 'react';
import styles from './cards.module.scss';
import CardItem from './carditem';

function Cards() {
  // Données de test pour les cartes
  const cardData = [
    {
      src: '/path/to/image1.jpg',
      title: 'Titre de la première carte',
      description: 'Description de la première carte',
      rating: 4, // Note de la première carte
      path: '/lien/vers/page1'
    },
    {
      src: '/path/to/image2.jpg',
      title: 'Titre de la deuxième carte',
      description: 'Description de la deuxième carte',
      rating: 3, // Note de la deuxième carte
      path: '/lien/vers/page2'
    },
  
  ];

  return (
    <div className={styles.cards}>
      <div className={styles.cards__container}>
        <div className={styles.cards__wrapper}>
          <ul className={styles.cards__items}>
            {/* Mapping sur les données de carte pour créer chaque carte */}
            {cardData.map((card, index) => (
              <CardItem
                key={index} 
                src={card.src}
                title={card.title}
                description={card.description}
                rating={card.rating}
                path={card.path}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;



