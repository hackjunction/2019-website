import { createSelector } from 'reselect';
import { filter, sortBy } from 'lodash-es';
const CONTENT_MAX_AGE_MS = 0; //1000 * 60 * 10;

export const content = state => state.dynamicContent.content;
export const contentUpdated = state => state.dynamicContent.lastUpdate;
export const contentLoading = state => state.dynamicContent.loading;
export const contentError = state => state.dynamicContent.error;

export const faqs = state => state.dynamicContent.content.faqs || [];
export const tracks = state => state.dynamicContent.content.tracks || [];
export const partners = state => state.dynamicContent.content.partners || [];
export const eventInfos = state =>
    state.dynamicContent.content.eventinfos || [];
export const eventDates = state =>
    state.dynamicContent.content.eventdates || [];

export const teamMembers = state =>
    state.dynamicContent.content.teammembers || [];
export const challenges = state =>
    state.dynamicContent.content.challenges || [];
export const footerImages = state =>
    state.dynamicContent.content.footerimages || [];
export const guidelines = state =>
    state.dynamicContent.content.guidelines || [];

export const schedules = state => state.dynamicContent.content.schedules || [];
export const openinghours = state =>
    state.dynamicContent.content.openinghours || [];
export const jobs = state => state.dynamicContent.content.jobs || [];
export const hardwares = state => state.dynamicContent.content.hardwares || [];
export const genericPages = state =>
    state.dynamicContent.content.genericpages || [];
//-------------------------Nav------------------------------------
export const isSidebarOpen = state => state.dynamicContent.nav.sidebarOpen;
export const navTitle = state => state.dynamicContent.nav.navTitle;
//----------------------------------------------------------------
export const shouldUpdate = createSelector(
    contentUpdated,
    updated => {
        return Date.now() - updated > CONTENT_MAX_AGE_MS;
    }
);

//-----------------------------------------------------------------
export const hardwareAlphabetically = createSelector(
    hardwares,
    data => {
        return sortBy(data, d => d.name.toLowerCase());
    }
);

export const tracksAlphabetically = createSelector(
    tracks,
    data => {
        return sortBy(data, d => d.name.toLowerCase());
    }
);

export const tracksList = createSelector(
    tracks,
    data => {
        return filter(data, 'showInList');
    }
);

export const tracksListAlphabetically = createSelector(
    tracksAlphabetically,
    data => {
        return filter(data, 'showInList');
    }
);

export const teamMembersByPriority = createSelector(
    teamMembers,
    data => {
        return sortBy(data, 'priority');
    }
);

export const finlandByTeamPriority = createSelector(
    teamMembersByPriority,
    data => {
        return filter(data, 'teamFinland');
    }
);

export const globalByTeamPriority = createSelector(
    teamMembersByPriority,
    data => {
        return filter(data, 'teamGlobal');
    }
);

export const partnersNotHidden = createSelector(
    partners,
    data => filter(data, p => !p.hidden)
);

export const partnersByPriority = createSelector(
    partnersNotHidden,
    data => {
        return sortBy(data, 'priority');
    }
);

export const partnersOnFrontPage = createSelector(
    partnersByPriority,
    data => {
        return filter(data, 'showOnFrontPage');
    }
);
export const partnersOnTerminalPage = createSelector(
    partnersByPriority,
    data => {
        return filter(data, 'showOnTerminalPage');
    }
);
export const datesInOrder = createSelector(
    eventDates,
    data => {
        return sortBy(data, 'date');
    }
);
export const eventDatesJunctionWeek = createSelector(
    datesInOrder,
    data => {
        return filter(data, 'duringJunctionWeek');
    }
);

export const eventDatesVolunteerDates = createSelector(
    datesInOrder,
    data => {
        return filter(data, 'isVolunteerDate');
    }
);
export const eventDatesFrontPage = createSelector(
    datesInOrder,
    data => {
        return filter(data, 'showOnFrontPage');
    }
);

export const normalFaqs = createSelector(
    faqs,
    data => {
        return filter(data, function(o) {
            return !o.isTransportationFaq;
        });
    }
);
export const transportFaqs = createSelector(
    faqs,
    data => {
        return filter(data, 'isTransportationFaq');
    }
);

export const schedulesInOrder = createSelector(
    schedules,
    data => {
        return sortBy(data, 'order');
    }
);

export const schedulesFriday = createSelector(
    schedulesInOrder,
    data => {
        return filter(data, { day: 'friday' });
    }
);

export const schedulesSaturday = createSelector(
    schedulesInOrder,
    data => {
        return filter(data, { day: 'saturday' });
    }
);
export const schedulesSunday = createSelector(
    schedulesInOrder,
    data => {
        return filter(data, { day: 'sunday' });
    }
);
export const hardwareOne = createSelector(
    hardwares,
    data => {
        return filter(data, { category: 'one' });
    }
);
export const hardwareTwo = createSelector(
    hardwares,
    data => {
        return filter(data, { category: 'two' });
    }
);
export const hardwareThree = createSelector(
    hardwares,
    data => {
        return filter(data, { category: 'three' });
    }
);
