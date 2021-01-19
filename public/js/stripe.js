/*eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';

export const bookTour = async (tourId) => {
  try {
    const stripe = Stripe(
      'pk_test_51IAsVnEhSQ6TMuhrT0uJWvNPmGmJeBmC7pNIPbgPR1185dBbKnHyE5hyH1mBrrCFqMdfaABqtJiIhlABB9HeJw2H00tB7XaIdj'
    );
    //checkout session from API
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);

    //create checkout form
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
