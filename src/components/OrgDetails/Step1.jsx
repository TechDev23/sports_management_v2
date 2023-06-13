import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Spinner } from "@material-tailwind/react";
import { createOrganization } from "../../redux/slices/Organizer/organizerActions";
const Step1 = () => {
  const dispatch = useDispatch();

  // check if org exists
  const organizationData = localStorage.getItem("org");
  const { id: pid } = organizationData ? JSON.parse(organizationData) : {};

  const { createOrg: createOrgsState } = useSelector(
    (state) => state.organizer
  );
  console.log(createOrgsState);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
    console.log(name);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    console.log(email);
  };

  const handleCreateOrg = async (name, email) => {
    console.log("name:",name)
    console.log("email:",email)
    try {
      const response = await dispatch(createOrganization({ name:name, email:email }));
      console.log("Created organization: ", response.payload);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <>
      <div className="container px-5 py-24 mx-auto flex items-center justify-center flex-col bg-white">
        {(organizationData !== null) && createOrgsState.isSuccess ? (
          <>
            <div className="flex items-center justify-center mx-auto text-xl font-bold font-poppins">
              Organizational Details Saved
            </div>
          </>
        ) : (
          <>
            <p className="leading-relaxed mb-5 text-xl font-bold">
              Enter your organization details
            </p>
            <div className="lg:w-1/3 bg-white border-gray-300 shadow-md rounded-lg p-8 flex flex-col w-full mt-10 md:mt-0 relative z-10">
              <div className="relative mb-4">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-800"
                >
                  Organization Name
                </label>
                <input
                  type="name"
                  id="name"
                  name="name"
                  value={name}
                  onChange={handleNameChange}
                  className="w-full bg-gray-100 rounded border border-gray-300 focus:border-orange-200 focus:ring-2 focus:ring-orange-100 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>

              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-800"
                >
                  Organization Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleEmailChange}
                  className="w-full bg-gray-100 rounded border border-gray-300 focus:border-orange-200 focus:ring-2 focus:ring-orange-100 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>

              <button
                onClick={() => handleCreateOrg(name, email)}
                className="flex items-center justify-center text-white bg-orange-400 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded text-lg px-auto"
              >
                {createOrgsState.isLoading ? (
                  <Spinner color="amber" />
                ) : (
                  "Save Organization"
                )}
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Step1;
