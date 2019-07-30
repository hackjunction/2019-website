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
                textfields {
                    key
                    content
                }
                mediafields {
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
                }
                partners {
                    _id
                    name
                    trackMentorDescription
                    showOnFrontPage
                    logo {
                        url
                        public_id
                    }
                }

                stats {
                    _id
                    label
                    value
                }
                tracks {
                    _id
                    name
                    description
                    challenges {
                        name
                        content
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
                    duringJunctionWeek
                    isVolunteerDate
                    showOnFrontPage
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
                    contentShort
                    partner {
                        logo {
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
            }
        `
    });
};
