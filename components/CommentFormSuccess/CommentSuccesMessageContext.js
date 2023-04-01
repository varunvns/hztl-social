import { createContext, useState, useEffect } from 'react';

const MessageContext = createContext({
  message: null,
  showMessage: function (messageData) {},
  hideMessage: function () {},
});

export function MessageContextProvider(props) {

  const [defaultMessage , setActiveMessage] = useState();

  useEffect(() => {
    if (
      defaultMessage &&
      (defaultMessage.status.toLowerCase() === 'success')
    ) {
      const timer = setTimeout(() => {
        setActiveMessage(null);
      }, 4000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [defaultMessage]);

  function showMessages(messageData) {
    setActiveMessage(messageData);
  }

  function hideMessages() {
    setActiveMessage(null);
  }

  const context = {
    message: defaultMessage,
    showMessage: showMessages,
    hideMessage: hideMessages,
  };

  return (
    <MessageContext.Provider value={context}>
      {props.children}
    </MessageContext.Provider>
  );
}

export default MessageContext;
