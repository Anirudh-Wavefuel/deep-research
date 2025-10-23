import { Agent } from "@mastra/core/agent";

export const myCustomAgent = new Agent({
  name: "my-custom-agent",
  instructions: "You are a helpful assistant that specializes in Solving Math Problems. Always be concise and accurate.",
  model: "openai/gpt-4o-mini"
});
