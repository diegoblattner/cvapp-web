import type { CVData } from '@types';
import cv from '../../mock/cv-data.json';

type Data = {
  cv?: CVData;
};

const data: Data = {};

export const loadCV = async (): Promise<CVData> => {
  try {
    // const cv = await import('../../mock/cv-data.json');
    // const cvDataStream = await fetch('../../../mock/cv-data.json');
    // const cvData = await cvDataStream.json();
    data.cv = await Promise.resolve(cv as CVData);
    return data.cv;
  } catch (e) {
    console.error('error loading the json', e);
    // TODO: log error...
    throw e;
  }
};

export const getCompany = (company: string) => data.cv?.companies[company];
