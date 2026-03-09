"use client";
import { Agents } from "@/lib/dummy_data";
import { useAgentStore } from "@/stores/agent_store";
import Image from "next/image";
import PixelTransition from "../PixelTransition";
import FuzzyText from "../FuzzyText";
import { useEffect } from "react";
import useIsMobile from "@/hooks/IsMobileHook";

const AgentName = () => {
  const { selectedAgent } = useAgentStore();
  const isMobile = useIsMobile(768);
  const filter = Agents.filter((agent) => agent.id === selectedAgent);

  useEffect(() => {});
  return (
    <div className="col-span-1 max-h-[90vh] pt-5">
      <div className="flex justify-center items-center content-center">
        {filter.map((agent, i) => {
          return (
            <div className="flex flex-col justify-center items-center" key={i}>
              <FuzzyText
                baseIntensity={0.2}
                hoverIntensity={0.5}
                enableHover
                clickEffect
                glitchMode
                letterSpacing={2}
                fontSize={isMobile ? "3rem" : "5rem"}
                className="wrap-break-word neon-text text-[5rem]"
              >
                {agent.name.toUpperCase()}
              </FuzzyText>

              <p className="text-white font-extralight font-mono mb-5 pt-2">
                {agent.type.toUpperCase()}
              </p>
              <p className="w-60 text-gray-400 font-mono text-center">
                {agent.description}
              </p>
              <div className="grid grid-cols-4 gap-3 pt-10 md:grid-cols-2">
                {agent.skills.map((skills, b) => {
                  return (
                    <PixelTransition
                      key={b}
                      firstContent={
                        <Image
                          alt={skills.name}
                          src={skills.icon}
                          fill
                          className="object-contain p-3"
                        />
                      }
                      secondContent={
                        <div
                          style={{
                            width: "100%",
                            height: "100%",
                            display: "grid",
                            placeItems: "center",
                            backgroundColor: "#111823",
                          }}
                        >
                          <p
                            style={{
                              fontWeight: 900,
                            }}
                            className="text-white text-center text-[0.6rem] md:text-[0.8rem]"
                          >
                            {skills.name.toUpperCase()}
                          </p>
                        </div>
                      }
                      pixelColor="#7df9ff"
                      once={false}
                      animationStepDuration={0.4}
                    />
                    // <div
                    //   key={b}
                    //   className="relative flex items-center justify-center h-24 w-24 border border-red-500 rounded-tl-4xl rounded-br-4xl"
                    // >
                    //   <Image
                    //     alt={skills.name}
                    //     src={skills.icon}
                    //     fill
                    //     className="object-contain p-3"
                    //   />
                    // </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AgentName;
