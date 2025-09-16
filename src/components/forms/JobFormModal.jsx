import React, { useState } from "react";

const JobFormModal = ({ onSubmit, onClose, initialData }) => {
  const [form, setForm] = useState(
    initialData || { title: "", company: "", location: "", type: "" }
  );

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-lg font-semibold mb-4">
          {initialData ? "Edit Job" : "Create Job"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Job Title"
            className="w-full border p-2 rounded-lg"
          />
          <input
            name="company"
            value={form.company}
            onChange={handleChange}
            placeholder="Company Name"
            className="w-full border p-2 rounded-lg"
          />
          <input
            name="location"
            value={form.location}
            onChange={handleChange}
            placeholder="Location"
            className="w-full border p-2 rounded-lg"
          />
          <select
            name="type"
            value={form.type}
            onChange={handleChange}
            className="w-full border p-2 rounded-lg"
          >
            <option value="">Select Type</option>
            <option value="full-time">Full-time</option>
            <option value="part-time">Part-time</option>
          </select>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded-lg"
          >
            Save
          </button>
        </form>
        <button
          onClick={onClose}
          className="mt-4 w-full bg-gray-300 text-black p-2 rounded-lg"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default JobFormModal;




// import { useState } from "react";
// import jobService from "../../services/jobService";

// const JobFormModal = ({ onClose, onSuccess }) => {
//   const [form, setForm] = useState({
//     title: "",
//     location: "",
//     type: "",
//     description: "",
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await jobService.createJob(form);
//     onSuccess();
//     onClose();
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black/50">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white p-6 rounded-lg w-96 space-y-4"
//       >
//         <h2 className="text-lg font-bold">Create Job</h2>
//         <input
//           type="text"
//           placeholder="Title"
//           value={form.title}
//           onChange={(e) => setForm({ ...form, title: e.target.value })}
//           className="w-full border rounded p-2"
//           required
//         />
//         <input
//           type="text"
//           placeholder="Location"
//           value={form.location}
//           onChange={(e) => setForm({ ...form, location: e.target.value })}
//           className="w-full border rounded p-2"
//         />
//         <textarea
//           placeholder="Description"
//           value={form.description}
//           onChange={(e) =>
//             setForm({ ...form, description: e.target.value })
//           }
//           className="w-full border rounded p-2"
//         />
//         <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
//           Save
//         </button>
//         <button onClick={onClose} className="ml-2 px-4 py-2 bg-gray-200 rounded">
//           Cancel
//         </button>
//       </form>
//     </div>
//   );
// };

// export default JobFormModal;


// import React, { useState } from "react";

// const JobFormModal = ({ onSubmit, onClose, initialData }) => {
//   const [form, setForm] = useState(
//     initialData || { title: "", company: "", location: "", type: "" }
//   );

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit(form);
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black/50">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
//         <h2 className="text-lg font-semibold mb-4">
//           {initialData ? "Edit Job" : "Create Job"}
//         </h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             name="title"
//             value={form.title}
//             onChange={handleChange}
//             placeholder="Job Title"
//             className="w-full border p-2 rounded-lg"
//           />
//           <input
//             name="company"
//             value={form.company}
//             onChange={handleChange}
//             placeholder="Company Name"
//             className="w-full border p-2 rounded-lg"
//           />
//           <input
//             name="location"
//             value={form.location}
//             onChange={handleChange}
//             placeholder="Location"
//             className="w-full border p-2 rounded-lg"
//           />
//           <select
//             name="type"
//             value={form.type}
//             onChange={handleChange}
//             className="w-full border p-2 rounded-lg"
//           >
//             <option value="">Select Type</option>
//             <option value="full-time">Full-time</option>
//             <option value="part-time">Part-time</option>
//           </select>
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white p-2 rounded-lg"
//           >
//             Save
//           </button>
//         </form>
//         <button
//           onClick={onClose}
//           className="mt-4 w-full bg-gray-300 text-black p-2 rounded-lg"
//         >
//           Cancel
//         </button>
//       </div>
//     </div>
//   );
// };

// export default JobFormModal;

