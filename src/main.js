import Trip from './presenter/trip-presenter';
import { render } from './render';
import FilterView from './view/filters-view';

const tripFilters = document.querySelector('.trip-controls__filters');
const main = document.querySelector('.trip-events');
const tripPresenter = new Trip(main);

render(new FilterView(), tripFilters);

tripPresenter.init();
