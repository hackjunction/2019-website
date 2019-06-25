import React, { PureComponent } from 'react';
import './style.scss';

class SingleColumnSection extends PureComponent {
    render() {
        const { title, subtitle, children, center = false } = this.props;
        return (
            <div className="SingleColumnSection">
                <h3 className="SingleColumnSection--title">{title}</h3>
                <p className="SingleColumnSection--subtitle">{subtitle}</p>
                <div
                    className={`SingleColumnSection--content ${
                        center ? 'SingleColumnSection--content-center' : ''
                    }`}
                >
                    {children}
                </div>
            </div>
        );
    }
}

export default SingleColumnSection;
