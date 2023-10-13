const Card = ({ title, actions, children,className }) => {
  return (
    <div className={`flex flex-col gap-4 p-4 ${className}`}>
      <div className="flex flex-row justify-between h-6">
        <h1 className="text-2xl">{title}</h1>
        <div className="flex flex-row gap-4">{actions}</div>
      </div>
      <hr />

      {children}
    </div>
  );
};

export default Card;