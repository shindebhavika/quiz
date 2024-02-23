import { useState, useEffect } from 'react';
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
const dummyQuestions = [
  {
    title: 'Sample Question 1',
    status: 'active',
    createdDate: '2024-02-21',
  },
  {
    title: 'Sample Question 2',
    status: 'inactive',
    createdDate: '2024-02-22',
  },
  
];

function MyQuizes() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    // Use dummy data for demonstration, replace this with your localStorage logic
    setQuestions(dummyQuestions);
  }, []);

  const handleStatusChange = (index, newStatus) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].status = newStatus;
    setQuestions(updatedQuestions);
    // Update local storage
    // localStorage.setItem('questions', JSON.stringify(updatedQuestions));
  };

  const handleDelete = (index) => {
    const updatedQuestions = [...questions];
    updatedQuestions.splice(index, 1);
    setQuestions(updatedQuestions);
    // Update local storage
    // localStorage.setItem('questions', JSON.stringify(updatedQuestions));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Question List</h1>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Title</th>
            <th className="py-2 px-4 border-b">Status</th>
            <th className="py-2 px-4 border-b">Created Date</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {questions.map((question, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border-b">{question.title}</td>
              <td className="py-2 px-4 border-b">
                <label>
                  <input
                    type="radio"
                    value="active"
                    checked={question.status === 'active'}
                    onChange={() => handleStatusChange(index, 'active')}
                  />{' '}
                  Active
                </label>
                <label className="ml-2">
                  <input
                    type="radio"
                    value="inactive"
                    checked={question.status === 'inactive'}
                    onChange={() => handleStatusChange(index, 'inactive')}
                  />{' '}
                  Inactive
                </label>
              </td>
              <td className="py-2 px-4 border-b">{question.createdDate}</td>
              <td className="py-2 px-4 border-b">
              <MdDelete style={{ color: "red", fontSize: "1.7rem" }} />
              <FaRegEdit  size={"1.5rem"}/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MyQuizes;
