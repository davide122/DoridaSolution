import axios from 'axios';

const sendToEvenlabs = async (text) => {
  const response = await axios.post(
    'https://api.elevenlabs.io/v1/text-to-speech/efJVaDDMBq2ch2Qf4phN',
    {
      text: text,
      model_id: "eleven_multilingual_v2",
      voice_settings: {
        stability: 0.5,
        similarity_boost: 0.5,
        style: 0.5,
        use_speaker_boost: true,
      }
    },
    {
      responseType: 'blob',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'audio/mpeg',
        'xi-api-key': "f6f761fd6413118d0c6239f8b97be3d8"
      }
    }
  );
  return URL.createObjectURL(response.data);
};

export { sendToEvenlabs };
