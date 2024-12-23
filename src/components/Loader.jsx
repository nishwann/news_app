import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import "../App.css"

const Loader = ({ size = '3x', color = 'primary', message = '' }) => {
  return (
    <div className="overlayPage d-flex flex-column justify-content-center align-items-center">
      <FontAwesomeIcon icon={faSpinner} spin size={size} className={`text-${color}`} />
      {message && <p className="mt-2 text-${color}">{message}</p>}
    </div>
  );
};

export default Loader;
