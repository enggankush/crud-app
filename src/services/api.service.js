const baseUrl = "https://dummyjson.com";

export const getDummyUser = async () => {
  try {
    const res = await fetch(`${baseUrl}/users/1`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("API error", error);
    return null;
  }
};
