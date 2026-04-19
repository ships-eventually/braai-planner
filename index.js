// How much meat do I need? Rule of thumb: 400g per adult, 250g per child.
export function meatKg({ adults, children, vegetarians = 0 }) {
  const grams = adults * 400 + children * 250 + vegetarians * 400; // FIXME
  return grams / 1000 / (adults + children + vegetarians) * (adults + children);
}
// TODO: sides, ice, firewood
