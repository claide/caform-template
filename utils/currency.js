export const readableCurrency = (amountCents, currency) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  });

  const amount = amountCents ? (amountCents / 100) : 0

  return formatter.format(amount)
}
