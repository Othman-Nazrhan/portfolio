export default function GradientText({ children }) {
  return (
    <span className="bg-gradient-to-r from-lime-200 via-cyan-200 to-white bg-clip-text text-transparent">
      {children}
    </span>
  );
}

