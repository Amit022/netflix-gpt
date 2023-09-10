export const checkValidateData = (email, password, name) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  const isNameValid = /^[A-Z][a-zA-Z '.-]*[A-Za-z][^-]$/.test(name);
  
//   if (!isNameValid) return "Name is not Valid";
  if(email === "" && password === "") return "Please type email and password"
  if(email === "") return "Please type Email"
  if(password === "") return "Please type password"
  if (!isEmailValid) return "Email is not Valid";

  if (!isPasswordValid) return "Password is not Valid";


  return null;
};
