import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { useCallback } from 'react';

export const useRecaptcha = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const executeRecaptchaWithAction = useCallback(
    async (action: string) => {
      if (!executeRecaptcha) {
        console.log('Execute recaptcha not yet available');
        return null;
      }

      try {
        const token = await executeRecaptcha(action);
        return token;
      } catch (error) {
        console.error('Error executing recaptcha:', error);
        return null;
      }
    },
    [executeRecaptcha]
  );

  return { executeRecaptchaWithAction };
};