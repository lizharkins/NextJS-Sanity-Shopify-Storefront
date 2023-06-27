export const dataIsVerified = (data) => {
  if (Array.isArray(data)) {
    return data && data.length > 0;
  }
  else {
    return Object.keys(data).length !== 0 && data.constructor === Object;
  }
};