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
        'Authorization': 'Bearer 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'
      }
    }
  );
  return response.data.choices[0].message.content.slice(0,200);
};

export { askGPT };
