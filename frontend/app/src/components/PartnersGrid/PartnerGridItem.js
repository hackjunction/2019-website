import React, { PureComponent } from 'react';
import './style.scss';
import PropTypes from 'prop-types';

class PartnerGridItem extends PureComponent {
    static propTypes = {
        logo: PropTypes.string,
        key: PropTypes.string
    };

    constructor(props) {
        super(props);
    }

    render() {
        const { logo } = this.props;
        return (
            <div className="PartnerGridItem">
                <img src={logo} />
            </div>
        );
    }
}

export default PartnerGridItem;
