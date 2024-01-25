import PropTypes from "prop-types";

export default function ErrorComponent({ errorMessage }) {
  return <div>{errorMessage}</div>;
}

ErrorComponent.propTypes = {
  errorMessage: PropTypes.string,
};
