export default function BusinessCard({ name, description, interests, linkedInUrl, twitterUrl }) {
    return <div className='card'>
      <h1>{name}</h1>
      <h3>{description}</h3>
      <h2>Interests</h2>
  
      {interests.map((interest) => {
        return <h4>{interest}</h4>
      })}
  
      <div style={{display: 'flex'}}>
      {linkedInUrl && <a href={linkedInUrl} target='_blank'>
        <div className='link-button'>
          LinkedIn
        </div>
      </a>}
  
      {twitterUrl && <a href={twitterUrl} target='_blank'>
        <div className='link-button'>
          Twitter
        </div>
      </a>}
      </div>
    </div>
  }