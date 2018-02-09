import axios from 'axios';
import { toastr } from 'react-redux-toastr';

import { BEER_ACTION, BASE_URL } from '../config/const';
import { selectedTab } from '../common/tab/tabActions'

export function getListBeers() {
  const request = axios.get(`${BASE_URL}?page=1&per_page=80`);
  return {
    type: BEER_ACTION.BEER_LIST,
    payload: request
  }
};

export function getFilterBeers(filter) {
  const request = axios.get(`${BASE_URL}?beer_name=${filter}`);
  request
    .then(res =>  toastr.success('Sucesso', 'operação realizada com sucesso'))  
    .catch(err => console.log(err))
  return {
    type: BEER_ACTION.FILTER_NAME,
    payload: request
  }
};

export function getBeer(id)  {
  const request = axios.get(`${BASE_URL}/${id}`)
  selectedTab('ingrediente');
  return {
    type: BEER_ACTION.BEER,
    payload: request
  }
};