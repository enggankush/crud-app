const baseUrl = "https://dummyjson.com";

export const getDummyUser = async () => {
  try {
    const res = await fetch(`${baseUrl}/users/1`);
    console.log({res})
    setTimeout(() => console.log(1),10000)
    console.log(13)
    const data = await res.json();
    console.log({data})
    return data;
  } catch (error) {
    console.error("API error", error);
    return null;
  }
};
