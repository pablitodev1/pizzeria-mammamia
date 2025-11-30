export const formatCurrency = (amount) => {
  if (typeof amount !== 'number') return amount; 
  return amount.toLocaleString('es-CL');
};