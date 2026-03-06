"use client";
import { Agents } from "@/lib/dummy_data";
import { useAgentStore } from "@/stores/agent_store";
import Image from "next/image";

const AgentName = () => {
  const { selectedAgent } = useAgentStore();

  const filter = Agents.filter((agent) => agent.id === selectedAgent);

  return (
    <div className="col-span-1 max-h-[90vh]">
      <div className="flex justify-center items-center content-center">
        {filter.map((agent, i) => {
          return (
            <div className="flex flex-col justify-center items-center" key={i}>
              <h1 className="neon-text text-[clamp(2rem,8vw,6rem)] wrap-break-word">
                {agent.name.toUpperCase()}
              </h1>

              <p className="text-white font-extralight font-mono mb-5">
                {agent.type.toUpperCase()}
              </p>

              <p className="w-60 text-gray-400 font-mono text-center">
                {agent.description}
              </p>

              <div className="grid grid-cols-2 gap-3 pt-10">
                {agent.skills.map((skills, b) => {
                  return (
                    <div
                      key={b}
                      className="relative flex items-center justify-center h-24 w-24 border border-red-500 rounded-tl-4xl rounded-br-4xl"
                    >
                      <Image
                        alt={skills.name}
                        src={skills.icon}
                        fill
                        className="object-contain p-3"
                      />
                    </div>
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
