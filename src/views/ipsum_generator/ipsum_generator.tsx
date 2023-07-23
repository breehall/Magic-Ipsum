import React, { useState, useEffect, useCallback } from 'react';
import { ButtonGroup } from '../../components';
import { ParagraphLength, composeMagicIpsum } from '../../utils';
import './ipsum_generator.scss';

export const IpsumGenerator = () => {
  const [amountOfParagraphs, setAmountOfParagraphs] = useState(1);
  const [lengthOfParagraphs, setLengthOfParagraphs] = useState('short');
  const [startWithMagic, setStartWithMagic] = useState<boolean>(false);
  const [generatedIpsum, setGeneratedIpsum] = useState<string[]>([]);

  const generateMagicIpsum = useCallback(() => {
    setGeneratedIpsum(
      composeMagicIpsum(
        amountOfParagraphs,
        lengthOfParagraphs as ParagraphLength,
        startWithMagic
      )
    );
  }, [amountOfParagraphs, lengthOfParagraphs, startWithMagic]);

  useEffect(() => {
    console.log('running effect');
    generateMagicIpsum();
  }, [generateMagicIpsum]);

  const paragraphAmountButtonGroupItems = [
    {
      id: 'paragraph-amount-btn-1',
      label: '1',
      value: 1,
    },
    {
      id: 'paragraph-amount-btn-2',
      label: '2',
      value: 2,
    },
    {
      id: 'paragraph-amount-btn-3',
      label: '3',
      value: 3,
    },
    {
      id: 'paragraph-amount-btn-4',
      label: '4',
      value: 4,
    },
    {
      id: 'paragraph-amount-btn-5',
      label: '5',
      value: 5,
    },
  ];

  const paragraphLengthButtonGroupItems = [
    {
      id: 'paragraph-short-btn-short',
      label: 'Short',
      value: 'short',
    },
    {
      id: 'paragraph-medium-btn-medium',
      label: 'Medium',
      value: 'medium',
    },
    {
      id: 'paragraph-long-btn-long',
      label: 'Long',
      value: 'long',
    },
  ];

  return (
    <section id="ipsum-generator">
      <ButtonGroup
        items={paragraphAmountButtonGroupItems}
        label="✨ Paragraph Amount ✨"
        defaultSelectedId="paragraph-amount-btn-1"
        onClick={(e) => {
          setAmountOfParagraphs(Number((e.target as HTMLButtonElement).value));
        }}
      />

      <ButtonGroup
        items={paragraphLengthButtonGroupItems}
        label="✨ Paragraph Length ✨"
        defaultSelectedId="paragraph-short-btn-short"
        onClick={(e) => {
          setLengthOfParagraphs((e.target as HTMLButtonElement).value);
        }}
      />

      <div>
        <input
          type="checkbox"
          onChange={() => {
            setStartWithMagic(!startWithMagic);
          }}
          name="generator-startWithMagic"
          id="generator-startWithMagic"
        />
        <label htmlFor="generator-startWithMagic">
          🪄 Start with "Magic ipsum dolor sit amet"
        </label>
      </div>

      {generatedIpsum.map((paragraph, key) => {
        return <p key={key}>{paragraph}</p>;
      })}
    </section>
  );
};
