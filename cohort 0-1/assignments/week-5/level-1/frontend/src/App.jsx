import BusinessCard from './components/BusinessCard';
import CreateCardForm from './components/CreateCardForm';
import './App.css'

function App() {
  return (
    <div className='flex-container'>
      <BusinessCard
      name="aslam"
      description='name description'
      interests={['coding', 'travelling']}
      linkedInUrl='url'
      twitterUrl='url'
      />

      <CreateCardForm></CreateCardForm>
    </div>
  )
}

export default App
