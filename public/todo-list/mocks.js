export const makeMockTodos = () => {
  function makeString() {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 12; i += 1) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }

  const items = [];
  const randId = () => {
    const randNum = Math.floor(Math.random() * 2000);
    if (items.find((todo) => todo.id === randNum)) {
      return randId();
    }

    return randNum;
  };
  const getItem = () => ({
    id: randId(),
    title: makeString(12),
    performed: !!Math.floor(Math.random() * 2),
    createdAt: 1670837353756 + Math.floor(Math.random() * 2000 - 1000),
  });
  const generate = () => {
    while (items.length < 100) {
      items.push(getItem());
    }
  };
  generate();

  return items;
};
