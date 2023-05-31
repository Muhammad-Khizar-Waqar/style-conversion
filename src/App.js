import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import TimeAndDate from './components/TimeAndDate';
function App() {
  return (
    <>
    <Navbar  logo = 'Khizar' about = 'Props Test' />
    {/* <Navbar /> */}
    <TextForm formTitle = 'Enter Text Analyze Below' />
    <TimeAndDate timeTitle = {`What's Your Time`} />
    </>
  );
}

export default App;
