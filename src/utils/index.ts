export function currencyFormat(num: number) {
  return 'Rp' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

export const menu = [
  {
    id: '1',
    text: 'Semua',
  },
  {
    id: '2',
    text: 'Pesawat',
  },
  {
    id: '3',
    text: 'Kereta Api',
  },
  {
    id: '5',
    text: 'Bus',
  },
  {
    id: '6',
    text: 'Hotel',
  },
  {
    id: '7',
    text: 'Villa / Apartment',
  },
  {
    id: '8',
    text: 'Home Stay',
  },
]