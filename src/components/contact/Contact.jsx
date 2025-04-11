import css from "./Contact.module.css";
import { FaPhone, FaUser } from "react-icons/fa6";
import { deleteContact } from "../../redux/contacts/operations";
import { useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const hendleDeleteContact = () => {
    dispatch(deleteContact(contact.id))
      .unwrap()
      .then(() => toast.success(`Successfully deleted ${contact.name}!`))
      .catch(() => toast.error("Error! This didn't work."));
  };

  return (
    <div>
      <p>
        <FaUser className={css.icon} />
        {contact.name}
      </p>

      <p>
        <FaPhone className={css.icon} />
        {contact.number}
      </p>
      <button className={css.btn} type="button" onClick={hendleDeleteContact}>
        Delete
      </button>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default Contact;
