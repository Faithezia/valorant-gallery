"use client";

import { cn } from "@/lib/utils";
import { Agents } from "@/lib/dummy_data";
import Image from "next/image";
import { useAgentStore } from "@/stores/agent_store";

const AgentList = () => {
  const { selectAgent } = useAgentStore();

  return (
    <div className="max-w-full max-h-[40vh] w-full overflow-x-hidden pt-20 md:h-[90vh] md:max-h-[90vh]">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 px-2">
        {Agents.map((agent, i) => (
          <div
            key={i}
            className={cn(
              "relative cursor-pointer rounded-lg border-2 border-gray-700  text-white h-64 hover:border-gray-500 transition-colors bg-[rgba(125,249,255,0.1)] flex md:flex-row",
            )}
            onClick={() => selectAgent(agent.id)}
          >
            <div className="absolute inset-0 -top-[15%]">
              <Image
                src={agent.imageSrc}
                alt={agent.name}
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-b from-transparent to-[rgba(125,249,255,0.2)]"></div>
            <div className="bottom-0 right-0 left-0 absolute max-w-xl text-xl text-balance text-white">
              <h1 className="text-center text-4xl neon-text">
                {agent.name.toUpperCase()}
              </h1>
              <p className="text-center text-gray-200">
                {agent.type.toUpperCase()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgentList;
