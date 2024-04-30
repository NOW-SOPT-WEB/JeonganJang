import LevelButton from "./components/@common/levelButton/LevelButton";
import Header from "./components/header/Header";
import Card from "./components/card/Card";
import styled from "styled-components";
import CardGameModal from "./components/cardGame/CardGameModal";
import useCardGame from "./hooks/useCardGame";

const App = () => {
  const {
    handleLevelBtnClick,
    handleChoice,
    resetGame,
    turns,
    completed,
    finished,
    setFinished,
    cards,
    choices,
  } = useCardGame();

  return (
    <>
      <Header resetGame={resetGame} turns={turns} completed={completed} />
      <LevelButton handleLevelBtnClick={handleLevelBtnClick} />
      <CardWrapper>
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={choices.includes(card) || card.status}
          />
        ))}
      </CardWrapper>
      {finished && (
        <CardGameModal resetGame={resetGame} setFinished={setFinished} />
      )}
    </>
  );
};

export default App;

export const CardWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2rem;
`;
