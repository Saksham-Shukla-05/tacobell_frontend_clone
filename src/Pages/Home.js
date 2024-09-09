import NavBar from "../Components/NavBar";
import Main from "../Components/Main";

export default function Home({ Open, setIsOpen, OpenMore, setOpenMore }) {
  return (
    <>
      {!Open ? (
        <div
          className={`tracking-wider font-sans  flex-col lg:flex-row min-h-full w-full flex`}
        >
          <NavBar
            OpenMore={OpenMore}
            setOpenMore={setOpenMore}
            Open={Open}
            setIsOpen={setIsOpen}
          />
          <Main OpenMore={OpenMore} setOpenMore={setOpenMore} />
        </div>
      ) : (
        <NavBar
          OpenMore={OpenMore}
          setOpenMore={setOpenMore}
          Open={Open}
          setIsOpen={setIsOpen}
        />
      )}
    </>
  );
}
