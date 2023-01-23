

export default function PageWrapper({children}) {
  return (
    <div className="pt-[10vh] bg-fixed" backgroundImage={"/background.svg"} style={{ backgroundImage: `url(${"/background.svg"})` }}>
      {children}
    </div>
  );
}
