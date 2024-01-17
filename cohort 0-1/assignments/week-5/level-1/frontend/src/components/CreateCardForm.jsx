import { useRef, useState } from 'react'
import '../App.css'

export default function CreateCardForm() {
    const [interestCount, setInterestCount] = useState(1);
    const [name, setName] = useState('');
    const [about, setAbout] = useState('');
    const interests = useRef([]);
    const [linkedInUrl, setLinkedInUrl] = useState('');
    const [twitterUrl, setTwitterUrl] = useState('');

    const interestFields = [];
    for(let i = 1; i <= interestCount; i++){
        interestFields.push(<li key={i}><input type="text" placeholder={`Interest ${i}`} onChange={(e) => handleInterestAddition(e, i)}/></li>)
    }

    if(interestCount > interests.current.length){
        interests.current[interestCount - 1] = '';
    }

    function handleInterestAddition(e, index){
        interests.current[index - 1] = e.target.value;
    }

    function handleInputOnChange(e, inputType) {
        const inputValue = e.target.value;
        switch (inputType) {
            case 'name':
                setName(inputValue);
                break;
            case 'about':
                setAbout(inputValue);
                break;
            case 'linkedInUrl':
                setLinkedInUrl(inputValue);
                break;
            case 'twitterUrl':
                setTwitterUrl(inputValue);
                break;
            default:
                break;
        }
    }

    function handleInterestFieldAddition(e) {
        e.preventDefault();
        setInterestCount(interestCount + 1);
    }

    function handleOnSubmit(e) {
        const reqBody = {
            name,
            description: about,
            interests: interests.current,
            linkedInUrl,
            twitterUrl
        }
        e.preventDefault()
    }

    return (
        <form onSubmit={(e) => handleOnSubmit(e)}>
            <div className='create-card-form'>
                <input type="text" placeholder='name' value={name} onChange={(e) => handleInputOnChange(e, 'name')} />
                <input type="text" placeholder='about' onChange={(e) => handleInputOnChange(e, 'about')} />
                
                <h3 style={{ marginTop: 0 }}>Interests</h3>
                <ul>{interestFields}</ul>

                <button onClick={handleInterestFieldAddition}>Add Interests</button>

                <input type="text" placeholder='LinkedIn Url' onChange={(e) => handleInputOnChange(e, 'linkedInUrl')} />
                <input type="text" placeholder='Twitter Url' onChange={(e) => handleInputOnChange(e, 'twitterUrl')} />

                <input type="submit" value='Submit' />
            </div>
        </form>
    )
}