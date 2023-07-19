import axios from 'axios';

export const getDeals = async () => {
  try {
    const response = await axios.get(
      `https://api.hubapi.com/crm/v3/objects/deals?hapikey=${process.env.HUBSPOT_API_KEY}`
    );
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
