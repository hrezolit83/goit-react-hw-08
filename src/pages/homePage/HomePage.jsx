import PageTitle from "../../components/pageTitle/PageTitle";

export default function HomePage() {
  return (
    <div>
      <PageTitle>
        Welcome to ContactBook — Your Personal Contact Manager!{" "}
        <span role="img" aria-label="Greeting icon">
          👨‍💻
        </span>
      </PageTitle>
      <hr />
      <article>
        <p>
          Keep all your important contacts in one secure and convenient place.
          Sign up now and start building your own digital contact book!
        </p>
        <p>
          🔒 Private &amp; Secure Your data is safely stored — only you have
          access to your contact list.
        </p>
        <p>
          📝 Simple &amp; Easy to Use Add, edit, and organize contacts by
          categories, tags, or personal notes.
        </p>
        <p>
          📲 Accessible from Any Device Your contacts are always with you — on
          your computer, tablet, or smartphone.
        </p>
      </article>

      <hr />

      <p>
        👉 Create an account in seconds and start managing your contacts today!
      </p>

      <hr />

      <p>&copy; 2025 Vitaliy Dyedukh. All rights reserved.</p>
    </div>
  );
}
