import css from './Features.module.css';
import sprite from '../../assets/sprite.svg';

export default function Features({ camperDetails }) {
  const {
    form,
    length,
    width,
    height,
    tank,
    consumption,
    adults,
    transmission,
    engine,

    details,
  } = camperDetails;

  return (
    <div className={css.features}>
      <ul className={css.divInfo}>
        <li className={`${css.text} ${css.textTransform}`}>
          <svg width="20" height="20" className={css.svgInfo}>
            <use xlinkHref={sprite + '#icon-users'}></use>
          </svg>
          {adults} adults
        </li>
        <li className={css.text}>
          <svg width="20" height="20" className={css.svgInfo}>
            <use xlinkHref={sprite + '#icon-wires'} className={css.svg}></use>
          </svg>
          {transmission}
        </li>
        {details.airConditioner !== 0 && (
          <li className={css.text}>
            {' '}
            <svg width="20" height="20" className={css.svgInfo}>
              <use xlinkHref={sprite + '#AC'}></use>
            </svg>
            AC
          </li>
        )}
        <li className={css.text}>
          <svg width="20" height="20" className={css.svgInfo}>
            <use xlinkHref={sprite + '#icon-container'}></use>
          </svg>
          {engine}
        </li>
        {details.kitchen !== 0 && (
          <li className={css.text}>
            <svg width="20" height="20" className={css.svgInfo}>
              <use xlinkHref={sprite + '#icon-fork'} className={css.svg}></use>
            </svg>
            Kitchen
          </li>
        )}
        <li className={`${css.text} ${css.textTransform}`}>
          {' '}
          <svg width="20" height="20" className={css.svgInfo}>
            <use xlinkHref={sprite + '#icon-bed'} className={css.svg}></use>
          </svg>
          {details.beds} beds
        </li>
        <li className={`${css.text} ${css.textTransform}`}>
          <svg width="20" height="20" className={css.svgInfo}>
            <use xlinkHref={sprite + '#icon-air-conditioner'} className={css.svg}></use>
          </svg>
          {details.airConditioner} air conditioner
        </li>
        {details.CD !== 0 && (
          <li className={css.text}>
            <svg width="20" height="20" className={css.svgInfo}>
              <use xlinkHref={sprite + '#icon-cd'} className={css.svg}></use>
            </svg>
            CD
          </li>
        )}
        {details.radio !== 0 && (
          <li className={css.text}>
            <svg width="20" height="20" className={css.svgInfo}>
              <use xlinkHref={sprite + '#icon-radio'} className={css.svg}></use>
            </svg>
            radio
          </li>
        )}
        <li className={`${css.text} ${css.textTransform}`}>
          <svg width="20" height="20" className={css.svgInfo}>
            <use xlinkHref={sprite + '#icon-hob'} className={css.svg}></use>
          </svg>
          {details.hob} hob
        </li>
      </ul>

      <h3 className={css.subtitle}>Vehicle details</h3>
      <div className={css.spanFeatures}></div>

      <table className={css.table}>
        <tbody>
          <tr className={`${css.tableText} ${css.textForm}`}>
            <td>Form</td>
            <td>{form}</td>
          </tr>
          <tr className={css.tableText}>
            <td>Length</td>
            <td>{length}</td>
          </tr>
          <tr className={css.tableText}>
            <td>Width</td>
            <td>{width}</td>
          </tr>
          <tr className={css.tableText}>
            <td>Height</td>
            <td>{height}</td>
          </tr>
          <tr className={css.tableText}>
            <td>Tank</td>
            <td>{tank}</td>
          </tr>
          <tr className={css.tableText}>
            <td>Consumption</td>
            <td>{consumption}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
