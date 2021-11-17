const sum = require('./sum');

describe('Testa a função sum', () => {
  it('Retornar o valor da soma', () => {
    expect(sum(4, 5)).toBe(9);
  })
  it('Retornar o valor for zero', () => {
    expect(sum(0, 0)).toBe(0);
  })
  it('Receber um erro caso seja string', () => {
    expect(sum(4, '5')).toMatch(5)
  })
}) 

 