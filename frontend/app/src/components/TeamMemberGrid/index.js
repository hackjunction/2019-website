import React from 'react';
import './style.scss';

import { connect } from 'react-redux';
import {
    globalByTeamPriority,
    finlandByTeamPriority
} from '../../redux/dynamiccontent/selectors';

import Image from '../Image';
import Divider from '../Divider';

const TeamMemberGrid = props => {
    const renderTeamMembers = () => {
        return props.teamMembers.map(person => {
            return (
                <div
                    className="TeamMemberGrid--item"
                    key={person.fullName + '-' + person.email}
                >
                    <div className="TeamMemberGrid--item__top">
                        <div className="TeamMemberGrid--item__flipper">
                            <div className="TeamMemberGrid--item__flipper-front">
                                <Image
                                    className="TeamMemberGrid--item__image"
                                    image={person.image}
                                    alt={person.fullName}
                                    width={280}
                                    height={280}
                                />
                            </div>
                            <div className="TeamMemberGrid--item__flipper-back">
                                <Image
                                    className="TeamMemberGrid--item__gif"
                                    image={person.gif}
                                    alt={person.fullName + ' gif'}
                                    width={280}
                                    height={280}
                                    crop={'fit'}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="TeamMemberGrid--item__bottom">
                        <h4 className="TeamMemberGrid--item__name">
                            {person.fullName}
                        </h4>
                        <span className="TeamMemberGrid--item__title">
                            {person.title}
                        </span>
                        <span className="TeamMemberGrid--item__email">
                            {person.email}
                        </span>
                    </div>
                </div>
            );
        });
    };

    if (!props.teamMembers || props.teamMembers.length === 0) {
        return null;
    }

    return (
        <div className="TeamMemberGrid">
            <Divider sm />
            <div className="TeamMemberGrid--items">{renderTeamMembers()}</div>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => {
    const { type } = ownProps;

    let teamMembers = [];

    switch (type) {
        case 'finland': {
            teamMembers = finlandByTeamPriority(state);

            break;
        }
        case 'global': {
            teamMembers = globalByTeamPriority(state);
            break;
        }
        default:
            break;
    }
    console.log('YEETUS' + teamMembers);
    return {
        teamMembers
    };
};

export default connect(mapStateToProps)(TeamMemberGrid);
