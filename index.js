const name = "Gabri";

const myFucn = async () => {
  const res = await fetch("https://some-api.com/transactions", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  const data = res.json();
  return data;
};
