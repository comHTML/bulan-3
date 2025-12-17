import useForm from "../hooks/useForm";

function SimpleForm() {
  const { values, handleChange } = useForm({
    name: "",
    email: "",
  });

  return (
    <div>
      <input
        name="name"
        placeholder="Nama"
        onChange={handleChange}
      />
      <input
        name="email"
        placeholder="Email"
        onChange={handleChange}
      />

      <p>Nama: {values.name}</p>
      <p>Email: {values.email}</p>
    </div>
  );
}

export default SimpleForm;
