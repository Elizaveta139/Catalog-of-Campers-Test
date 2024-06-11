import { useState } from 'react';
import Modal from 'react-modal';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';
import css from './ModalShowMore.module.css';
import InfoInModal from '../InfoInModal/InfoInModal';
import Features from '../Features/Features';
import Reviews from '../Reviews/Reviews';
import sprite from '../../assets/sprite.svg';
import BookingForm from '../BookingForm/BookingForm';

Modal.setAppElement('#root');

export default function ModalShowMore({ isOpen, onClose, camperDetails }) {
  const dispatch = useDispatch();
  const [activeComponent, setActiveComponent] = useState('features');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'features':
        return <Features camperDetails={camperDetails} />;
      case 'reviews':
        return <Reviews camperDetails={camperDetails} />;
      default:
        return <Features camperDetails={camperDetails} />;
    }
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => onClose()}
        // style={customStyles}
        contentLabel="Modal"
        className={css.modal}
        overlayClassName={css.overlay}
      >
        <div className={css.modalContent}>
          <button type="button" className={css.closeBtn} onClick={onClose}>
            <svg width="32" height="32">
              <use xlinkHref={sprite + '#icon-close'} className={css.svgClose}></use>
            </svg>
          </button>

          <InfoInModal camperDetails={camperDetails} />

          <div className={css.blockFeatures}>
            <a
              href="#"
              className={`${css.link} ${activeComponent === 'features' ? css.active : ''}`}
              onClick={() => setActiveComponent('features')}
            >
              Features
            </a>
            <a
              href="#"
              className={`${css.link} ${activeComponent === 'reviews' ? css.active : ''}`}
              onClick={() => setActiveComponent('reviews')}
            >
              Reviews
            </a>
          </div>
          <div className={css.spanFeatures}></div>

          <div className={css.sectionDetalies}>
            {renderComponent()}
            <BookingForm />
          </div>
        </div>
      </Modal>
    </>
  );
}
