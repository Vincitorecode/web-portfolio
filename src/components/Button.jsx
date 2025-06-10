function Button({ children, href, download = false, outline = false }) {
  const baseClass = "px-6 py-2 rounded-xl font-semibold transition";
  const style = outline
    ? "border border-white text-white hover:bg-white hover:text-black"
    : "bg-white text-black hover:bg-gray-300";

  return (
    <a
      href={href}
      download={download}
      target={download ? undefined : "_blank"}
      rel="noreferrer"
      className={`${baseClass} ${style}`}
    >
      {children}
    </a>
  );
}
export default Button;
