

async function getPlaceholderImage(prompt: string) {
  const response = await fetch("https://api.thecatapi.com/v1/images/search")  

  const [image] = await response.json()

  return image
}

async function generateFromText(prompt: string) {
  // TODO, find a good api to generate IA images
  return getPlaceholderImage(prompt)
}


export { generateFromText, getPlaceholderImage };
