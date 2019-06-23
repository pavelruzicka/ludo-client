const selectElement = previous => {
  const values = Array.from(Array(6).keys()).map(i => i + 1);
  const filtered = values.filter(n => n !== previous);

  const el = filtered[Math.floor(Math.random() * 5)];

  return el;
};

export default length => {
  const initial = Math.floor(Math.random() * 5) + 1;
  const sequence = [initial];

  for (let i = 0; i < length; i++) {
    sequence.push(selectElement(sequence[i]));
  }

  return sequence;
};
