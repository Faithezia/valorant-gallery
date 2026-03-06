import ElectricBorder from "@/components/ElectricBorder";
import AgentImage from "@/components/home/AgentImage";
import AgentList from "@/components/home/AgentList";
import AgentName from "@/components/home/AgentName";
import ValoLogo from "@/components/home/LogoSvg";
import RippleGrid from "@/components/RippleGrid";

const HomePage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <RippleGrid
          enableRainbow={true}
          rippleIntensity={0.05}
          gridSize={30}
          gridThickness={15}
          mouseInteraction={true}
          mouseInteractionRadius={1.2}
          opacity={0.8}
        />
      </div>

      <div className="absolute inset-0 flex justify-center items-center z-10 pointer-events-none">
        <ValoLogo />
      </div>

      <div className="relative z-20 p-6">
        <ElectricBorder
          color="#7df9ff"
          speed={1}
          chaos={0.1}
          style={{ borderRadius: 10, height: "90vh" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 h-full w-full px-10 place-items-center place-content-center">
            <AgentName />
            <AgentImage />
            <AgentList />
          </div>
        </ElectricBorder>
      </div>
    </div>
  );
};

export default HomePage;
