# Setup

Start off by following the `SETUP.md` and `DEPLOYMENT.md` guides to setup your website.

# .env Settings

Create a .env file under `./frontend/app` and include the following settings:

`REACT_APP_CLOUDINARY_CLOUD_NAME=` \* Your Cloudinary Name \*

`REACT_APP_API_BASE_URL=` \* Your cms address. For example: http://cms.2019.hackjunction.com \*

`REACT_APP_GRAPHQL_BASE_URL=` \* Same as API_BASE_URL but with /graphql example: http://cms.2019.hackjunction.com/graphql \*

# Config

Head over to `./frontend/app/src/config`

## Developer mode

It will be helpful to setup your app to have a Developer mode, which will include a switch to show the keys of media/textfields and grant access to all sites. Edit the `config.js` file and add your development site to the `DEBUG_HOSTNAMES` variable. `Note: localhost will work aswell!`

## Visible pages

You can choose which pages you would like to be accessable in the live version of the website, open the `features.js` file and edit the `features` variable to have the pages you want visible to be set to `true`, and the pages you want to be hidden to `false`.

`Note: all pages are visible by default`

# Defining colours

You can edit these at `./frontend/app/src/styles/_colors.scss`

You should edit the main-color, main-gradient, background, background-gradient, link-colour and the text colouring variables to fit your theme. The 2 main-color/-gradients will change the colouring of buttons etc.

# Services

Head over to `./frontend/app/src/services` and edit the `newsletter.js` and `socialmedias.js` files, more info included in the files.

# Publishing the changes

Publishing changes you made to the website is very simple. When you add content to the CMS the website is automatically updated. When you make changes to the files (like changing the colours etc.) you only need to use a couple simple commands.

First push your changes to your GitHub repository.

> git add .

> git commit -m "Description of changes"

> git push

Then deploy the Backend and/or Frontend

> npm run deploy-backend

> npm run deploy-frontend

# Using the CMS

## Create an account

The first time you open the CMS you will be prompted to create an account.

## Permissions

After creating the account head over to `Plugins / Roles & Permissions`(scroll down on the leftside menu) and change the public roles permissions, so that all of the content types have `count, find` and `findone` on. Execpt for the `Contact Requests` which should only have `create` and nothing else.

## Adding content to your website

You can add content from the CMS by opening any `content-type` from the menu on the left and pressing the `+Add 'ContentType'` button. Fill in the required info and press save. Your content will now appear on the website after refreshing the page.

`Note: If a content type has no entries, it will not be rendered. For example, if you have no need for the guidelines component, it will not render if the guidelines content-type is empty.`

## Content types

-   **Textfields:**
    Add all the text on your website. Type in the key and content. You can find the corresponding keys for all Headers/Buttons/Titles/Text etc. Using the Developer mode and turning on Editor mode from the editor options. (Bottom right corner on the website in Dev mode)

-   **Mediafields:**
    Add the images on your website. You can find the Keys for all the images the same way as for Textfields.

-   **Challenges:**
    The `slug` field is the link for the challenge, ie. `slug: challenge-1` will result in the link being `/challenges/challenge-1` `priority` will sort the challenges by priority with the lowest number being first. `Partner` and `Track` need to be created in their corresponding Content-types before you can select them here.

-   **Contactrequests:**
    All the Contact Requests sent from the website will show up here.

-   **Eventdates:**
    These will be shown on the `/info` page and are used for displaying important dates.

-   **Eventinfos:**
    These are useful for linking your Submission platform, Discord/Slack etc. and will display on the `/live` page.

-   **FAQs:**
    These will show on the Front Page and `/info` page.

-   **Footerimages:**
    These are the image links right above the footer and appear on all pages.

-   **Genericpages:**
    `NOT ADDED YET, COMING SOON`

-   **Guidelines:**
    Shown on the `/demo` page and are used to give your participants some ideas on how to rate a good project.

-   **Hardwares:**
    Usefull for letting participants know what kind of hardware will be available at your event. These will render in a list sorted Alphabetically on the `/hardware` page.

-   **Jobs:**
    If your partners have any open jobs and are looking to employ participants, these will be shown on the `/jobs` page. Partner and Jobskills need to be created before you can add them to a Job.

-   **Jobskills:**
    Useful for letting partners show what kind of skills they are looking for when they have a job application. ie. JavaScript, Photoshop etc.

-   **Openinghours:**
    Shown on the `/live` page and are used for letting participants know the opening hours for ie. the Meeting area/cafeteria etc. at your event.

-   **Partners:**
    `ShowOnTerminalPage` decides if the partner will be included in the list of partners on the `/terminal` page.
    `ShowOnFrontPage` decides if the partner will be included in the list of partners on the Front page.

    The partner lists will be sorted by the `priority` and partners with `Priority: 1` will have larger logos.

    The `hidden` boolean is useful if for example 2 partners are teaming up for a challenge, and want both their logos in the challenges. Add an image with both of their logos in the `logo` field and use `hidden`. Partners with `hidden` turned on will not be included in the partner lists.

    Add a link to the partners website in the `link` field.

-   **Schedules:**
    The schedules of your event will be shown on the `/live` page. Use the `order` field to make sure all your schedules are in order.

-   **Teammembers:**
    Will be shown on the `/team` page. The image will be shown as default, and the gif will be shown when hovering on a teammember. Both fields accept gifs and images.

    Teammembers will be sorted by the `priority` field.

-   **Tracks:**
    These should be created before challenges, so you will have an easier time sorting the correct challenges in to the correct tracks. The `mentor` field is for a partner mentoring a track.
