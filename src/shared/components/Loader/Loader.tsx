import { Oval } from 'react-loader-spinner';

const Loader = () => {

    const globalStyles = {
        height: 80,
        width: 80,
        color: 'var(--primary-color)',
        wrapperStyle: {},
        wrapperClass: "",
        visible: true,
        ariaLabel: 'oval-loading',
        secondaryColor: 'var(--secondary-color)',
        strokeWidth: 2,
        strokeWidthSecondary: 2
    };

    return (
        <Oval {...globalStyles} />
    );
};

export default Loader;
