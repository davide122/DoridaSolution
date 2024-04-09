import React, { useState } from 'react';
import { BsMic, BsMicFill } from "react-icons/bs";
import Loader from '../../Components/Commons/Style/Utils/Loader';
import useSpeechToTextResponse from './useSpeechToTextResponse';
import "../ChatGpt/chat.css"
const ChatWithGPT = () => {
  const [isListening, setIsListening] = useState(false);
  const [responseText, setResponseText] = useState('');
  const onResponseEnd = () => {
    console.log('onResponseEnd called, trying to restart listening...');
    startListening();
  };
  const { handleSpeechToTextResult, isLoading, error } = useSpeechToTextResponse(onResponseEnd);

  const startListening = () => {
    setIsListening(true);
    setResponseText('');
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = 'it-IT';
    recognition.start();

    recognition.onresult = async (event) => {
      const speechToText = event.results[0][0].transcript;
      const response = await handleSpeechToTextResult(speechToText);
      setResponseText(response);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.onerror = (event) => {
      console.error('Speech recognition error', event.error);
      setIsListening(false);
    };
  };

  return (
    <div>
      <button onClick={startListening} disabled={isListening || isLoading} className='Info-Button'>
        {isListening ? <BsMicFill /> : <BsMic />}
      </button>
      <div className='Chat'>
        {isLoading && <Loader />}
        {!handleSpeechToTextResult&&<Loader></Loader>}
      </div>
    </div>
  );
};

export default ChatWithGPT;
