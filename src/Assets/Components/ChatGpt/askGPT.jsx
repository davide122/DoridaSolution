import axios from 'axios';

const askGPT = async (question) => {
  const response = await axios.post(
    'https://api.openai.com/v1/chat/completions',
    {
      model: 'gpt-4',
      messages: [{ role: "user", content: question }],
      max_tokens: 400,
    },
    {
      headers: {
        'Authorization': `${process.env.REACT_APP_OPENAI_KEY}`
      }
    }
  );
  return response.data.choices[0].message.content.slice(0,200);
};

export { askGPT };
