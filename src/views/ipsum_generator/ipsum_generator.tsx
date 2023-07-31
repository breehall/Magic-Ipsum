import { useState, useEffect, useCallback } from 'react';
import { ButtonGroup, PolaroidPhoto } from '../../components';
import { ParagraphLength, composeMagicIpsum } from '../../utils';
import './ipsum_generator.scss';

export const IpsumGenerator = () => {
  const [amountOfParagraphs, setAmountOfParagraphs] = useState(3);
  const [lengthOfParagraphs, setLengthOfParagraphs] = useState('short');
  const [startWithMagic, setStartWithMagic] = useState<boolean>(false);
  const [generatedIpsum, setGeneratedIpsum] = useState<string>();

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
    generateMagicIpsum();
  }, [generateMagicIpsum]);

  const copyToClipboard = () => {
    const generatedText = document.getElementById(
      'ipsum-generator__output'
    )?.innerHTML;
    if (generatedText) {
      navigator.clipboard.writeText(generatedText).then(() => {});
    }
  };

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
      <p>
        Lorem ipsum doesn't have to be boring. Add a sprinkle of Disney magic to
        your next project.
      </p>

      <div className="ipsum-generator__form">
        <div className="ipsum-generator__photos">
          <PolaroidPhoto />
        </div>

        <div className="ipsum-generator__generator">
          <ButtonGroup
            items={paragraphAmountButtonGroupItems}
            label="✨ Paragraph Amount ✨"
            defaultSelectedId={`paragraph-amount-btn-${amountOfParagraphs}`}
            onClick={(e) => {
              setAmountOfParagraphs(
                Number((e.target as HTMLButtonElement).value)
              );
            }}
          />

          <ButtonGroup
            items={paragraphLengthButtonGroupItems}
            label="✨ Paragraph Length ✨"
            defaultSelectedId={`paragraph-short-btn-${lengthOfParagraphs}`}
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
              <span id="startWithMagicReset">🪄 Start with</span> "Magic ipsum
              dolor sit amet"
            </label>
          </div>

          <textarea
            id="ipsum-generator__output"
            defaultValue={generatedIpsum}
            readOnly
          ></textarea>

          <button onClick={copyToClipboard}>🪄 Copy to clipboard</button>
        </div>
      </div>
    </section>
  );
};
