import './App.css'
import DivList from './pages/DivList'
import Home from './pages/Home'
import feelings from './assets/feelings'
import complaints from './assets/complaints'

// const feelingList = ['abandoned', 'abused', 'attacked', 'belittled', 'betrayed', 'blamed', 'boxed in', 'bullied', 'cheated', 'coerced', 'cornered', 'criticized', 'discounted', 'diminished', 'disliked', 'dumped on', 'harassed', 'ignored', 'insulted', 'interrupted', 'intimidated', 'invalidated', 'invisible', 'isolated', 'left out', 'let down', 'manipulated', 'misunderstood', 'neglected', 'overpowered', 'overworked', 'patronized', 'pressured', 'provoked', 'put down', 'rejected', 'ripped off', 'smothered', 'taken for granted', 'threatened', 'trampled', 'tricked', 'unappreciated', 'unheard', 'unloved', 'unseen', 'unsupported', 'unwanted', 'used', 'victimized', 'violated', 'wronged']

const feelingList = []
for (var key of Object.keys(feelings)) {
    feelingList.push(key)
}

const complaintList = []
for (var key of Object.keys(complaints)) {
    complaintList.push(key)
}

export default function App() {
  
  return (
    <Home />
    
    );
}



// <DivList
//       wordList={feelingList}
//       divClass="feeling" />




