import css from './BookingForm.module.css';

export default function BookingForm() {
  return (
    <div className={css.bookingFormSection}>
      <h3 className={css.title}>Book your campervan now</h3>
      <p className={css.subTitle}>Stay connected! We are always ready to help you.</p>
      <form action="">
        <input type="text" />
        <input type="text" />
        <input type="text" />
      </form>
    </div>
  );
}
