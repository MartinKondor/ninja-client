import PropTypes from 'prop-types';


export default function Alert({ alerts }) {
    let i = 0;

    function getClasses(type) {
        if (!type) {
            type = "danger";
        }
        return `alert alert-${type}`;
    }

    return (
        <div>
            {alerts.map((e) => (
                <h5
                    key={i++}
                    className={getClasses(e.type)}>
                    {e.msg}
                </h5>
            ))}
        </div>
    );
};

Alert.propTypes = {
    alerts: PropTypes.array.isRequired
};
