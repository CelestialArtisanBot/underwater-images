export default {
  async fetch(request, env) {
    try {
      const themeOptions = ["bioluminescent", "ancient ruins", "treasure hunt", "mystic creatures", "deep sea exploration"];
      const randomTheme = themeOptions[Math.floor(Math.random() * themeOptions.length)];

      const inputs = {
        prompt: `A high-resolution, underwater scene with a ${randomTheme} theme, featuring vibrant ocean life, detailed coral reefs, and majestic sea creatures, with soft sunlight filtering down from above, and a sense of mystery and wonder. The scene is a mix of realistic and fantastical elements, with a captivating color palette.`,
      };

      const response = await env.AI.run(
        "@cf/stabilityai/stable-diffusion-xl-base-1.0",
        inputs,
      );

      return new Response(response, {
        headers: {
          "content-type": "image/png",
        },
      });
    } catch (error) {
      console.error("Error generating image:", error);
      return new Response("Error generating image", {
        status: 500,
      });
    }
  },
} satisfies ExportedHandler<Env>;
