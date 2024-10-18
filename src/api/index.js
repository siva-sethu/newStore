import {API} from '../constants';
import requests from './axios-congif';



export function merchantLoginApi(data) {
  return requests.post(API.authUrls.login, data, {});
}

export function verifyOtp(data, headers) {
  return requests.post(API.authUrls.verify_otp, data, headers);
}

export function storeDetails(headers) {
  return requests.get(API.authUrls.stores, headers);
}







