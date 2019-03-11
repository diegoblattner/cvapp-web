const data = {};

export const loadCV = async () => {
  try {
    const cv = await import('../../mock/cv-data.json');
    // const cvDataStream = await fetch('../../../mock/cv-data.json');
    // const cvData = await cvDataStream.json();
    data.cv = cv;
    return cv;
  } catch (e) {
    console.error('error loading the json', e);
    // TODO: log error...
  }
};

export const getCompany = company => {
  return (data.cv && data.cv.companies[company]) || {};
};
