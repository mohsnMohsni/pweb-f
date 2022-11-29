import { useRouter } from 'next/router';

export default function useUserLanguage() {
  const router = useRouter();
  const userLanguage = router.locale || 'en';
  return userLanguage;
}
