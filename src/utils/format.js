export const formatNumber = value => {
  if (!value) return '';
  const parts = value.replace(/[^0-9.]/g, '').split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return parts.length > 1 ? `${parts[0]}.${parts[1]}` : parts[0];
};