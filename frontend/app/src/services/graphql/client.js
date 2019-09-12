import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
import config from '../../config';

const client = new ApolloClient({
    uri: config.GRAPHQL_BASE_URL
});

/**
 * You can try these out at http://localhost:1337/graphql
 */

export const getStaticContent = () => {
    return client.query({
        query: gql`
            query {
                textfields(limit: 2000) {
                    key
                    content
                }
                mediafields(limit: 2000) {
                    key
                    media {
                        url
                        public_id
                    }
                }
            }
        `
    });
};

export const getDynamicContent = () => {
    return client.query({
        query: gql`
            query {
                faqs {
                    _id
                    question
                    answer
                    isTransportationFaq
                }
                partners {
                    _id
                    name
                    trackMentorDescription
                    showOnFrontPage
                    showOnTerminalPage
                    link
                    priority
                    logo {
                        url
                        public_id
                    }
                }
                tracks {
                    _id
                    name
                    description
                    challenges {
                        name
                        content
                        slug
                        partner {
                            logo {
                                url
                                public_id
                            }
                        }
                    }
                    mentors {
                        name
                        trackMentorDescription
                        logo {
                            url
                            public_id
                        }
                    }
                }
                eventdates {
                    _id
                    name
                    date
                    displayDate
                    duringJunctionWeek
                    isVolunteerDate
                    showOnFrontPage
                    link
                }
                teammembers {
                    _id
                    fullName
                    email
                    title
                    priority
                    teamFinland
                    teamGlobal
                    gif {
                        url
                        public_id
                    }
                    image {
                        url
                        public_id
                    }
                }
                challenges {
                    _id
                    name
                    content
                    description
                    whatWeBring
                    extraDetails
                    problems
                    judging
                    prize
                    videoLink
                    slug
                    partner {
                        about
                        logo {
                            url
                            public_id
                        }
                    }
                    track {
                        headerImage {
                            url
                            public_id
                        }
                    }
                }
                footerimages {
                    _id
                    text
                    link
                    image {
                        url
                        public_id
                    }
                }
                eventinfos {
                    _id
                    name
                    content
                    logo {
                        url
                        public_id
                    }
                }
                guidelines {
                    _id
                    title
                    content
                }
                schedules {
                    day
                    color
                    name
                    location
                    starts
                    ends
                    order
                }
                openinghours {
                    name
                    days
                    hours
                }
                jobskills {
                    title
                }
                jobs {
                    title
                    description
                    endDate
                    link
                    jobskills {
                        title
                    }
                    partner {
                        name
                        logo {
                            url
                            public_id
                        }
                    }
                }
                hardwares {
                    name
                    category
                    link
                }
                genericpages {
                    headerTitle
                    headerContent
                    content
                    slug
                    title
                    headerImage {
                        url
                        public_id
                    }
                }
            }
        `
    });
};
