import makeFAIcon from "utils/makeFAIcon";

import {
  faPhone,
  faEnvelope,
  faPlus,
  faBars,
  faLock,
  faTimes,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faTwitter,
  faFacebookF,
  faLinkedinIn,
  faGithubAlt,
  faMediumM,
} from "@fortawesome/free-brands-svg-icons";
export const LockIcon = makeFAIcon(faLock);
export const PhoneIcon = makeFAIcon(faPhone);
export const EnvelopIcon = makeFAIcon(faEnvelope);
export const PlusIcon = makeFAIcon(faPlus);
export const BarsIcon = makeFAIcon(faBars);
export const GithubIcon = makeFAIcon(faGithubAlt);
export const MediumIcon = makeFAIcon(faMediumM);
export const CloseIcon = makeFAIcon(faTimes);
export const LanguageIcon = makeFAIcon(faGlobe);
export const InstagramIcon = makeFAIcon(faInstagram);
export const TwitterIcon = makeFAIcon(faTwitter);
export const FacebookIcon = makeFAIcon(faFacebookF);
export const LinkedinIcon = makeFAIcon(faLinkedinIn);

export * from "config/CustomIcons";
