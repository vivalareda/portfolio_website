import ConsoleText from "./ConsoleText";
import NameText from "./NameText";


const LandingSection = () => {
  return (
    <section className="relative w-full h-screen flex bg-red-700">
        <NameText/>
        <ConsoleText/>
    </section>
  );
}

export default LandingSection;
