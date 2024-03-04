import React from 'react';
import styles from './carditem.module.scss';
import Image from 'next/image';
const CardItem = ({ src, title, description, rating }) => {
  // Générer une liste d'étoiles en fonction de la note
  const renderStars = (rating) => {
    const stars = [];
    const maxStars = 5; // Maximum d'étoiles
    const roundedRating = Math.min(Math.max(0, rating), maxStars); // S'assurer que la note est comprise entre 0 et 5

    for (let i = 0; i < maxStars; i++) {
      if (i < roundedRating) {
        stars.push(<span key={i}>&#9733;</span>); 
      } else {
        stars.push(<span key={i}>&#9734;</span>); // Étoile vide
      }
    }
    return stars;
  };

  return (
    <li className={styles.cardItem}>
    <div className={styles.cardItem__image}>
      <Image src={src} alt={title} width={300} height={200} />
    </div>
    <div className={styles.cardItem__content}>
      <h3 className={styles.cardItem__title}>{title}</h3>
      <div className={styles.cardItem__rating}>
        {renderStars(rating)}
      </div>
      <p className={styles.cardItem__description}>{description}</p>
      <button className={styles.cardItem__button}>Voir Plus</button>
    </div>
  </li>
  );
};

export default CardItem;
