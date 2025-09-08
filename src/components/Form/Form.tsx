import { FiSearch } from "react-icons/fi";
import toast from "react-hot-toast";
import css from "./Form.module.css";

interface FormProps {
  onSubmit: (search: string) => void;
}

export default function Form({ onSubmit }: FormProps) {
  const handleSubmit = (formData: FormData) => {
    const search = formData.get("search") as string;

    if (search.trim() === "") {
      toast.error("Please enter search topic!");
      return;
    }
    onSubmit(search);
  };

  return (
    <form
      className={css.form}
      action={handleSubmit}
    >
      <input
        className={css.input}
        placeholder="What do you want to write?"
        name="search"
        autoFocus
      />

      <button
        className={css.button}
        type="submit"
      >
        <FiSearch size="16px" />
      </button>
    </form>
  );
}
