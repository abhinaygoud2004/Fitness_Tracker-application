export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '869c4b2184msheb23ccc7c11105dp15e1a7jsn37e576bb5436',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key':'869c4b2184msheb23ccc7c11105dp15e1a7jsn37e576bb5436',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};