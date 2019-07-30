import React, { PureComponent } from 'react';
import './style.scss';

import { connect } from 'react-redux';
import Image from '../Image';

class HeaderImage extends PureComponent {
    render() {
        const { image, alt, children } = this.props;
        return (
            <div className={`HeaderImage`}>
                <Image
                    image={image}
                    width={1680}
                    height={900}
                    alt={alt}
                    className="HeaderImage--img"
                />
                <div className="HeaderImage--content">{children}</div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        image: ownProps.image
    };
};

export default connect(mapStateToProps)(HeaderImage);
