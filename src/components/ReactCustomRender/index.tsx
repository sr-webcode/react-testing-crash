import React from 'react';
import { Text } from '@chakra-ui/react';

import { COMPONENT_REF } from './constants';

type TElementProps = {
  component: string;
  children?: Array<TElementProps> | string;
  props?: any;
};

type Props = {
  page: string;
  jsonElements: Array<TElementProps>;
};

type TCompReturn = string | React.ReactNode;

const generateComponents = (el: TElementProps, idx: number): TCompReturn => {
  const CompRef = COMPONENT_REF[el.component as keyof typeof COMPONENT_REF];
  if (typeof CompRef !== 'undefined') {
    return React.createElement(CompRef, { ...el?.props, key: idx }, el.children && el.children instanceof Array ? el.children.map((c, idx) => generateComponents(c, idx)) : el.children);
  }
};

const ReactCustomRender: React.FC<Props> = ({ page, jsonElements }) => {
  return (
    <>
      <Text>{page}</Text>
      {jsonElements.map((el, idx) => generateComponents(el, idx))}
    </>
  );
};

export default ReactCustomRender;
