import Body from './components/Body';
import Card from './components/Card';
import Image from './components/Image';
import Text from './components/Text';
import Button from './components/Button';

// every component that will be here should have similar props
//  or at the very least make some of the props optional because TS will complain

export const COMPONENT_REF = {
  card: Card,
  img: Image,
  body: Body,
  text: Text,
  button: Button
};
