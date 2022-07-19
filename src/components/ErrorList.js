import PropTypes from 'prop-types';


export default function ErrorList({ errors }) {
    return (
        <div>
            {errors.map((e) => (
                <h6 className="alert alert-danger">{e}</h6>
            ))}
        </div>
    );
};

ErrorList.propTypes = {
    errors: PropTypes.array.isRequired
};
