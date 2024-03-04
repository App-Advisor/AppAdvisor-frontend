import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt} from '@fortawesome/free-solid-svg-icons';
import { faStar as farFaStar } from '@fortawesome/free-regular-svg-icons';
import styles from './Rating.module.scss';

export default function Rating({ note }) {
    const baseStars = Math.floor(note);
    const decimalPart = note % 1;
    let fullStars, halfStar, emptyStars;
  
    if (decimalPart > 0.5) {
      // Si la partie décimale est supérieure à 0.5, ajoute une étoile pleine
      fullStars = baseStars + 1;
      halfStar = 0;
    } else if (decimalPart > 0) {
      // Si la partie décimale est positive mais pas supérieure à 0.5, ajoute une demi-étoile
      fullStars = baseStars;
      halfStar = 1;
    } else {
      // Si la note est un entier, pas de demi-étoile
      fullStars = baseStars;
      halfStar = 0;
    }
  
    emptyStars = 5 - fullStars - halfStar;
  
    return (
      <div style={{ display: 'flex' }}>
        {[...Array(fullStars)].map((_, i) => (
          <span className={styles.star} key={`full-${i}`}>
              <FontAwesomeIcon icon={faStar} />
          </span> 
        ))}
        {halfStar > 0 && (
          <span className={styles.star} key="half">
              <FontAwesomeIcon icon={faStarHalfAlt} />
          </span>
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <span className={styles.star} key={`empty-${i}`}>
              <FontAwesomeIcon icon={farFaStar} />
          </span> 
        ))}
      </div>
    );
  }
  