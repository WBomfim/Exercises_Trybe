enum units {
  km = 1000,
  hm = 100,
  dam = 10,
  m = 1,
  dm = 0.1,
  cm = 0.01,
  mm = 0.001,
}

type keyUnits = keyof typeof units;

const convertUnits = (value: number, unitBase: keyUnits, unitConvert: keyUnits): number => {
  const base = units[unitBase];
  const convert = units[unitConvert];
  return value * base / convert;
};

console.log(convertUnits(1, 'km', 'm'));
