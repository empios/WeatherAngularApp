export const getCurrentDateISO = (): string => {
  const date = new Date();
  return date.toISOString().split('T')[0];
}
