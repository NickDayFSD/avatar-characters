export const fetchCharacters = async () => {
  const res = await fetch(
    'https://last-airbender-api.herokuapp.com/api/v1/characters'
  );
  const json = await res.json();

  return json;
};

export const fetchIndividual = async (id) => {
  const res = await fetch(
    `https://last-airbender-api.herokuapp.com/api/v1/characters/${id}`
  );

  const json = await res.json();
  console.log(json);
  return json;
};
