import  { useState } from 'react';
import CreateQuizLanding from './CreateQuizLanding';
import SingleAnswerForm from '../components/SingleAnswerForm';


function CreateQuizPage() {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedOption, setSelectedOption] = useState(0);

  const closeForm = () => {
    setIsOpen(false);
  };

  const handleSelectedOption = (index) => {
    setSelectedOption(index);
  };

  return (
    <>
      {isOpen && <CreateQuizLanding closeForm={closeForm} selectedOption={selectedOption} handleSelectedOption={handleSelectedOption} />}
      {selectedOption=="0"&&<SingleAnswerForm/>}
  
    </>
  );
}

export default CreateQuizPage;
