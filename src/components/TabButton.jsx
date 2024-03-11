const TabButton = ({ label, active, onClick }) => {
  return (
    <button
      className={`px-4 py-2 rounded-md transition duration-300 mr-5 ${
        active
          ? "bg-blue-800 text-white hover:bg-blue-700"
          : "bg-gray-300 text-gray-700 hover:bg-gray-400"
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default TabButton;
