import css from './Reviews.module.css';
import sprite from '../../assets/sprite.svg';

export default function Reviews({ camperDetails }) {
  const { reviews } = camperDetails;

  return (
    <div className={css.reviewsSection}>
      {reviews.length !== 0 ? (
        <div>
          {' '}
          <ul className={css.reviewsList}>
            {reviews.map(review => {
              return (
                <li key={Math.random()} className={css.reviewBlock}>
                  <div className={css.nameSection}>
                    <div className={css.avatarWrap}>
                      <p className={css.avatar}>{review.reviewer_name.charAt(0)}</p>
                    </div>
                    <div>
                      <p className={css.name}>{review.reviewer_name}</p>
                      {/* <svg width="16" height="16" className={css.svgInfo}>
                        <use xlinkHref={sprite + '#icon-star'} className={css.svg}></use>
                      </svg> */}

                      {[...Array(5)].map((_, index) => {
                        console.log('review', review);
                        return (
                          <svg
                            key={index}
                            className={`${css.star} ${
                              review.reviewer_rating > index ? css.reviewStar : css.reviewStar2
                            }`}
                            width="16"
                            height="16"
                          >
                            <use className={css.starUse} xlinkHref={sprite + '#icon-star'}></use>
                          </svg>
                        );
                      })}
                    </div>
                  </div>
                  <p className={css.comment}>{review.comment}</p>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <p> There are no reviews yet</p>
      )}
    </div>
  );
}
