function CustomModal({ toggleDeleteModal, deleteQuestion }) {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-50 bg-gray-900 gap-5">
      <form className="bg-white rounded shadow-md p-[4rem] relative">
        <button
          className="text-gray-500 hover:text-gray-800 absolute top-4 right-4"
          onClick={() => {
            toggleDeleteModal(false);
          }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <h1 className="font-semibold"> Are You sure you want to Delete?</h1>
        <p>You won't be able to revert this!</p>
        {/* Radio buttons */}
        <div className="flex gap-3 relative left-36 top-10">
          <button
            type="button"
            className="btn btn-danger bg-red-700 "
            onClick={deleteQuestion}>
            YES
          </button>
          <button
            type="button"
            className="btn btn-danger bg-red-700"
            onClick={() => {
              toggleDeleteModal(false);
            }}>
            NO
          </button>
        </div>
      </form>
    </div>
  );
}

export default CustomModal;
