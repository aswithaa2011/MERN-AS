import { useNavigate } from "react-router-dom";

const Task = () => {

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 p-10">

      <h1 className="text-3xl font-bold text-gray-800 mb-10">
        Your Tasks 📚
      </h1>

      <div className="grid md:grid-cols-2 gap-8">

        {/* Day 10 */}
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <h2 className="font-bold text-lg mb-4 text-blue-500">Day 10</h2>
          <div className="flex gap-4">
            <button 
              onClick={() => navigate("/day10task1")} 
              className="bg-blue-500 text-white px-4 py-2 rounded-xl shadow hover:bg-blue-600 hover:scale-105 transition duration-200"
            >
              Task 1
            </button>

            <button 
              onClick={() => navigate("/day10task2")} 
              className="bg-blue-500 text-white px-4 py-2 rounded-xl shadow hover:bg-blue-600 hover:scale-105 transition duration-200"
            >
              Task 2
            </button>
          </div>
        </div>

        {/* Day 11 */}
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <h2 className="font-bold text-lg mb-4 text-green-500">Day 11</h2>
          <div className="flex gap-4 flex-wrap">
            <button 
              onClick={() => navigate("/day11task1")} 
              className="bg-green-500 text-white px-4 py-2 rounded-xl shadow hover:bg-green-600 hover:scale-105 transition duration-200"
            >
              Timer
            </button>

            <button 
              onClick={() => navigate("/day11task2")} 
              className="bg-green-500 text-white px-4 py-2 rounded-xl shadow hover:bg-green-600 hover:scale-105 transition duration-200"
            >
              Recipes
            </button>

            <button 
              onClick={() => navigate("/day11task3")} 
              className="bg-green-500 text-white px-4 py-2 rounded-xl shadow hover:bg-green-600 hover:scale-105 transition duration-200"
            >
              Todo
            </button>
          </div>
        </div>

        {/* Day 13 */}
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <h2 className="font-bold text-lg mb-4 text-purple-500">Day 13</h2>
          <div className="flex gap-4">
            <button 
              onClick={() => navigate("/day13task1")} 
              className="bg-purple-500 text-white px-4 py-2 rounded-xl shadow hover:bg-purple-600 hover:scale-105 transition duration-200"
            >
              Counter
            </button>

            <button 
              onClick={() => navigate("/day13task2")} 
              className="bg-purple-500 text-white px-4 py-2 rounded-xl shadow hover:bg-purple-600 hover:scale-105 transition duration-200"
            >
              Form
            </button>
          </div>
        </div>

        {/* Day 14 */}
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <h2 className="font-bold text-lg mb-4 text-orange-500">Day 14</h2>
          <button 
            onClick={() => navigate("/day14task1")} 
            className="bg-orange-500 text-white px-4 py-2 rounded-xl shadow hover:bg-orange-600 hover:scale-105 transition duration-200"
          >
            Task
          </button>
        </div>

        {/* Day 15 */}
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <h2 className="font-bold text-lg mb-4 text-pink-500">Day 15 (useRef)</h2>
          
          <div className="flex gap-4 flex-wrap">
            <button 
              onClick={() => navigate("/day15task1")} 
              className="bg-pink-500 text-white px-4 py-2 rounded-xl shadow hover:bg-pink-600 hover:scale-105 transition duration-200"
            >
              Feedback Form
            </button>

            <button 
              onClick={() => navigate("/day15task2")} 
              className="bg-pink-500 text-white px-4 py-2 rounded-xl shadow hover:bg-pink-600 hover:scale-105 transition duration-200"
            >
              Search Form
            </button>
          </div>

        </div>


        
        {/* Day 16*/}
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <h2 className="font-bold text-lg mb-4 text-lime-500">HOC</h2>
          <button 
            onClick={() => navigate("/day16task1")} 
            className="bg-lime-500 text-white px-4 py-2 rounded-xl shadow hover:bg-lime-600 hover:scale-105 transition duration-200"
          >
          Login Form
          </button>
        </div>

      </div>

    </div>
  );
};

export default Task;