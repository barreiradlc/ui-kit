async function generateFromText(prompt: string) {
  const response = await fetch("https://api.thecatapi.com/v1/images/search")  

  const [image] = await response.json()

  console.log(image)

  return image
}


export { generateFromText };
