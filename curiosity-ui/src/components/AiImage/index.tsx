import { useEffect, useState } from 'react';
import { generateFromText } from './controller';

interface AiImageProps {
  prompt: string;
}

const AiImage: React.FC<AiImageProps> = ({ prompt }) => {
  const [imageUrl, setImageUrl] = useState('');
  const [imageSize, setImageSize] = useState({} as { width: number, height: number});
  
  const generateImage = async () => {
    setImageUrl('');

    try {
      const { url, height , width } = await generateFromText(prompt)

      if(!url || !height || !width) throw new Error('Error with response')

      setImageUrl(url);
      setImageSize({ height, width })
    } catch (err) {
      throw new Error('Error generating image')
    }
  };

  useEffect(() => {
    generateImage()
  },[])

  const { width, height } = imageSize

  if(!imageUrl) return <span>Loading image...</span>

  return <img 
    width={320} 
    height={320} 
    src={imageUrl} 
    alt={prompt} 
    className={`rounded shadow size-${Math.min(width, height)}`} 
  />
}

export { AiImage };
