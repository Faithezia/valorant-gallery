"use client";

import { Agents } from "@/lib/dummy_data";
import { useAgentStore } from "@/stores/agent_store";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const AgentImage = () => {
  const { selectedAgent } = useAgentStore();

  const agent = Agents.find((a) => a.id === selectedAgent);

  return (
    <div className="w-full col-span-2 justify-center flex relative">
      <AnimatePresence mode="wait">
        {agent && (
          <motion.div
            key={agent.id}
            initial={{
              opacity: 0,
              scale: 0.95,
              filter: "blur(6px)",
              x: -10,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
              x: [0, -6, 6, -3, 3, 0],
            }}
            exit={{
              opacity: 0,
              filter: "blur(8px)",
              scale: 1.05,
            }}
            transition={{
              duration: 0.35,
            }}
          >
            <Image
              src={agent.imageSrc}
              alt={agent.name}
              width={500}
              height={500}
              className="object-cover"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AgentImage;
