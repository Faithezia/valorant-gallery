import { create } from "zustand";

interface AgentState {
  selectedAgent: number;
  selectAgent: (newAgent: number) => void;
}

export const useAgentStore = create<AgentState>((set) => ({
  selectedAgent: 1,
  selectAgent: (newAgent: number) => set({ selectedAgent: newAgent }),
}));
