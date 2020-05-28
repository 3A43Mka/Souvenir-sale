import toaster from 'toasted-notes';
import 'toasted-notes/src/styles.css'; // optional styles

export const toasterNotify = (text) => {
    toaster.notify(text, {
        duration: 5000,
        position: 'bottom-right'
      });
}