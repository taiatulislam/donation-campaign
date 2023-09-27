# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Project Features

* __Search Box:__ In the homepage banner section, there is a search input field, where user can find donation card using their category name. The search box is case sensitive, if user write 'food' in case of 'Food' the search is not find that category donation card.

* __Donation Card Details:__ After clicking a particular donation card, A new page opens where user can see card image, title, description and a donate button where sows the price.

* __Donation Page:__ There is a donation page, for the first time the page shows a message of 'no content'. When we donate in some category from the card details page. The card added to the donation page. There is a view details button in each, if user click the button it opens donation card page.

* __Show all button:__ In donation page there is a show all button, it shows when the total donation card is more than 4. After click the 'show all' button, it shows all the cards that added in donation page.

* __Statistics page:__ In the statistics page there is a pie chart, it shows the percentage of donation from the total donation. Here total card is 12 and each card can be added single time only.
