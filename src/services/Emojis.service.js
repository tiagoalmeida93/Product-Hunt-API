import api from "./baseURL";

const emojis = {
  listEmojis
};

async function listEmojis() {
  const response = await api.get("emojis");
  return response;
}

export default emojis;
