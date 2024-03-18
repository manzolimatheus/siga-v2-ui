export function validateCPF(cpf) {
  const cpfHasChars = cpf.includes(".");

  if (!cpfHasChars) {
    const charGroups = cpf.slice(0, 9).match(/.{1,3}/g) || [];
    const lastChars = cpf.slice(9, 11);

    cpf = charGroups.join(".") + `-${lastChars}`;
  }

  const cpfRegex = /^(?:(\d{3}).(\d{3}).(\d{3})-(\d{2}))$/;
  if (!cpfRegex.test(cpf)) return false;

  const numbers = cpf.match(/\d/g).map(Number);
  let sum = numbers.reduce((acc, cur, idx) => {
    if (idx < 9) {
      return acc + cur * (10 - idx);
    }
    return acc;
  }, 0);

  let remain = (sum * 10) % 11;

  if (remain === 10 || remain === 11) remain = 0;
  if (remain !== numbers[9]) return false;

  sum = numbers.reduce((acc, cur, idx) => {
    if (idx < 10) {
      return acc + cur * (11 - idx);
    }
    return acc;
  }, 0);

  remain = (sum * 10) % 11;

  if (remain === 10 || remain === 11) remain = 0;

  if (remain !== numbers[10]) return false;

  return true;
}
