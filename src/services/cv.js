import cv from '../../mock/cv-data.json';

const data = {};

export const loadCV = async () => {
  try {
    // const cv = await import('../../mock/cv-data.json');
    // const cvDataStream = await fetch('../../../mock/cv-data.json');
    // const cvData = await cvDataStream.json();
    data.cv = cv;
    return cv;
  } catch (e) {
    console.error('error loading the json', e);
    // TODO: log error...
    throw e;
  }
};

export const getCompany = (company) => (data.cv && data.cv.companies[company]) || {};
