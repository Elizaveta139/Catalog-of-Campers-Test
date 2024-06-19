import css from './InfoInModal.module.css';
import sprite from '../../assets/sprite.svg';

export default function InfoInModal({ camperDetails }) {
  const {
    name,
    price,
    rating,
    location,
    description,

    reviews,
    gallery,
  } = camperDetails;
  return (
    <div className={css.wrapInfo}>
      <h3 className={css.title}>{name}</h3>
      <div className={css.wrapLocationRev}>
        <div className={css.location}>
          <svg width="16" height="16">
            <use xlinkHref={sprite + '#icon-map'} className={css.svgStar}></use>
          </svg>
          <p className={`${css.textLocation} ${css.reviewsText}`}>
            {rating}({reviews.length} Reviews)
          </p>
        </div>
        <div className={css.location}>
          <svg width="16" height="16">
            <use xlinkHref={sprite + '#icon-map'} className={css.svgMap}></use>
          </svg>
          <p className={css.textLocation}>{location}</p>
        </div>
      </div>

      <h3 className={css.price}>€{price},00</h3>

      <ul className={css.imgList}>
        {gallery.map(img => {
          return (
            <li key={Math.random()} className={css.imgBlock}>
              <img src={img} alt={name} className={css.img} />
            </li>
          );
        })}
      </ul>
      <p className={css.description}>{description}</p>
    </div>
  );
}
