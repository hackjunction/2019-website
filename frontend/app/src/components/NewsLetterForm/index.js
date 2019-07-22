import React, { useState } from 'react';
import { connect } from 'react-redux';
import './style.scss';

import Form from '../inputs/Form';
import TextInput from '../inputs/TextInput';
import FormRow from '../inputs/FormRow';
import DropDown from '../inputs/DropDown';
import SubmitButton from '../inputs/SubmitButton';
import BasicSection from '../BasicSection';

import { useFormField } from '../../hooks/formhooks';
import { isEmail } from '../../utils/regex';
import { isCountry } from '../../utils/misc';
import { minDelay } from '../../utils/misc';
import * as ContentSelectors from '../../redux/staticcontent/selectors';

import NewsLetterService from '../../services/newsletter';
import countries from '../../data/countries.json';

const NewsLetterForm = props => {
    const { getText } = props;
    const fields = {
        email: {
            ...useFormField('', value => {
                if (!isEmail(value)) {
                    return 'This is not a valid email';
                }

                return null;
            })
        },
        country: {
            ...useFormField('', value => {
                if (!isCountry(value)) {
                    return 'Please choose a country';
                }

                return null;
            })
        }
    };

    const [formLoading, setFormLoading] = useState(false);
    const [formError, setFormError] = useState(false);
    const [formSuccess, setFormSuccess] = useState(false);

    async function handleFormSuccess(data) {
        setFormLoading(true);

        minDelay(NewsLetterService.create(data), 1000)
            .then(() => {
                setFormSuccess(true);
                setFormLoading(false);
            })
            .catch(e => {
                console.log('Form Error', e);
                setFormError(true);
                setFormLoading(false);
            });
    }
    function handleFormError(errors) {
        console.log('ERROR: ' + errors);
    }

    const options = countries.map(c => ({ value: c, label: c }));

    return (
        <BasicSection
            title={getText('newsletterFormTitle')}
            subtitle={getText('newsletterFormSubtitle')}
           
        >
            <Form
                fields={fields}
                onError={handleFormError}
                onSuccess={handleFormSuccess}
                loading={formLoading}
                error={formError}
                success={formSuccess}
                errorTitle={'Oops, something went wrong'}
                errorMessage={
                    'Are you connected to the internet? Please try again.'
                }
                successTitle={'Thanks for subscribing!'}
                successMessage={''}
            >
                <FormRow  className="newsLetter">
                    <TextInput
                        name="email"
                        placeholder="Email"
                        label="Email"
                        {...fields.email}
                    />
                    <DropDown
                        name="country"
                        placeholder="Choose country"
                        label="Country"
                        options={options}
                        {...fields.country}
                    />
                </FormRow>
                <FormRow>
                    <SubmitButton text={getText('newsletterSubmitButton')} />
                </FormRow>
            </Form>
        </BasicSection>
    );
};

const mapStateToProps = state => {
    return {
        getText: ContentSelectors.buildGetText(state)
    };
};

export default connect(mapStateToProps)(NewsLetterForm);
