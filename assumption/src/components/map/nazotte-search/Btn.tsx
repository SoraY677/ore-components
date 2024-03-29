import styled from "@emotion/styled";

/**
 * style
 */
const Button = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  color: white;
  border: none;
  background-color: black;
  box-shadow: 0px 5px 5px grey;
  font-size: 10px;
`;

/**
 * Props
 */
interface Props {
  isNazotte: boolean;
  onClick?: () => void;
}
/**
 * なぞって機能のスイッチングボタン
 **/
export const Btn = ({ isNazotte = false, onClick }: Props) => {
  return (
    <>
      <Button onClick={onClick}>
        {(() => {
          if (isNazotte) {
            return <p>やめる</p>;
          } else {
            return <p>なぞる</p>;
          }
        })()}
      </Button>
    </>
  );
};
