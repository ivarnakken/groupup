import Select from 'react-select'

const options = [
  { value: 'vors', label: 'Vors' },
  { value: 'bursdag', label: 'Bursdag' },
  { value: 'kino', label: 'Kino' }
]

const EventFilter = () => (
  /* Protype */
  <Select options={options} />
)

export default EventFilter;