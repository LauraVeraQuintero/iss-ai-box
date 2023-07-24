export const getBitrateRules = async () => {
  try {
    const response = await fetch("assets/jsonbitrates.json");
    return await response.json();
  } catch (error) {
    console.error("Error reading JSON file:", error);
  }
};
