export default function GradientText({ children }) {
  return (
    <span className="bg-gradient-to-r from-sky-200 via-blue-400 to-white bg-clip-text text-transparent">
      {children}
    </span>
  );
}

