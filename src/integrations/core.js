export const SendEmail = async ({ to, subject, body }) => {
  console.log('נשלח מייל ל:', to);
  console.log('נושא:', subject);
  console.log('תוכן:', body);
  // כאן אפשר לשלב בהמשך שירות מייל אמיתי כמו EmailJS או Resend
  return true;
};