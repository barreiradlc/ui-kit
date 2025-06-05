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

  if(!imageUrl) return <span>Load ing image...</span>

  return <img width={width} height={height} src={imageUrl} alt={prompt} className={`rounded shadow `} />
}
export { AiImage };
