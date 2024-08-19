import React from 'react';
import Joyride from 'react-joyride';

const Tutorial = () => {
  return (
    <Joyride
      steps={[
        {
          target: '.add-candidate-button',
          content: 'Here you can add a candidate with a dog-themed name!',
          disableBeacon: true,
          hideNextButton: true, // This hides the "Next" button
        },
        {
          target: '.vote-button',
          content: 'Once connected, you can cast your vote here.',
          disableBeacon: true,
          hideNextButton: true, // This hides the "Next" button
        },
      ]}
      continuous={false} // Ensure continuous is set to false so that "Next" is not required
      showSkipButton={true}
      styles={{
        options: {
          primaryColor: '#5A67D8',
          zIndex: 1000,
        },
      }}
    />
  );
};

export default Tutorial;
