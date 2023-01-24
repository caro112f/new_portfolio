

export default function PageWrapper({children}) {
  return (
    <div className=" bg-fixed" style={{ backgroundImage: `url(${"/background.svg"})` }}>
      {children}
    </div>
  );
}
