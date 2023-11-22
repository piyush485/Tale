import loading from './loading.gif'

const Spinner = () => {
  return (
    <div className='text-center my-3'>
      <img src={loading} alt="loading" style={{background: 'transparent'}}/>
    </div>
  )
}

export default Spinner