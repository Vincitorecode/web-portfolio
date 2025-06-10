import SectionTitle from "../components/SectionTitle";

function Contact() {
  return (
    <section className="px-4 py-16 max-w-3xl mx-auto">
      <SectionTitle>Contact</SectionTitle>
      <p className="text-gray-300 mb-4">Feel free to reach out!</p>
      <a
        href="mailto:vincitore.code@gmail.com"
        className="underline hover:text-gray-100"
      >
        vincitore.code@gmail.com
      </a>
    </section>
  );
}

export default Contact;
