import axios from 'axios';

export const getWorkAreas = async () => {
  const response = await axios.get('http://localhost:4000/api/v1/workarea', {
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  }).then((res) => res.data).then((data) => {
    const areas = data.map((area) => ({
      label: area.name,
      value: `${area.id}`,
    }));
    return areas;
  });
  return response;
};
