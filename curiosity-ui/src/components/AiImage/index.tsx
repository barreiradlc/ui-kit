import { useEffect, useState } from 'react';

import { Runware, type ITextToImage } from "@runware/sdk-js";

const API_KEY = import.meta.env.VITE_HF_API_KEY

const runware = new Runware({ apiKey: API_KEY });

async function generateFromText(prompt: string) {
  const [ image ] = await runware.requestImages({
    positivePrompt: prompt,
    width: 320,
    height: 320,
    numberResults: 1,
    model: "civitai:102438@133677"
  }) as ITextToImage[]

  return image.imageURL
}

interface AiImageProps {
  prompt: string;
}

const AiImage: React.FC<AiImageProps> = ({ prompt }) => {
  const [imageUrl, setImageUrl] = useState('');
  
  const generateImage = async () => {
    setImageUrl('');

    try {
      const response = await generateFromText(prompt)

      if(!response) throw new Error('Error generating image')

      setImageUrl(response);
    } catch (err) {
      throw new Error('Error generating image')
    }
  };

  useEffect(() => {
    generateImage()
  },[])

  return <img src={imageUrl} alt={prompt} className="rounded shadow" />

}
export { AiImage };