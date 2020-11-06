import React, { useCallback, useState, useEffect } from 'react';

import { getLuminance } from 'polished';

import { GiPerspectiveDiceSixFacesRandom } from 'react-icons/gi';
import { Container, Content, Color } from './styles';

const Hexcolor: React.FC = () => {
  const [color, setColor] = useState('');
  const [isLighten, setIsLighten] = useState(false);

  const rand = useCallback((minimal: number, max: number) => {
    return Math.round(Math.random() * (max - minimal)) + minimal;
  }, []);

  const randomIndex = useCallback(
    (codeHex: Array<String>) => {
      return rand(0, codeHex.length - 1);
    },
    [rand],
  );

  const generateColor = useCallback(() => {
    const codeHex = [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
    ];

    let hex = '#';
    for (let i = 0; i < 6; i++) {
      const iIndex = randomIndex(codeHex);
      hex += codeHex[iIndex];
    }

    setIsLighten(getLuminance(hex) > 0.65);
    setColor(hex);
  }, [randomIndex]);

  useEffect(() => {
    generateColor();
  }, [generateColor]);

  return (
    <Container>
      <Content color={color}>
        <Color color={color} isLighten={isLighten}>
          <GiPerspectiveDiceSixFacesRandom size={80} />
        </Color>
        <h1>Hexcolor Generator</h1>

        <span>
          {color}
        </span>

        <button type="button" onClick={generateColor}>
          Gerar
        </button>
      </Content>
    </Container>
  );
};

export default Hexcolor;
