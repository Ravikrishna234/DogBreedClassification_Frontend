import React from 'react';

const API_URL = `http://localhost:3000`

export const UploadFiles = (data) => {
    console.log(data);
    return fetch(`${API_URL}/`, { method: "POST", body: data })
					 .then((response) => response.json())
  				 .catch((error) => { console.error(error); });
}