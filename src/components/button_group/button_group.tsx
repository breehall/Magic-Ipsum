/* eslint-disable @typescript-eslint/no-explicit-any */
import { FunctionComponent, useState } from 'react';
import './button_group.scss';

export type ButtonGroupItem = {
  id: string;
  label: string;
  value: string | number;
};

export type ButtonGroupProps = {
  items: ButtonGroupItem[];
  defaultSelectedId?: string;
  label: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const ButtonGroup: FunctionComponent<ButtonGroupProps> = ({
  items,
  defaultSelectedId,
  label,
  onClick,
}) => {
  const [selectedId, setSelectedId] = useState(defaultSelectedId);

  const handleButtonOnClick = (e: any) => {
    onClick(e);
    setSelectedId(e.target.id);
  };

  return (
    <>
      <fieldset>
        <legend className="buttonGroup__label">{label}</legend>
        <div className="buttonGroup__container">
          {items.map((button: ButtonGroupItem, key) => {
            const { id, label, value } = button;

            const classNames =
              id === selectedId
                ? 'buttonGroup__button--isSelected'
                : 'buttonGroup__button';

            return (
              <button
                className={classNames}
                value={value}
                onClick={handleButtonOnClick}
                id={id}
                key={key}
              >
                {label}
              </button>
            );
          })}
        </div>
      </fieldset>
    </>
  );
};
