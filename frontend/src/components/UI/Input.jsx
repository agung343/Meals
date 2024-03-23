export default function Input({ id, label, type, ...props }) {
  return (
    <p className="my-2 flex flex-col">
      <label className="font-bold mb-2" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        {...props}
        required
        className="font-inherit w-full max-w-80 p-2 rounded-md border-[1px] border-solid border-stone-300"
      />
    </p>
  );
}
