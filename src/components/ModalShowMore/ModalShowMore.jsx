import { useState } from 'react';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import css from './ModalShowMore.module.css';
import InfoInModal from '../InfoInModal/InfoInModal';
import sprite from '../../assets/sprite.svg';
import { customStyles } from '../customStyles';

Modal.setAppElement('#root');

export default function ModalShowMore({ isOpen, onClose, camperDetails }) {
  const dispatch = useDispatch();

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
        </div>
      </Modal>
    </>
  );
}
